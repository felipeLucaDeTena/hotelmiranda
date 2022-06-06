import React from "react";
import styled from "styled-components";
import { topRowRooms } from "../../data/toprow-data";

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
            {topRowRooms.map((element) => (
                <Th key={element}>{element}</Th>
            ))}
        </Tr>
    );
}
export default TopRow;
