import React from "react";
import MemberRow from "../components/MemberRow";

function MemberTable({ ...props }) {
    const rows = [];
    if (!props.data.members.members) {
        return (<div></div>);
    }

    props.data.members.members.forEach((member) => {
        rows.push(
            <MemberRow member={member} key={member.id} />
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
