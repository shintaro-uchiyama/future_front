import React from "react";
import SearchByNameBar from "../../components/SearchByNameBar";
import MemberTable from "../../components/MemberTable";

function SearchMember({ ...props }) {
    return (
        <div>
            <p><b>SearchMember</b></p>
            <SearchByNameBar />
            <MemberTable />
        </div>
    );
}

export default SearchMember;
