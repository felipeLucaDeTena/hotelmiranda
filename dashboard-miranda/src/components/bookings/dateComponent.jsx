/* eslint-disable react/no-array-index-key */
import React from "react";
import styled from "styled-components";

const DateContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

const PDates = styled.p`
    font-family: Poppins;
    letter-spacing: 0px;
    color: #393939;
    font-size: 12px;
    margin: 0;
    display: block;
`;
const PHours = styled.p`
    font-family: Poppins;
    font-weight: 100;
    letter-spacing: 0px;
    color: #393939;
    font-size: 10px;
    margin: 0;
    display: block;
`;
function DatesContainer({ date }) {
    return (
        <DateContainer>
            <PDates>{date[0]}</PDates>
            <PHours>{date[1]}</PHours>
        </DateContainer>
    );
}
export default DatesContainer;
