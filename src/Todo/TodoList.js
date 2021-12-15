import {  memo  } from 'react'
import Todo from "./todo"

function TodoList({ listJobs, setHidedAdd, dispatch }) {    
    return (
        <>
            {listJobs.map((job, index) => (
                <Todo
                    key={index}
                    job={job}
                    index={index}
                    dispatch={dispatch}
                    setHidedAdd={setHidedAdd}
                />
            ))}
        </>
    )
}

export default memo(TodoList)