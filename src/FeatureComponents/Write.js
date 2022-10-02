import styled from "styled-components";
import write_icon from "../images/write-icon.png";

export const WriteBtnContainer = styled.div`
    .clicked {
        background-color: #B2C3FF;
        box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;   
    }    
`;

export const WriteBtn = styled.button`
    width: 40px; height: 40px;
    margin: 5px;
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

export const Write = ({ handleWriteBtnClick, isWrite }) => {
    return (
        <WriteBtnContainer >
            <WriteBtn 
                onClick={handleWriteBtnClick}
                className={isWrite ? "clicked" : ""}
            >
            <img src={write_icon} />
            </WriteBtn>
        </WriteBtnContainer>
    )
    
}

