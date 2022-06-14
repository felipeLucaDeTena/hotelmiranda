/* eslint-disable no-param-reassign */
import dayjs from "dayjs";
import React, { useRef } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { ItemType } from "../../data/itemtypes";
import DatesContainer from "./dateComponent";

const Td = styled.td`
    padding: 0 20px;
`;
const Tr = styled.tr`
    width: 100%;
    height: 100px;
    border-bottom: 1px solid #c2c2c22c;
`;

const Id = styled.p`
    font: normal normal normal 14px/21px Poppins;
    letter-spacing: 0px;
    color: #799283;
    margin: 0;
`;

const P = styled.p`
    font-family: Poppins;
    letter-spacing: 0px;
    color: #393939;
    font-size: 14px;
    margin: 0;
`;

const NameContainer = styled.div`
    display: flex;
    flex-direction: column;
`;
const StatusButton = styled.button`
    font: normal normal medium 16px/25px Poppins;
    letter-spacing: 0px;
    color: #ffffff;
    border-radius: 12px;
    border: none;
    width: 100px;
    height: 35px;
`;
const PopUpButton = styled.button`
    font: normal normal medium 16px/25px Poppins;
    letter-spacing: 0px;
    color: #ffffff;
    border-radius: 12px;
    border: none;
    width: 100px;
    height: 35px;
`;
function Booking({ booking }) {
    const tagBackgroundColors = {
        Booked: "#E8FFEE",
        Refund: "#FFEDEC",
        inProgress: "#fbf9db",
    };
    const tagColors = {
        Booked: "#5AD07A",
        Refund: "#E23428",
        inProgress: "#e3d001",
    };
    const orderDate = dayjs(booking.orderdate)
        .format("MMMM D YYYY, h:mm A")
        .split(",");
    const checkIn = dayjs(booking.checkin)
        .format("MMMM D YYYY, h:mm A")
        .split(",");
    const checkOut = dayjs(booking.checkout)
        .format("MMMM D YYYY, h:mm A")
        .split(",");

    console.log(orderDate);

    return (
        <Tr>
            <Td>
                <NameContainer>
                    <Link
                        to={`/booking/${booking.id}`}
                        style={{ textDecoration: "none" }}
                    >
                        <P>{booking.guest.fullname}</P>
                    </Link>
                    <Id>{booking.guest.id.slice(0, -23)}</Id>
                </NameContainer>
            </Td>
            <Td>
                <P>{orderDate}</P>
            </Td>
            <Td>
                <DatesContainer date={checkIn} />
            </Td>
            <Td>
                <DatesContainer date={checkOut} />
            </Td>
            <Td>
                <PopUpButton>View Notes</PopUpButton>
            </Td>

            <Td>
                <P>{booking.roomtype.type}</P>
            </Td>
            <Td>
                <StatusButton
                    type="button"
                    style={{
                        backgroundColor: tagBackgroundColors[booking.status],
                        color: tagColors[booking.status],
                    }}
                >
                    {booking.status}
                </StatusButton>
            </Td>
        </Tr>
    );
}
export default Booking;
