import React from "react";

function RegistNameBar({ ...props }) {
    return (
        <form>
            <div>
                Name  <input type="text" />  <input type="submit" value="Regist" />
            </div>
        </form>
    );
}

export default RegistNameBar;
