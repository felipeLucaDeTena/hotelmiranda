import React from "react";
import styled from "styled-components";
import BookingNumbers from "../components/dashboard/booking-numbers";
import RecentBookings from "../components/dashboard/recentBookings";
import Review from "../components/dashboard/review";
import Stats from "../components/dashboard/stats";

const Container = styled.div`
    height: 1000px;
    width: 90%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

function Dashboard() {
    return (
        <>
            <BookingNumbers />
            <Container>
                <RecentBookings />
                <Stats />
            </Container>
            <Review />
        </>
    );
}
export default Dashboard;
