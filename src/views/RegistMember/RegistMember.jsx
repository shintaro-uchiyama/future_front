import React from "react";
import RegistNameBar from "../../components/RegistNameBar";
import RegistNameResult from "../../components/RegistNameResult";

function RegistMember({ ...props }) {
    return (
        <div>
            <p><b>RegistMember</b></p>
            <RegistNameBar />
            <RegistNameResult />
        </div>
    );
}

export default RegistMember;
