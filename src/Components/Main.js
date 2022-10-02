import { useState } from "react"
import { Info } from "./Info"
import { TodoList } from "./TodoList"

export const Main = () => {
    const [isDelete, setIsDelete] = useState(false);
    const [isWrite, setIsWrite] = useState(false);

    const handleDeleteBtnClick = () => {
        setIsDelete(!isDelete);
    }

    const handleWriteBtnClick = () => {
        setIsWrite(!isWrite);
    }

    return <>
        <Info 
            handleDeleteBtnClick={handleDeleteBtnClick}
            handleWriteBtnClick={handleWriteBtnClick}
            isDelete={isDelete}
            isWrite={isWrite}
         />
        <TodoList 
            isDelete={isDelete}
            isWrite={isWrite}
        />
    </>

}
