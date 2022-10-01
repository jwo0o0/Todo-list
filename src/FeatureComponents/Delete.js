import styled from "styled-components";
import delete_icon from "../images/trash-icon.png";

export const DeleteBtnConainer = styled.div`
    
`;

export const DeleteBtn = styled.button`
    width: 40px; height: 40px;
    background-color: #D6DEFD;
    border: 1px solid #434343;
    border-radius: 50%;

    &:hover {
        background-color: #B2C3FF;
        cursor: pointer;
    }

    > img {
        background-color: transparent;
    }
`;

export const Delete = () => {
    return (
        <DeleteBtnConainer>
            <DeleteBtn><img src={delete_icon} /></DeleteBtn>
        </DeleteBtnConainer>
    )
    
}