import styled from "styled-components";

export const TodoDateContainer = styled.div`
    font-size: 11px;
    background-color: white;
    color: #434343;
    width: 80px;

    &.not-active {
        display: none;
    }
`;

const now = new Date();
const today = `${now.getFullYear()}. ${String(now.getMonth() + 1).padStart(2, '0')}. ${String(now.getDate()).padStart(2, '0')}`;

export const TodoDate = ({ isDelete }) => {
    return (
        <TodoDateContainer className={isDelete ? "not-active" : ""}>
            {today}
        </TodoDateContainer>
    )
}