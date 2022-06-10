import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
import { ReactComponent as DashboardIcon } from "../../svg/dashboard.svg";
import { ReactComponent as RoomsIcon } from "../../svg/rooms.svg";
import { ReactComponent as BookingsIcon } from "../../svg/bookings.svg";
import { ReactComponent as UsersIcon } from "../../svg/users.svg";
import { ReactComponent as ContactIcon } from "../../svg/contact.svg";

import "../../iconstyles.css";

const NavContainer = styled.div`
    border: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 18%;
    min-width: 300px;
    height: 100%;
    background-color: white;
    box-shadow: 26px 0px 41px -39px rgba(0, 0, 0, 0.24);
`;

const Nav = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    width: 100%;
    height: 397px;
`;

const LogoContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    margin-top: 15px;
`;
const LogoTitleContainer = styled.div`
    margin-left: 20px;
`;
const LogoImg = styled.img`
    width: 40px;
`;

const NavLink = styled(Link)`
    display: flex;
    align-items: center;
    text-decoration: none;

    font: normal normal normal 18px/27px Poppins;
    letter-spacing: 0px;
    color: #799283;
    fill: #799283;
    border-left: 1px solid transparent;
    &:focus {
        border-left: 1px solid red;
        color: red;
        fill: red;
    }
`;

const NavFooter = styled.div``;
const Title = styled.h1`
    margin: 0;
    font: normal bold 600 Poppins;
    font-size: 28px;
    letter-spacing: 0px;
    color: #212121;
`;
const TitleSmall = styled.h4`
    font: normal normal 600 16px/25px Poppins;
    letter-spacing: 0px;
    color: #212121;
`;
const Paragraph = styled.p`
    margin: 0;
    font: normal normal 300 12px/18px Poppins;
    letter-spacing: 0px;
    color: #5d5449;
`;
const Paragraph2 = styled.p`
    margin: 0 0 60px 0;
    font: normal normal 300 14px/21px Poppins;
    letter-spacing: 0px;
    color: #799283;
`;

const ProfileContainer = styled.div`
    margin-top: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: end;
    width: 67%;
    height: 189px;
    box-shadow: 0px 20px 30px #00000014;
    border-radius: 18px;
    position: relative;
`;

const ProfileImg = styled.img`
    position: absolute;
    width: 70px;
    border-radius: 10%;
    top: -30px;
`;
const ProfileName = styled.h4`
    margin: 0;
    text-align: center;
    font: normal normal medium 16px/25px Poppins;
    letter-spacing: 0px;
    color: #393939;
    opacity: 1;
`;
const ProfileEmail = styled.p`
    margin: 20px 0 0 0;
    text-align: center;
    font: normal normal 300 12px/18px Poppins;
    letter-spacing: 0px;
    color: #b2b2b2;
    opacity: 1;
`;
const ProfileButton = styled.button`
    font: normal normal 600 14px/21px Poppins;
    background: #ebf1ef;
    padding: 3% 10%;
    border: none;
    border-radius: 8px;
    opacity: 1;
    margin: 20px 0 20px 0;
`;

function SideNav() {
    const [userData, setUserData] = useState("");

    useEffect(() => {
        axios
            .get("http://localhost:3001/user")
            .then((resp) => setUserData(resp.data[0]));
    }, []);

    return (
        userData && (
            <NavContainer>
                <LogoContainer>
                    <LogoImg src="/logo.svg" alt="none" />

                    <LogoTitleContainer>
                        <Title>travl</Title>
                        <Paragraph>Hotel Admin Dashboard</Paragraph>
                    </LogoTitleContainer>
                </LogoContainer>
                <Nav>
                    <NavLink to="/">
                        <DashboardIcon className="icons" /> Dashboard
                    </NavLink>
                    <NavLink to="/rooms">
                        <RoomsIcon className="icons" />
                        Rooms
                    </NavLink>
                    <NavLink to="/bookings">
                        <BookingsIcon className="icons" />
                        Bookings
                    </NavLink>
                    <NavLink to="/users">
                        <UsersIcon className="icons" />
                        User
                    </NavLink>
                    <NavLink to="/contact">
                        <ContactIcon className="icons" />
                        Contact
                    </NavLink>
                </Nav>
                <ProfileContainer>
                    <ProfileImg src={userData.personal.img} alt="none" />
                    <ProfileName>{userData.personal.fullname}</ProfileName>
                    <ProfileEmail>{userData.personal.email}</ProfileEmail>
                    <ProfileButton>Edit</ProfileButton>
                </ProfileContainer>
                <NavFooter>
                    <TitleSmall> Travl Hotel Admin Dashboard</TitleSmall>
                    <Paragraph2>© 2022 All Rights Reserved</Paragraph2>
                    <Paragraph2>Made with ❤ by Felipe Luca de Tena</Paragraph2>
                </NavFooter>
            </NavContainer>
        )
    );
}
export default SideNav;
