/* eslint-disable react/no-array-index-key */
import axios from "axios";
import dayjs from "dayjs";
import React, { useEffect, useState } from "react";
import { AiOutlineCheckCircle, AiOutlineCloseCircle } from "react-icons/ai";

import styled from "styled-components";
import ArrowPagination from "../arrowPagination";
import Pagination from "../pagination";

const Container = styled.div`
    height: 25%;
    width: 90%;
    display: flex;
    flex-direction: column;
    background-color: white;
    border-radius: 10px;
    margin-bottom: 50px;
`;

const Comments = styled.div`
    height: 80%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    border-radius: 10px;
    margin-bottom: 20px;
`;
const CommentContainer = styled.div`
    width: 27%;
    height: 70%;
    box-shadow: 0px 20px 30px #00000014;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
`;
const IconContainer = styled.div`
    align-self: flex-end;
`;
const Comment = styled.p`
    font: normal normal normal 10px/28px Poppins;
    letter-spacing: 0px;
    color: #4e4e4e;
    width: 80%;
    overflow-y: scroll;
`;
const ProfileContainer = styled.div`
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    margin-bottom: 10px;
`;
const DataContainer = styled.div``;
const Img = styled.img`
    height: 100%;
`;
const Name = styled.p`
    margin: 0;
`;
const Time = styled.p`
    margin: 0;
    font: normal normal normal 8px/21px Poppins;
    letter-spacing: 0px;
    color: #799283;
`;
const H2 = styled.h2`
    margin: 50px 0 0 30px;
`;

function Review() {
    // eslint-disable-next-line global-require
    const relativeTime = require("dayjs/plugin/relativeTime");
    dayjs.extend(relativeTime);
    const [comments, setComments] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const [perPage] = useState(3);

    useEffect(() => {
        axios
            .get("http://localhost:4500/contact")
            .then((resp) => setComments(resp.data));
    }, []);

    const indexOfLastRoom = currentPage * perPage;
    const indexOfFirstRoom = indexOfLastRoom - perPage;
    const current = comments.slice(indexOfFirstRoom, indexOfLastRoom);
    const totalPagesNum = Math.ceil(comments.length / perPage);

    return (
        <Container>
            <H2>Latest Review by Customers</H2>
            <Comments>
                <ArrowPagination
                    data={comments}
                    pages={totalPagesNum}
                    setCurrentPage={setCurrentPage}
                    current={current}
                >
                    {comments &&
                        current.map(
                            (e, i) =>
                                i < 3 && (
                                    <CommentContainer key={e + i}>
                                        <Comment>{e.review.comment}</Comment>
                                        <ProfileContainer>
                                            <Img
                                                src={
                                                    e.img ||
                                                    "/blank-profile-photo.jpg"
                                                }
                                            />
                                            <DataContainer>
                                                <Name>
                                                    {e.customer.fullname}
                                                </Name>
                                                <Time>
                                                    {dayjs(e.date).fromNow()}
                                                </Time>
                                            </DataContainer>
                                            <IconContainer>
                                                <AiOutlineCheckCircle
                                                    style={{ color: "green" }}
                                                />
                                                <AiOutlineCloseCircle
                                                    style={{ color: "red" }}
                                                />
                                            </IconContainer>
                                        </ProfileContainer>
                                    </CommentContainer>
                                )
                        )}
                </ArrowPagination>
            </Comments>
        </Container>
    );
}
export default Review;
