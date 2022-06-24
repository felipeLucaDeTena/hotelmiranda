import React from "react";
import styled from "styled-components";
import Chart from "./stats/chart";
import Reservations from "./stats/reservations";
import Total from "./stats/total";

const Container = styled.div`
    height: 90%;
    width: 47%;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

function Stats() {
    return (
        <Container>
            <Chart />
            <Reservations />
            <Total />
        </Container>
    );
}
export default Stats;
