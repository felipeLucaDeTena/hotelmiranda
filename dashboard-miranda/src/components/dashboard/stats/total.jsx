/* eslint-disable react/no-array-index-key */
import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";

import styled from "styled-components";

const Container = styled.div`
    height: 25%;
    background-color: white;
    border-radius: 10px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`;
const NumberContainer = styled.div`
    display: flex;
    flex-direction: column;
    font-weight: bold;
    margin: 0 5%;
    align-items: center;
`;
const Name = styled.div`
    font: normal normal 300 10px/21px Poppins;
    letter-spacing: 0px;
    color: #787878;
`;

const InfoContainer = styled.div`
    display: flex;
    align-items: center;
    border-radius: 10px;
    justify-content: space-between;
    margin-top: 5%;
    width: 100%;
`;

const TotalTitle = styled.h3`
    font: normal normal medium 15px/20px Poppins;
    font-size: 16px;
    letter-spacing: 0px;
    color: #135846;
    margin-bottom: 0;
`;
const TotalText = styled.div`
    width: 90%;
    margin: 2% 0 0 5%;
`;
const TotalP = styled.div`
    font: normal normal 300 10px/21px Poppins;
    letter-spacing: 0px;
    color: #787878;
    display: flex;
    justify-content: space-between;
`;

function Total() {
    const statNames = [
        { name: "Total Concierge" },
        { name: "Total Customer" },
        { name: "Total Room" },
        { name: "Total Transaction" },
    ];
    return (
        <Container>
            <InfoContainer>
                {statNames.map((e, i) => (
                    <NumberContainer key={e + i}>
                        650<Name>{e.name}</Name>
                    </NumberContainer>
                ))}
            </InfoContainer>

            <TotalText>
                <TotalTitle>
                    Let Travl Generate Your Annualy Report Easily
                </TotalTitle>
                <TotalP>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labo
                    <AiOutlineArrowRight
                        style={{ fontSize: "40px", color: "#135846" }}
                    />
                </TotalP>
            </TotalText>
        </Container>
    );
}
export default Total;
