import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Room from "../components/rooms/room";
import TopRow from "../components/rooms/toprow";

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

    useEffect(() => {
        axios
            .get("http://localhost:3001/rooms")
            .then((resp) => setRoomsData(resp.data));
    }, []);

    return (
        roomsData && (
            <>
                <RoomTable>
                    <TopRow />
                    {roomsData.map(
                        (room, index) => index < 6 && <Room room={room} />
                    )}
                </RoomTable>
                <PaginationContainer />
            </>
        )
    );
}
export default Rooms;
