import React from "react";

function SearchByNameBar({ ...props }) {
    return (
        <form>
            <div>
                Name  <input type="text" />  <input type="submit" value="Search" />
            </div>
            <p>※PerfectMatchingOnly</p>
        </form>
    );
}

export default SearchByNameBar;
