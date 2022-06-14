import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import Room from "../components/rooms/room";

function RoomDetails() {
    const { id } = useParams();
    const [room, setRoom] = useState("");

    useEffect(() => {
        axios
            .get(`http://localhost:3001/rooms/${id}`)
            .then((resp) => console.log(room) && setRoom(resp.data));
    }, []);

    return <h1>{id}</h1>;
}

export default RoomDetails;
