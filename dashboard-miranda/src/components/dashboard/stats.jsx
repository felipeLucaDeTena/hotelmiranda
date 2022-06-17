import React from "react";
import styled from "styled-components";
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
const Graph = styled.div`
    height: 50%;
    background-color: white;
    border-radius: 10px;
    width: 100%;
`;

function Stats() {
    return (
        <Container>
            <Graph />
            <Reservations />
            <Total />
        </Container>
    );
}
export default Stats;
