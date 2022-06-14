/* eslint-disable react/no-array-index-key */
import React, { useEffect, useState } from "react";
import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";
import styled from "styled-components";

const Clearfix = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const PaginationContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    height: 50vh;
    justify-content: space-between;
`;
const PageItem = styled.li`
    list-style-type: none;
`;

const PageLinkButton = styled.a`
    font: normal normal normal 60px/20px Poppins;
    color: #135846;
    background-color: transparent;
    border: none;
`;

function ArrowPagination({ pages, setCurrentPage, children }) {
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
            <PaginationContainer>
                <PageItem>
                    {currentButton === 1 ? (
                        <PageLinkButton style={{ color: "transparent" }}>
                            <AiOutlineArrowLeft />
                        </PageLinkButton>
                    ) : (
                        <PageLinkButton
                            href="#!"
                            onClick={() =>
                                setCurrentButton((prev) =>
                                    prev === 1 ? prev : prev - 1
                                )
                            }
                        >
                            <AiOutlineArrowLeft />
                        </PageLinkButton>
                    )}
                </PageItem>
                {children}
                <PageItem>
                    {currentButton === numOfPages.length ? (
                        <PageLinkButton style={{ color: "transparent" }}>
                            <AiOutlineArrowRight />
                        </PageLinkButton>
                    ) : (
                        <PageLinkButton
                            href="#!"
                            onClick={() =>
                                setCurrentButton((next) =>
                                    next === numOfPages.length ? next : next + 1
                                )
                            }
                        >
                            <AiOutlineArrowRight />
                        </PageLinkButton>
                    )}
                </PageItem>
            </PaginationContainer>
        </Clearfix>
    );
}
export default ArrowPagination;
