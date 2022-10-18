import { useState } from 'react';
import axios from "axios";
import styled from "styled-components";
import { TodoDate } from "./TodoDate";
import edit_icon from "../images/edit-icon.svg";

export const TodoContainer = styled.div`
    width: 410px;
    height: 40px;
    background-color: white;
    border-bottom: 1px solid #434343;
    display: flex;
    justify-content: flex-start;
    align-items: center;

    button.not-active {
        display: none;
    }
`;

export const TodoCheckbox = styled.input`
    width: 13px;
    height: 13px;
    margin-left: 17px;
    margin-right: 17px;
`;

export const TodoText = styled.div`
    width: 300px;
    background-color: white;
    font-size: 14px;

    &.done {
        text-decoration: line-through;
    }
    &.edit-mode {
        display: none;
    }
`;

export const TodoDeleteBtn = styled.button`
    background-color: white;
    border-radius: 50%;
    width: 25px; height: 25px;
    margin-left: 30px;
    border: 1px solid #FFD19B;
    color: #434343;

    &:hover {
        background-color: #FFD19B;
        cursor: pointer;
    }
`;

export const TodoEditBtn = styled.button`
    width: 25px; height: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 5px;
    border-radius: 50%;
    border: none;
    background: none;

    >img {
        width: 20px; height: 20px;
        background: none;
    }
    &:hover {
        cursor: pointer;
    }
    &.delete-mode {
        display: none;
    }
    &.active {
        border: 1px solid #B2C3FF;
        :hover {
            background-color: #B2C3FF;
        }
    }
`

export const TodoEditForm = styled.form`
    width: 300px;   
    background-color: white;

    &.not-active {
        display: none;
    }
`

export const TodoEditInput = styled.input`
    background-color: white;
    border: none;
    border-bottom: 1px solid #434343;
`

const handleTodoDeleteBtnClick = (id, renderTodos) => {
    axios.delete(`http://localhost:3001/todos/${id}`)
        .then(() => {
            renderTodos();
        })
        .catch((error) => {
            console.error('ERROR: ', error);
        })
}

const handleTodoCheckboxClick = (id, done, renderTodos) => {
    axios({
        method: 'patch',
        url: `http://localhost:3001/todos/${id}`,
        data: {
            done: !done
        }
    })
    .then(() => {
        renderTodos();
    })
    .catch((error) => console.error('ERROR: ', error))
}

const handleEditBtnClick = (id, editInput, isEditMode, setEditMode, renderTodos) => {
    if (isEditMode === true) {
        axios({
            method: 'patch',
            url: `http://localhost:3001/todos/${id}`,
            data: {
                text: editInput
            }
        })
            .then(() => {
                renderTodos();
            })
            .catch((error) => console.error('ERROR: ', error));
    }
    setEditMode(!isEditMode);
}

export const Todo = ({ id, text, done, createdDate, isDelete, renderTodos}) => {
    const [isEditMode, setEditMode] = useState(false);
    const [editInput, setEditInput] = useState(text);

    const handleEditInputChange = (e) => {
        setEditInput(e.target.value);
    }

    const handleOnKeyPressEditForm = (e) => {
        if (e.key === 'Enter') {
            handleEditBtnClick(id, editInput, isEditMode, setEditMode, renderTodos)
        }
    }

    return (
        <TodoContainer>
            <TodoCheckbox 
                type='checkbox' 
                checked={done} 
                onChange={() => {handleTodoCheckboxClick(id, done, renderTodos)}}
            ></TodoCheckbox>
            <TodoText className={`${done ? "done" : ""} ${isEditMode ? "edit-mode" : ""}`}>{text}</TodoText>
            <TodoEditForm 
                className={isEditMode ? "" : "not-active"}
                onKeyPress={(e) => handleOnKeyPressEditForm(e)}>
                <TodoEditInput 
                    type="text" 
                    value={editInput}
                    onChange={(e) => {handleEditInputChange(e)}}
                ></TodoEditInput>
            </TodoEditForm>
            <TodoDeleteBtn 
                className={isDelete ? "" : "not-active"}
                onClick={() => handleTodoDeleteBtnClick(id, renderTodos)}
            >X</TodoDeleteBtn>
            <TodoDate isDelete={isDelete} createdDate={createdDate}></TodoDate>
            <TodoEditBtn 
                onClick={() => handleEditBtnClick(id, editInput, isEditMode, setEditMode, renderTodos)}
                className={`${isDelete ? "delete-mode" : ""} ${isEditMode ? "active" : ""}`}
            >
            <img src={edit_icon} alt="투두 수정 버튼"/>
            </TodoEditBtn>
        </TodoContainer>
    )
}