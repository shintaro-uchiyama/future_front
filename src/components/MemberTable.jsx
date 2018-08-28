import React from "react";
import MemberRow from "../components/MemberRow";

function MemberTable({ ...props }) {
    return (
        <table>
            <thead>
                <tr>
                    <th>id</th>
                    <th>name</th>
                    <th>createdAt</th>
                    <th>updatedAt</th>
                </tr>
            </thead>
            <tbody>
                <MemberRow />
                <MemberRow />
            </tbody>
        </table>
    );
}

export default MemberTable;
