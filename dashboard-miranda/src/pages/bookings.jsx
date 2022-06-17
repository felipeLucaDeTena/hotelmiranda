import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import Booking from "../components/bookings/booking";
import Pagination from "../components/pagination";
import TopRow from "../components/toprow";
import { topRowBookings } from "../data/toprow-data";
import { getBookings } from "../features/booking-slice";

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
    const bookingsState = useSelector((state) => state.bookings);
    const [bookingsData, setBookingsData] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const [perPage] = useState(6);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getBookings()).then(() => {
            setBookingsData(bookingsState.bookings);
        });
    }, []);

    useEffect(() => {
        setBookingsData(bookingsState.bookings);
    }, [bookingsState]);

    const indexOfLastRoom = currentPage * perPage;
    const indexOfFirstRoom = indexOfLastRoom - perPage;
    const current = bookingsData.slice(indexOfFirstRoom, indexOfLastRoom);
    const totalPagesNum = Math.ceil(bookingsData.length / perPage);

    return (
        bookingsData && (
            <>
                <RoomTable>
                    <TopRow data={topRowBookings} />
                    <Tb>
                        {current.map((booking) => (
                            <Booking key={booking.id} booking={booking} />
                        ))}
                    </Tb>
                </RoomTable>
                <Pagination
                    data={bookingsData}
                    pages={totalPagesNum}
                    setCurrentPage={setCurrentPage}
                    current={current}
                />
            </>
        )
    );
}
export default Rooms;
