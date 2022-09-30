import styled from "styled-components";
import { Delete } from "../FeatureComponents/Delete";
import { Write } from "../FeatureComponents/Write";
import { DateInfo } from "../FeatureComponents/DateInfo";

export const InfoContainer = styled.div`
    width: 100%;
    height: 100px;

    display: flex;
    justify-content: center;
    align-items: center;
    
`
export const Info = () => {
    return <InfoContainer>
        <Delete />
        <DateInfo />
        <Write />
    </InfoContainer>
}