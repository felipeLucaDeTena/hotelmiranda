import React, { useCallback, useEffect, useState } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import styled from "styled-components";
import update from "immutability-helper";
import { useDispatch, useSelector } from "react-redux";
import Room from "../components/rooms/room";
import { topRowRooms } from "../data/toprow-data";
import TopRow from "../components/toprow";
import { getRooms } from "../features/room-slice";

const RoomTable = styled.table`
    border-collapse: collapse;
    width: 90%;
    min-width: 760px;
    height: 600px;
    background-color: white;
    text-align: left;
    padding: 0 30px;
    border-radius: 20px;
    margin-top: 50px;
`;
const Tb = styled.tbody``;

function Rooms() {
    const roomsState = useSelector((state) => state.rooms);
    const [roomsData, setRoomsData] = useState("");

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getRooms()).then(() => {
            setRoomsData(roomsState.rooms);
        });
    }, []);

    useEffect(() => {
        setRoomsData(roomsState.rooms);
    }, [roomsState]);

    const moveCard = useCallback(
        (dragIndex, hoverIndex) => {
            setRoomsData((prevCards) =>
                update(prevCards, {
                    $splice: [
                        [dragIndex, 1],
                        [hoverIndex, 0, prevCards[dragIndex]],
                    ],
                })
            );
        },
        [roomsData]
    );

    const renderRoom = useCallback(
        (room, index) => (
            <Room
                key={room.id + index}
                index={index}
                room={room}
                moveCard={moveCard}
                id={room.id}
            />
        ),
        []
    );

    return (
        roomsData && (
            <DndProvider backend={HTML5Backend}>
                <RoomTable>
                    <TopRow data={topRowRooms} />
                    <Tb>
                        {roomsData.map((room, index) =>
                            renderRoom(room, index)
                        )}
                    </Tb>
                </RoomTable>
            </DndProvider>
        )
    );
}
export default Rooms;
