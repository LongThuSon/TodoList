import { useReducer, useState, useEffect, useRef } from 'react'
import reducer, { initState } from './reducer'
import { setJob, addJob, deleteJob, deleteAllJob, fixJob } from './actions'

import './styleTodo/index.css'

function App() {
    const [state, dispatch] = useReducer(reducer, initState)
    const { job, listJobs } = state

    const inputRef = useRef()
    const deleteRef = useRef()
    const deleteAllRef = useRef()
    const checkedRef = useRef([])

    const [hidedAdd, setHidedAdd] = useState(true)
    const [hidedDelete, setHidedDelete] = useState(true)
    const [hidedDeleteAll, setHidedDeleteAll] = useState(true)
    const [hideCheckBox, setHidedCheckBox] = useState(true) 
    const [testCheckBox, setTestCheckBox] = useState([]) 

    // let isChecked = false

    const handleInput = (e) => {
        if (e.target.value.length !== 0) {
            setHidedAdd(false)
        } else {
            setHidedAdd(true)
        }
        dispatch(setJob(e.target.value))
    }

    const handleSubmit = () => {
        dispatch(addJob(job))
        dispatch(setJob(''))
        inputRef.current.focus()
        setHidedAdd(true)
    }

    const handleDelete = (nothing, index) => {
        console.log(checkedRef.curent[0])
    }

    // const handleCheck = (index) => {
    //     // if (checkedRef.current[index]) {
    //     //     setTestCheckBox(testCheckBox.push(index))
    //     // }
        
    // }

    useEffect(() => {
        inputRef.current.focus()
    })

    useEffect(() => {
        if (listJobs.length !== 0) {
            setHidedDeleteAll(false)
        } else {
            setHidedDeleteAll(true)

        }
    }, [listJobs.length])

    return (
        <div className='main'>
            <h3>Todo</h3>

            <input
                type='checkbox'
                onClick={() => {
                    if (!hideCheckBox) {     
                        setHidedCheckBox(true)
                        setHidedDelete(true)
                    } else {
                        setHidedCheckBox(false)
                        setHidedDelete(false)
                    }
                }}
            />

            <input
                ref={inputRef}
                value={job}
                placeholder="Enter todo..."
                onChange={handleInput}
            />

            <button
                onClick={handleSubmit}
                disabled={hidedAdd}
            >
                Add
            </button>

            <button
                ref={deleteRef}
                onClick={handleDelete}
                disabled={hidedDelete}
            >
                Delete
            </button>

            <button
                ref={deleteAllRef}
                onClick={() => dispatch(deleteAllJob())}
                disabled={hidedDeleteAll}
            >
                Delete All
            </button>

            <ul>
                {listJobs.map((job, index) => (
                    <li key={index}>
                        <input
                            ref={item => checkedRef.current[index] = item}
                            type='checkbox'
                            hidden={hideCheckBox}
                            onClick={() => {
                                setTestCheckBox(oldArray => [...oldArray, index])
                                console.log(index, testCheckBox)
                                
                            }}
                        />

                        {job}

                        <span onClick={() => dispatch(deleteJob(index))}>
                            &times;
                        </span>

                        <span onClick={() => {
                            dispatch(fixJob(job, index))
                            setHidedAdd(false)
                        }}
                        >
                            &gt;
                        </span>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default App;
