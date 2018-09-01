import React from "react";

function SearchByNameBar({ ...props }) {
    return (
        <form>
            <div>
                Name  <input type="text" onChange={props.handleInputChange} />  <input type="submit" value="Search" onClick={props.handleClickSearch} />
            </div>
            <p>※PerfectMatchingOnly</p>
        </form>
    );
}

export default SearchByNameBar;
