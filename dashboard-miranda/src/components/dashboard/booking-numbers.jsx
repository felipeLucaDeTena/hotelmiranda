/* eslint-disable react/no-array-index-key */
import React from "react";
import { BiBed } from "react-icons/bi";
import { BsCalendarCheck } from "react-icons/bs";
import { MdLogout, MdLogin } from "react-icons/md";

import styled from "styled-components";

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    width: 90%;
    margin-top: 50px;
`;
const NumberContainer = styled.div`
    display: flex;
    flex-direction: column;
    font-weight: bold;
    margin-left: 10px;
`;
const Name = styled.div`
    font: normal normal 300 10px/21px Poppins;
    letter-spacing: 0px;
    color: #787878;
`;

const InfoContainer = styled.div`
    width: 20.6%;
    height: 90px;
    background-color: white;
    display: flex;
    align-items: center;
    border-radius: 10px;
`;
const IconContainer = styled.div`
    background-color: #ffedec;
    color: #e23428;
    height: 50px;
    width: 50px;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    margin-left: 15px;
    &:hover {
        background-color: #e23428;
        color: #ffedec;
    }
`;

function BookingNumbers() {
    const statNames = [
        { name: "New Booking", icon: <BiBed /> },
        { name: "Scheduled Rooms", icon: <BsCalendarCheck /> },
        { name: "Check in", icon: <MdLogin /> },
        { name: "Check Out ", icon: <MdLogout /> },
    ];
    return (
        <Container>
            {statNames.map((e, i) => (
                <InfoContainer key={e + i}>
                    <IconContainer>{e.icon}</IconContainer>
                    <NumberContainer>
                        650<Name>{e.name}</Name>
                    </NumberContainer>
                </InfoContainer>
            ))}
        </Container>
    );
}
export default BookingNumbers;
