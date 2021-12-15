import { useReducer, useState, useEffect, useRef } from 'react'
import reducer, { initState } from './reducer'

import TextField from './textField'
import DeleteAllBtn from './deleteAllBtn'
import TodoList from './TodoList'

import './styleTodo/index.css'

function App() {
    const [state, dispatch] = useReducer(reducer, initState)
    const { job, listJobs } = state

    const [hidedAdd, setHidedAdd] = useState(true)
    const [hidedDeleteAll, setHidedDeleteAll] = useState(true)

    // Keyboard
    const useKey = (key, cb) => {
        const callbackRef = useRef(cb);

        useEffect(() => {
            callbackRef.current = cb;
        })

        useEffect(() => {
            const handleKey = (e) => {
                if (e.code === key) {
                    callbackRef.current(e)
                }
            }

            document.addEventListener('keypress', handleKey);
            return () => document.removeEventListener('keypress', handleKey)
        }, [key])
    }

    // Ẩn / hiện DeleteAll Button
    useEffect(() => {
        if (listJobs.length !== 0) {
            setHidedDeleteAll(false)
        } else {
            setHidedDeleteAll(true)
        }
    }, [listJobs.length])

    return (
        <div className='main'>
            <h3>TODO LIST</h3>

            <TextField
                job={job}
                hidedAdd={hidedAdd}
                setHidedAdd={setHidedAdd}
                dispatch={dispatch}
                useKey={useKey}
            />

            <DeleteAllBtn
                hidedDeleteAll={hidedDeleteAll}
                dispatch={dispatch}
            />

            <TodoList 
                listJobs={listJobs}
                dispatch={dispatch}
                setHidedAdd={setHidedAdd}
            />           

        </div >
    );
}

export default App;