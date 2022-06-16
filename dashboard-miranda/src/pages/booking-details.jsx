import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { getBookingById } from "../redux/booking-slice";

function BookingDetails() {
    const { id } = useParams();
    const bookingState = useSelector((state) => state.bookings);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getBookingById(id));
    }, []);
    console.log(bookingState.bookings);

    return <h1>{bookingState.bookings.id}</h1>;
}

export default BookingDetails;
