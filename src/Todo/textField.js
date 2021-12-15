import { useEffect, useRef, memo } from 'react'
import { setJob, addJob } from './actions'

import Textfield from '@atlaskit/textfield'
import Button from '@atlaskit/button'

function TextField({ job, hidedAdd, setHidedAdd, dispatch, useKey }) {
    const inputRef = useRef()

    const handleInput = (e) => {
        if (e.target.value) {
            setHidedAdd(false)
        } else {
            setHidedAdd(true)
        }
        dispatch(setJob(e.target.value))
    }

    const handleSubmit = () => {
        if (inputRef.current.value) {
            dispatch(addJob(job))
            dispatch(setJob(''))
            setHidedAdd(true)
        }
    }

    useEffect(() => {
        inputRef.current.focus()
    })

    useKey('Enter', handleSubmit)

    return (
        <Textfield
            ref={inputRef}
            value={job}
            placeholder="Enter todo..."
            style={{ padding: '2px 4px 2px' }}
            onChange={handleInput}
            elemAfterInput={
                <Button
                    style={{
                        margin: '2px 4px 2px',
                        width: '109px'
                    }}
                    onClick={handleSubmit}
                    isDisabled={hidedAdd}
                    appearance='primary'
                >
                    Thêm
                </Button>
            }
        ></Textfield>
    )
}

export default memo(TextField)