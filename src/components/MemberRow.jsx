import React from "react";

function MemberRow({ ...props }) {
    return (
        <tr>
            <td>{props.member.id}</td>
            <td>{props.member.name}</td>
            <td>{props.member.createdAt}</td>
        </tr>
    );
}

export default MemberRow;
