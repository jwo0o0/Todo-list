import styled from "styled-components";

export const TodoContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`;

export const TodoBox = styled.div`
    width: 460px; height: 570px;
    border-radius: 30px;
    border: 2px solid #B2C3FF;
    background-color: white;
`;

export const Todos = () => {
  return (
    <TodoContainer>
        <TodoBox>

        </TodoBox>
    </TodoContainer>
  )  
}