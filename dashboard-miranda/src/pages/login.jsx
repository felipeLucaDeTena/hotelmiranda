import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { HandleError } from "../components/error";
import { getUsers } from "../features/users-slice";
import { useAuth } from "../context/authcontext";

const LoginContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    min-width: 400px;
    min-height: 400px;
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
    const userState = useSelector((state) => state.users);
    const [myEmail, setMyEmail] = useState("");
    const [myPassword, setMyPassword] = useState("");
    const [error, setError] = useState(false);
    const { dispatchAuth } = useAuth();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = (ev) => {
        ev.preventDefault();
        const myUser = userState.users.find(
            (usr) => usr.personal.email === myEmail
        );
        myUser.personal.password === myPassword
            ? dispatchAuth({ type: "login", payload: myUser }) &&
              navigate("/", { replace: true })
            : setError(true);
    };

    useEffect(() => {
        dispatch(getUsers());
    }, []);

    return (
        <PageContainer>
            <LoginContainer>
                <LoginIcon src="/logo.svg" />
                <LoginTitle>Hotel Dashboard Login </LoginTitle>
                {HandleError(error)}
                <LoginForm onSubmit={handleSubmit}>
                    <LoginInput
                        data-cy="email"
                        type="text"
                        name="email"
                        placeholder="Email"
                        value={myEmail}
                        onChange={(e) => setMyEmail(e.target.value)}
                    />
                    <LoginInput
                        data-cy="password"
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={myPassword}
                        onChange={(e) => setMyPassword(e.target.value)}
                    />
                    <LoginBtn data-cy="submit" type="submit">
                        LOGIN
                    </LoginBtn>
                </LoginForm>
            </LoginContainer>
        </PageContainer>
    );
}

export default LogIn;
