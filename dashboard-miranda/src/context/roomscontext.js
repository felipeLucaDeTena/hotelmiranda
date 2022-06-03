/* eslint-disable react/destructuring-assignment */
import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const RoomContext = createContext();

function RoomContextProvider(props) {
    const [roomsData, setRoomsData] = useState("");

    useEffect(() => {
        axios
            .get("http://localhost:3001/rooms")
            .then((resp) => setRoomsData(resp.data));
    }, []);

    return (
        <RoomContext.Provider
            value={{
                roomsData,
                setRoomsData,
            }}
        >
            {props.children}
        </RoomContext.Provider>
    );
}

export default RoomContextProvider;
