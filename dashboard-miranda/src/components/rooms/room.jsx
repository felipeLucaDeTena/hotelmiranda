import React from "react";
import styled from "styled-components";

const Td = styled.td`
    padding: 0 20px;
`;

const Tr = styled.tr`
    width: 100%;
    height: 100px;
    border-bottom: 1px solid #c2c2c22c;
`;

const FacilitiesContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: flex-start;
    height: 48px;
`;

const Id = styled.p`
    font: normal normal normal 14px/21px Poppins;
    letter-spacing: 0px;
    color: #799283;
    margin-left: 10px;
`;
const P = styled.p`
    font: normal normal medium 16px/25px Poppins;
    letter-spacing: 0px;
    color: #393939;
`;

const RoomPhoto = styled.img`
    width: 150px;
    height: 65px;
    border-radius: 5px;
`;
const RoomPhotoContainer = styled.div`
    display: flex;
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

function Room({ room }) {
    const tagColors = {
        Available: "#5AD07A",
        Booked: "#E23428",
    };
    return (
        <Tr>
            <Td>
                <RoomPhotoContainer>
                    <RoomPhoto src={room.photos.room} />
                    <Id>{room.id.slice(0, -23)}</Id>
                </RoomPhotoContainer>
            </Td>

            <Td>
                <P>{room.bedtype}</P>
            </Td>
            <Td>
                <P>{room.number}</P>
            </Td>
            <Td>
                <FacilitiesContainer>
                    {room.facilities.map((facility, index) => (
                        <span key={room.id}>
                            {(index ? ", " : " ") + facility}
                        </span>
                    ))}
                </FacilitiesContainer>
            </Td>

            <Td>
                <P>{room.price}</P>
            </Td>
            <Td>
                <StatusButton
                    type="button"
                    style={{
                        backgroundColor: tagColors[room.status],
                    }}
                >
                    {room.status}
                </StatusButton>
            </Td>
        </Tr>
    );
}
export default Room;
