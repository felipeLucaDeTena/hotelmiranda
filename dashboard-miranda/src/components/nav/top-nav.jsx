import React from "react";
import styled from "styled-components";
import { RiBarChartHorizontalLine } from "react-icons/ri";
import { AiOutlineBell } from "react-icons/ai";
import { BiEnvelope } from "react-icons/bi";
import { FiLogOut } from "react-icons/fi";
import "../../iconstyles.css";
import { useAuth } from "../../context/authcontext";

const Nav = styled.nav`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100px;
    border: none;
    background-color: #fefefe;
`;

const ProfileImg = styled.img`
    width: 60px;
    border-radius: 10%;
    margin: 0 20px;
`;

const LanguageBtn = styled.button`
    border: none;
    border-left: 1px solid black;
    background-color: transparent;
    color: red;
    display: flex;
    align-items: center;
    margin: 0 20px;
`;

const TitleContainer = styled.div`
    display: flex;
    align-items: center;
    margin-left: 40px;
`;
const IconsContainer = styled.div`
    display: flex;
    align-items: center;
`;

function TopNav() {
    const { dispatchAuth } = useAuth();

    const handleLogout = (ev) => {
        ev.preventDefault();
        dispatchAuth({ type: "logout" });
    };

    return (
        <Nav>
            <TitleContainer>
                <RiBarChartHorizontalLine className="top-icons--2" />
                <h1>Title</h1>
            </TitleContainer>
            <IconsContainer>
                <BiEnvelope className="top-icons" />
                <AiOutlineBell className="top-icons" />
                <FiLogOut
                    className="top-icons"
                    onClick={(ev) => handleLogout(ev)}
                />
            </IconsContainer>
        </Nav>
    );
}
export default TopNav;
