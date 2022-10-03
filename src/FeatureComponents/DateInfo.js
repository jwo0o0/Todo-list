import styled from "styled-components";
import date_background_img from "../images/Dateinfo-background.svg";

export const DateContainer = styled.div`
    
`;

export const TodayDate = styled.div`
    width: 194px;
    position: relative;
    text-align: center;
    margin: 0 90px;

    > img {
        width: 100%;
        vertical-align: middle;
    }
    > a {
        position: absolute;
        top: 40%;
        left: 50%;
        text-align: center;
        transform: translate(-50%, -50%);
        background-color: transparent;
        color: #434343;
    }
`
const now = new Date();
const today = `${now.getFullYear()}. ${String(now.getMonth() + 1).padStart(2, '0')}. ${String(now.getDate()).padStart(2, '0')}`;

export const DateInfo = () => {
    return (
        <DateContainer>
            <TodayDate>
                <img src={date_background_img} />
                <a>{today}</a>
            </TodayDate>
        </DateContainer>
    )    
}