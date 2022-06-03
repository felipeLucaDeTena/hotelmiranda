/* eslint-disable react/no-array-index-key */
import React, { useEffect, useState } from "react";
import styled from "styled-components";

const Clearfix = styled.div`
    width: 90%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;
const Showing = styled.div`
    font: normal normal normal 14px/20px Poppins;
    letter-spacing: 0px;
    color: #393939;
`;
const PaginationContainer = styled.ul`
    display: flex;
`;
const PageItem = styled.li`
    list-style-type: none;
`;

const PageLink = styled.a`
    text-decoration: none;
    display: block;
    text-decoration: none;
    font: normal normal normal 14px/20px Poppins;
    background-color: transparent;
    border: 1px solid transparent;
    color: #135846;
    width: 30px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    margin: 0 5px;
    &:hover {
        background-color: #135846;
        border: 1px solid #135846;
        color: #ffffff;
    }
`;
const PageLinkButton = styled.a`
    display: block;
    text-decoration: none;
    font: normal normal normal 14px/20px Poppins;
    background-color: white;
    border: 1px solid #135846;
    color: #135846;
    border-radius: 5px;
    width: 60px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

function Pagination({ pages, setCurrentPage, currentRooms, roomsData }) {
    const numOfPages = [];

    for (let i = 1; i <= pages; i += 1) {
        numOfPages.push(i);
    }

    const [currentButton, setCurrentButton] = useState(1);

    useEffect(() => {
        setCurrentPage(currentButton);
    }, [currentButton, setCurrentPage]);

    return (
        <Clearfix>
            <Showing>
                Showing {currentRooms.length} out of {roomsData.length} entries
            </Showing>
            <PaginationContainer>
                <PageItem>
                    <PageLinkButton
                        href="#!"
                        onClick={() =>
                            setCurrentButton((prev) =>
                                prev === 1 ? prev : prev - 1
                            )
                        }
                    >
                        Previous
                    </PageLinkButton>
                </PageItem>
                {numOfPages.map((page, index) => (
                    <PageItem key={index}>
                        <PageLink
                            href="#!"
                            onClick={() => setCurrentButton(page)}
                        >
                            {page}
                        </PageLink>
                    </PageItem>
                ))}

                <PageItem>
                    <PageLinkButton
                        href="#!"
                        onClick={() =>
                            setCurrentButton((next) =>
                                next === numOfPages.length ? next : next + 1
                            )
                        }
                    >
                        Next
                    </PageLinkButton>
                </PageItem>
            </PaginationContainer>
        </Clearfix>
    );
}
export default Pagination;
