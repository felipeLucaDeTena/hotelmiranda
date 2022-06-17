/* eslint-disable no-param-reassign */
import React, { useRef } from "react";
import { useDrag, useDrop } from "react-dnd";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { BsThreeDotsVertical } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { ItemType } from "../../data/itemtypes";
import DropDown from "../drop-down";
import { removeRoom } from "../../features/room-slice";

const Td = styled.td`
    padding: 0 20px;
`;
const Tr = styled.tr`
    width: 100%;
    height: 100px;
    border-bottom: 1px solid #c2c2c22c;
    position: relative;
`;
const FacilitiesContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: flex-start;
    height: 48px;
`;
const Id = styled.p`
    font: normal normal normal 14px/21px Poppins;
    letter-spacing: 0px;
    color: #799283;
    margin-left: 10px;
`;
const P = styled.p`
    font: normal normal medium 16px/25px Poppins;
    letter-spacing: 0px;
    color: #393939;
`;

const RoomPhoto = styled.img`
    width: 150px;
    height: 65px;
    border-radius: 5px;
    &:hover {
        transform: scale(1.02);
    }
`;
const RoomPhotoContainer = styled.div`
    display: flex;
`;
const StatusButton = styled.button`
    font: normal normal medium 16px/25px Poppins;
    letter-spacing: 0px;
    color: #ffffff;
    border-radius: 12px;
    border: none;
    width: 100px;
    height: 35px;
`;
function Room({ id, room, index, moveCard }) {
    const tagColors = {
        Available: "#5AD07A",
        Booked: "#E23428",
    };

    const ref = useRef(null);
    const [{ handlerId }, drop] = useDrop({
        accept: ItemType,
        collect(monitor) {
            return {
                handlerId: monitor.getHandlerId(),
            };
        },
        hover(item, monitor) {
            if (!ref.current) {
                return;
            }
            const dragIndex = item.index;
            const hoverIndex = index;
            if (dragIndex === hoverIndex) {
                return;
            }
            const hoverBoundingRect = ref.current?.getBoundingClientRect();
            const hoverMiddleY =
                (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
            const clientOffset = monitor.getClientOffset();
            const hoverClientY = clientOffset.y - hoverBoundingRect.top;
            if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
                return;
            }
            if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
                return;
            }
            moveCard(dragIndex, hoverIndex);

            item.index = hoverIndex;
        },
    });
    const [{ isDragging }, drag] = useDrag({
        type: ItemType,
        item: () => ({ id, index }),
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
        }),
    });
    const opacity = isDragging ? 0 : 1;
    drag(drop(ref));

    const dispatch = useDispatch();
    const handleDelete = () => {
        dispatch(removeRoom(id));
    };

    return (
        <Tr ref={ref} style={{ opacity }} data-handler-id={handlerId}>
            <Td>
                <RoomPhotoContainer>
                    <Link to={`/room/${room.id}`}>
                        <RoomPhoto src={room.photos.room} />
                    </Link>
                    <Id>{room.id.slice(0, -23)}</Id>
                </RoomPhotoContainer>
            </Td>

            <Td>
                <P>{room.bedtype}</P>
            </Td>
            <Td>
                <P>{room.number}</P>
            </Td>
            <Td>
                <FacilitiesContainer>
                    {room.facilities.map((facility, i) => (
                        // eslint-disable-next-line react/no-array-index-key
                        <span key={room.id + i}>
                            {(i ? ", " : " ") + facility}
                        </span>
                    ))}
                </FacilitiesContainer>
            </Td>

            <Td>
                <P>{room.price}</P>
            </Td>
            <Td>
                <StatusButton
                    type="button"
                    style={{
                        backgroundColor: tagColors[room.status],
                    }}
                >
                    {room.status}
                </StatusButton>
            </Td>
            <Td>
                <DropDown handleDelete={handleDelete} id={room.id} />
            </Td>
        </Tr>
    );
}
export default Room;
