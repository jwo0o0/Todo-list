import styled from "styled-components";

export const TodoContainer = styled.div`
    width: 410px;
    height: 40px;
    background-color: white;
    border-bottom: 1px solid #434343;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const TodoCheckbox = styled.input`
    
`;

export const TodoText = styled.div`
    width: 300px;
    background-color: white;
    font-size: 14px;
`;

export const TodoDeleteBtn = styled.button`
    background-color: white;
    border-radius: 50%;
    width: 25px; height: 25px;
    border: 2px solid #D6DEFD;

    &:hover {
        background-color: #D6DEFD;
        cursor: pointer;
    }
`;

export const Todo = ({id, text, done}) => {
    return (
        <TodoContainer>
            <TodoCheckbox type='checkbox'></TodoCheckbox>
            <TodoText>{text}</TodoText>
            <TodoDeleteBtn>X</TodoDeleteBtn>
        </TodoContainer>
    )
}