import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

function Dashboard() {
    const { id } = useParams;
    return <h1>{id}</h1>;
}
export default Dashboard;
