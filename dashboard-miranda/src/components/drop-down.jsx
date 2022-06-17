import React, { useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { MdOutlineDelete } from "react-icons/md";
import { BiEditAlt } from "react-icons/bi";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { removeRoom } from "../features/room-slice";

const DropDownContainer = styled("div")`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0;
    width: 50px;
`;

const DropDownHeader = styled("div")``;

const DropDownListContainer = styled("div")``;

const DropDownList = styled("ul")`
    padding: 0;
`;

function DropDown({ id, handleDelete }) {
    const [isOpen, setIsOpen] = useState(false);
    const toggling = () => setIsOpen(!isOpen);

    return (
        <DropDownContainer>
            <DropDownHeader
                style={{ display: isOpen ? "flex" : "block" }}
                onClick={toggling}
            >
                <BsThreeDotsVertical />
            </DropDownHeader>
            {isOpen && (
                <DropDownListContainer>
                    <DropDownList>
                        <MdOutlineDelete
                            onClick={() => handleDelete() && setIsOpen(false)}
                            style={{ color: "red", fontSize: "1.5rem" }}
                            key={Math.random()}
                        />
                    </DropDownList>
                </DropDownListContainer>
            )}
        </DropDownContainer>
    );
}
export default DropDown;
