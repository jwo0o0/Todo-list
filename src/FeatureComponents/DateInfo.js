import styled from "styled-components";

export const DateContainer = styled.div`
    
`;

export const TodayDate = styled.div`
    width: 190px;
    height: 50px;
    border: 1px solid #434343;
    text-align: center;
    margin: 0 90px;
    border-radius: 30px;
    background-color: #D6DEFD;

    display: flex;
    justify-content: center;
    align-items: center;
`
const now = new Date();
const today = `${now.getFullYear()}. ${String(now.getMonth() + 1).padStart(2, '0')}. ${String(now.getDate()).padStart(2, '0')}`;

export const DateInfo = () => {
    return (
        <DateContainer>
            <TodayDate>{today}</TodayDate>
        </DateContainer>
    )    
}