/* eslint-disable react/no-array-index-key */
import React from "react";
import styled from "styled-components";

const Thead = styled.thead`
    height: 60px;
    border-bottom: 1px solid #c2c2c2;
`;
const Th = styled.th`
    font: normal normal 600 12px/20px Poppins;
    letter-spacing: 0px;
    color: #393939;
    padding: 0 20px;
`;
function TopRow({ data }) {
    return (
        <Thead>
            <tr>
                {data.map((element, i) => (
                    <Th key={element + i}>{element}</Th>
                ))}
            </tr>
        </Thead>
    );
}
export default TopRow;
