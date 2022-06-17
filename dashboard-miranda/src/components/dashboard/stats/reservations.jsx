/* eslint-disable react/no-array-index-key */
import React from "react";
import styled from "styled-components";

const Container = styled.div`
    border-radius: 10px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;
const NumberContainer = styled.div`
    display: flex;
    font-weight: bold;
    margin-left: 10px;
    color: white;
    width: 80%;
    justify-content: space-between;
`;
const Name = styled.div`
    font: normal normal 300 10px/21px Poppins;
    letter-spacing: 0px;
`;

const InfoContainer = styled.div`
    width: 44%;
    height: 90px;
    background-color: #135846;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
`;

function Reservations() {
    const statNames = [
        { name: "Available Room Today" },
        { name: "Sold Out Room Today" },
    ];
    return (
        <Container>
            {statNames.map((e, i) => (
                <InfoContainer key={e + i}>
                    <NumberContainer>
                        <Name>{e.name}</Name>659
                    </NumberContainer>
                </InfoContainer>
            ))}
        </Container>
    );
}
export default Reservations;
