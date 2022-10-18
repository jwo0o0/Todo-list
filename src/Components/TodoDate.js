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

export const TodoDate = ({ isDelete, createdDate }) => {
    return (
        <TodoDateContainer className={isDelete ? "not-active" : ""}>
            {createdDate}
        </TodoDateContainer>
    )
}