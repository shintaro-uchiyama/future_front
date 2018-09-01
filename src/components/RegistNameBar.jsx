import React from "react";
import gql from "graphql-tag";
import { Mutation } from "react-apollo";

const ADD_MEMBER = gql`
mutation ReginstMember($name: String!){
    registMember(name: $name) {
      registMember {
        id
        name
      }
      errors {
        code
        message
      }
    }
  }  
`;

function RegistNameBar({ ...props }) {
    let input;
    return (
        <Mutation mutation={ADD_MEMBER}>
            {(addMember, { loading, error, data }) => (
                <div>
                    <form
                        onSubmit={e => {
                            e.preventDefault();
                            addMember({ variables: { name: input.value } });

                            input.value = "";
                        }}
                    >
                        <div>
                            Name  <input type="text" ref={node => { input = node; }} />  <input type="submit" value="Regist" />
                        </div>
                    </form>
                    {data && <p>Regist Success!!</p>}
                    {loading && <p>Loading...</p>}
                    {error && <p>Error :( Please try again</p>}
                </div>
            )}
        </Mutation>
    );
}

export default RegistNameBar;
