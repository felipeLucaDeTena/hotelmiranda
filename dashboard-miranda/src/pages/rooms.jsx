import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import styled from "styled-components";
import update from "immutability-helper";
import Room from "../components/rooms/room";
import TopRow from "../components/rooms/toprow";
import Pagination from "../components/pagination";

const RoomTable = styled.table`
    border-collapse: collapse;
    width: 90%;
    min-width: 760px;
    height: 600px;
    background-color: white;
    text-align: left;
    padding: 0 30px;
    border-radius: 20px;
    margin-top: 20px;
`;

const PaginationContainer = styled.div``;

function Rooms() {
    const [roomsData, setRoomsData] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const [roomsPerPage] = useState(6);

    useEffect(() => {
        axios
            .get("http://localhost:3001/rooms")
            .then((resp) => setRoomsData(resp.data));
    }, []);

    const moveCard = useCallback((dragIndex, hoverIndex) => {
        setRoomsData((prevCards) =>
            update(prevCards, {
                $splice: [
                    [dragIndex, 1],
                    [hoverIndex, 0, prevCards[dragIndex]],
                ],
            })
        );
    }, []);

    const renderRoom = useCallback(
        (room, index) => (
            <Room
                key={room.id}
                index={index}
                room={room}
                moveCard={moveCard}
                id={room.id}
            />
        ),
        []
    );

    const indexOfLastRoom = currentPage * roomsPerPage;
    const indexOfFirstRoom = indexOfLastRoom - roomsPerPage;
    const currentRooms = roomsData.slice(indexOfFirstRoom, indexOfLastRoom);
    const totalPagesNum = Math.ceil(roomsData.length / roomsPerPage);

    return (
        roomsData && (
            <>
                <DndProvider backend={HTML5Backend}>
                    <RoomTable>
                        <TopRow />
                        {currentRooms.map((room, index) =>
                            renderRoom(room, index)
                        )}
                    </RoomTable>
                </DndProvider>
                <Pagination
                    roomsData={roomsData}
                    pages={totalPagesNum}
                    setCurrentPage={setCurrentPage}
                    currentRooms={currentRooms}
                />
            </>
        )
    );
}
export default Rooms;
