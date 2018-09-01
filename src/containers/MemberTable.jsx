import React from "react";
import gql from "graphql-tag";
import { Query } from "react-apollo";
import MemberTable from "../components/MemberTable";

const GET_MEMBERS_BY_NAME = gql`
query Members($name: String!) {
    members(name: $name) {
      members {
        id
        name
        createdAt
        updatedAt
      }
      errors {
        code
        message
      }
    }
  }  
`;

const SearchMember = ({ ...props }) => (
    <Query query={GET_MEMBERS_BY_NAME} variables={{ name: "testName" }}>
        {({ loading, error, data }) => {
            if (loading) return "Loading...";
            if (error) return `Error! ${error.message}`;

            return (
                <MemberTable data={data} />
            );
        }}
    </Query>
);

export default SearchMember;