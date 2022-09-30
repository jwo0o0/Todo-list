import styled from "styled-components"

export const TitleContainer = styled.div`
    width: 100%;
    height: 150px;
    border: 1px solid black;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Title = styled.div`
    font-family: 'Nanum Gothic', sans-serif;
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

