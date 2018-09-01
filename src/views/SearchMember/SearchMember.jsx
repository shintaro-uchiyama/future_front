import React from "react";
import SearchByNameBar from "../../components/SearchByNameBar";
import MemberTable from "../../containers/MemberTable";

class SearchMember extends React.Component {
    constructor() {
        super();
        this.state = {
            input: {
                name: ""
            },
            search: {
                name: ""
            }
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleClickSearch = this.handleClickSearch.bind(this);
    }

    handleInputChange(event) {
        this.setState({
            input: {
                name: event.target.value
            }
        });
    }

    handleClickSearch(event) {
        event.preventDefault();
        this.setState({
            search: {
                name: this.state.input.name
            }
        });
    }

    render() {
        return (
            <div>
                <p><b>SearchMember</b></p>
                <SearchByNameBar handleInputChange={this.handleInputChange} handleClickSearch={this.handleClickSearch} />
                <MemberTable data={this.props.data} name={this.state.search.name} />
            </div>
        )
    }
}

export default SearchMember;
