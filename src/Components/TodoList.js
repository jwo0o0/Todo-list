import { useEffect, useState } from "react";
import styled from "styled-components";
import axios from 'axios';
import { Todo } from "./Todo";
import { WriteInput } from "../FeatureComponents/WriteInput";

export const TodoListContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`;

export const TodoListBox = styled.div`
    width: 460px; height: 570px;
    border-radius: 30px;
    border: 2px solid #B2C3FF;
    background-color: white;

    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px 0;
`;

export const TodoList = ({ isDelete, isWrite }) => {
  const [todos, setTodos] = useState([]);
  
  useEffect(() => {
    axios.get("http://localhost:3001/todos/")
      .then((res) => {
        setTodos(res.data);
      })
      .catch((error) => {
        console.error('ERROR: ', error);
      })
  }, [])

  return (
    <TodoListContainer>
        <TodoListBox>
          <WriteInput isWrite={isWrite}/>
          {todos.map((todo) => {
            return <Todo 
              key={todo.id}
              id={todo.id}
              text={todo.text}
              done={todo.done}
              isDelete={isDelete}
              setTodos={setTodos}
            />
          })}
        </TodoListBox>
    </TodoListContainer>
  )  
}