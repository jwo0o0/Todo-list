import styled from "styled-components";
import { Todo } from "./Todo";
import dummydata from '../data/dummy.json';

const todos = dummydata.todos;

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

export const TodoList = () => {
  return (
    <TodoListContainer>
        <TodoListBox>
          {todos.map((todo) => {
            return <Todo 
              key={todo.id}
              text={todo.text}
              done={todo.done}
            />
          })}
        </TodoListBox>
    </TodoListContainer>
  )  
}