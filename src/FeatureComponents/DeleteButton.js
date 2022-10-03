import styled from "styled-components";
import delete_icon from "../images/trash-icon.svg";

export const DeleteBtnConainer = styled.div`
    .clicked {
        background-color: #FFBA68;
        box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
    }
`;

export const DeleteBtn = styled.button`
    width: 40px; height: 40px;
    margin: 5px;
    background-color: #FFD19B;
    border: 1px solid #434343;
    border-radius: 50%;

    &:hover {
        background-color: #FFBA68;
        cursor: pointer;
    }

    > img {
        background-color: transparent;
    }
`;


export const Delete = ({ handleDeleteBtnClick, isDelete }) => {
    return (
        <DeleteBtnConainer>
            <DeleteBtn 
                onClick={handleDeleteBtnClick} 
                className={isDelete ? "clicked" : ""}
            >
            <img src={delete_icon} />
            </DeleteBtn>
        </DeleteBtnConainer>
    )
    
}