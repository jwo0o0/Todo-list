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

  const renderTodos = () => {
    axios.get("http://localhost:3001/todos?_sort=id&_order=DESC")
      .then((res) => {
        const notFinishedTodos = res.data.filter(el => el.done === false);
        const FinishedTodos = res.data.filter(el => el.done === true);
        setTodos([...notFinishedTodos, ...FinishedTodos]);
      })
      .catch((error) => {
        console.error('ERROR: ', error);
      })
  }
  
  useEffect(() => {
    renderTodos();
  }, [])

  return (
    <TodoListContainer>
        <TodoListBox>
          <WriteInput isWrite={isWrite} renderTodos={renderTodos}/>
          {todos.map((todo) => {
            return <Todo 
              key={todo.id}
              id={todo.id}
              text={todo.text}
              done={todo.done}
              isDelete={isDelete}
              renderTodos={renderTodos}
            />
          })}
        </TodoListBox>
    </TodoListContainer>
  )  
}