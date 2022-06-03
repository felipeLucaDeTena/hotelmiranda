import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import TopNav from "../components/nav/top-nav";

function Users() {
    const { id } = useParams;
    return <h1>{id}</h1>;
}
export default Users;
