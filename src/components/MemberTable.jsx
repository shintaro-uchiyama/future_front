import React from "react";
import MemberRow from "../components/MemberRow";

function MemberTable({ ...props }) {
    const rows = [];
    props.data.members.members.forEach((member) => {
        rows.push(
            <MemberRow member={member} />
        );
    });
    return (
        <table>
            <thead>
                <tr>
                    <th>id</th>
                    <th>name</th>
                    <th>createdAt</th>
                </tr>
            </thead>
            <tbody>
                {rows}
            </tbody>
        </table>
    );
}

export default MemberTable;
