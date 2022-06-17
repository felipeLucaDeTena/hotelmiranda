import React from "react";
import styled from "styled-components";

const Container = styled.div`
    background-color: white;
    height: 90%;
    width: 47%;
    border-radius: 10px;
`;
const Calendar = styled.div``;
const BookingData = styled.div``;

function RecentBookings() {
    return (
        <Container>
            <Calendar />
            <BookingData />
        </Container>
    );
}
export default RecentBookings;
