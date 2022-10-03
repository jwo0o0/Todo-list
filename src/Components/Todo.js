import axios from "axios";
import styled from "styled-components";

export const TodoContainer = styled.div`
    width: 410px;
    height: 40px;
    background-color: white;
    border-bottom: 1px solid #434343;
    display: flex;
    justify-content: space-between;
    align-items: center;

    button.not-active {
        visibility: hidden;
    }
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
    border: 1px solid #FFD19B;

    &:hover {
        background-color: #FFD19B;
        cursor: pointer;
    }
`;

const handleTodoDeleteBtnClick = (id, setTodos) => {
    axios.delete(`http://localhost:3001/todos/${id}`)
        .then(() => {
            axios.get("http://localhost:3001/todos/")
                .then((res) => {
                    setTodos(res.data);
                })
        })
        .catch((error) => {
            console.error('ERROR: ', error);
        })
}

const handleTodoCheckboxClick = (id) => {
    console.log('click!', id)
}

export const Todo = ({id, text, done, isDelete, setTodos}) => {
    return (
        <TodoContainer>
            <TodoCheckbox type='checkbox' checked={done} onChange={() => {handleTodoCheckboxClick(id)}}></TodoCheckbox>
            <TodoText>{text}</TodoText>
            <TodoDeleteBtn 
                className={isDelete ? "" : "not-active"}
                onClick={() => handleTodoDeleteBtnClick(id, setTodos)}
            >X</TodoDeleteBtn>
        </TodoContainer>
    )
}