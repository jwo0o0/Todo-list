import styled from "styled-components";

export const WriteBtnContainer = styled.div`

`;

export const WriteBtn = styled.button`
    width: 40px; height: 40px;
    background-color: #D6DEFD;
    border: 1px solid #434343;
    border-radius: 50%;

    &:hover {
        background-color: #B2C3FF;
        cursor: pointer;
    }
`;

export const Write = () => {
    return (
        <WriteBtnContainer>
            <WriteBtn>쓰기</WriteBtn>
        </WriteBtnContainer>
    )
    
}

