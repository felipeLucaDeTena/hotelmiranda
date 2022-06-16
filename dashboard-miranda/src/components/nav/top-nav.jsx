import React, { useEffect } from "react";
import styled from "styled-components";
import { RiBarChartHorizontalLine } from "react-icons/ri";
import { AiOutlineSearch, AiOutlineHeart, AiOutlineBell } from "react-icons/ai";
import { BiEnvelope, BiMessageDetail } from "react-icons/bi";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import "../../iconstyles.css";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../../redux/users-slice";

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
    return (
        <Nav>
            <TitleContainer>
                <RiBarChartHorizontalLine className="top-icons--3" />
                <h1>Title</h1>
            </TitleContainer>
            <IconsContainer>
                <BiEnvelope className="top-icons" />
                <AiOutlineBell className="top-icons" />
            </IconsContainer>
        </Nav>
    );
}
export default TopNav;
