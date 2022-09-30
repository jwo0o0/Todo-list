import styled from "styled-components"

export const TitleContainer = styled.div`
    width: 100%;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Title = styled.div`
    font-weight: 700;
    font-size: 40px;
    color: #434343;

    width: 250px;
    border-bottom: 2px solid #B2C3FF;
    text-align: center;

`


export const Header = () => {
    return (
        <TitleContainer>
            <Title>Todo List</Title>
        </TitleContainer>
    )
}

