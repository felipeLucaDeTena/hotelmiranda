import styled from "styled-components";

const Error = styled.p`
    color: red;
`;

export function HandleError(error) {
    if (error) {
        return <Error>User or password invalid</Error>;
    }
}
