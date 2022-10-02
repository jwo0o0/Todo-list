import styled from "styled-components";

export const WriteInputContainer = styled.div`
    width: 410px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: white;
    margin-bottom: 15px;

    label {
        width: 40px;
        margin-left: 5px;
        background-color: white;
        text-align: center;
        color: #434343;
    }

    &.not-active{
        display: none;
    }

`;

export const WriteInputForm = styled.input`
    width: 300px;
    height: 30px;
    background-color: white;
    border: none;
    border-bottom: 2px solid #F9D4FF;
    padding: 0 0 5px 7px;
    outline: none;
`;

export const WriteSubmitBtn = styled.button`
    width: 25px;
    height: 25px;
    border-radius: 50%;
    background-color: #F9D4FF;
    color: #434343;
    border: none;

    &:hover {
        background-color: #F4B0FF;
    }
`

export const WriteInput = ({ isWrite }) => {
    return (
        <WriteInputContainer className={isWrite ? "" : "not-active"}>
            <label for="todo_write">Todo</label>
            <WriteInputForm 
                type="text" 
                id="todo_write" 
                placeholder="무엇을 할까용?"
                maxLength={30}
            />
            <WriteSubmitBtn>✓</WriteSubmitBtn>
        </WriteInputContainer>
    )
}