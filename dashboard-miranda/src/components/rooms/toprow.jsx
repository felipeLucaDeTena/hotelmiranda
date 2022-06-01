import React from "react";
import styled from "styled-components";

const Tr = styled.tr`
    height: 60px;
    border-bottom: 1px solid #c2c2c2;
`;

const Th = styled.th`
    font: normal normal 600 12px/20px Poppins;
    letter-spacing: 0px;
    color: #393939;
    padding: 0 20px;
`;

function TopRow() {
    return (
        <Tr>
            <Th>Room Name</Th>
            <Th>Bed Type</Th>
            <Th>Room Number</Th>
            <Th>Facilities</Th>
            <Th>Rate</Th>
            <Th>Status</Th>
        </Tr>
    );
}
export default TopRow;
