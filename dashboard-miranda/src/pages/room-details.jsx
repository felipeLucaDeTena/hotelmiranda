import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { getRoomById } from "../features/room-slice";

function RoomDetails() {
    const { id } = useParams();
    const roomState = useSelector((state) => state.rooms);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getRoomById(id));
    }, []);

    console.log(roomState.rooms);
    return <h1>{roomState.rooms.id}</h1>;
}

export default RoomDetails;
