import { useEffect, useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/authcontext";

const LoginContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 30vw;
    height: 25vw;
    background-color: white;
    border-radius: 10%;
    box-shadow: 0px 20px 30px #00000014;
`;
const PageContainer = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
`;
const LoginIcon = styled.img`
    width: 20%;

    top: 2;
`;
const LoginInput = styled.input`
    border: none;
    background: #ebf1ef;
    text-align: center;
    margin: 5px 0;
    height: 30px;
    width: 200px;
    border-radius: 5px;
    ::placeholder {
        color: #799283;
    }
`;
const LoginTitle = styled.h2`
    font: normal bold 600 Poppins;
    font-size: 28px;
    letter-spacing: 0px;
    color: #212121;
    text-align: center;
`;
const LoginForm = styled.form`
    display: flex;
    flex-direction: column;
`;

const LoginBtn = styled.button`
    font: normal normal 600 14px/21px Poppins;
    border: 2px solid #ebf1ef;
    padding: 2% 5%;
    border-radius: 8px;
    opacity: 1;
    margin: 20px 0 20px 0;
    background-color: white;
    &:hover {
        background-color: #799283;
        color: white;
    }
`;

function LogIn() {
    const [user, setUser] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const myUser = {
        user: "felipe",
        password: "2121",
    };

    const handleSubmit = (ev) => {
        ev.preventDefault();
        user === myUser.user && password === myUser.password
            ? auth.logIn()
            : auth.error();
    };

    return (
        <PageContainer>
            <LoginContainer>
                <LoginIcon src="/logo.svg" />
                <LoginTitle>Hotel Dashboard Login </LoginTitle>
                <LoginForm onSubmit={handleSubmit}>
                    <LoginInput
                        type="text"
                        name="email"
                        id="email"
                        placeholder="Email"
                        value={login.email}
                        required
                        onChange={(ev) => handleChange(ev, "email")}
                    />
                    <LoginInput
                        type="password"
                        name="password"
                        id="password"
                        placeholder="Password"
                        value={login.password}
                        required
                        onChange={(ev) => handleChange(ev, "password")}
                    />
                </LoginForm>
                <LoginBtn type="submit">LOGIN</LoginBtn>
            </LoginContainer>
        </PageContainer>
    );
}

export default LogIn;
