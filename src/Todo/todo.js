import {  memo  } from 'react'
import { deleteJob, fixJob } from './actions'

import CheckIcon from '@atlaskit/icon/glyph/check'
import RedoIcon from '@atlaskit/icon/glyph/editor/redo'
import {  ButtonStyled  } from './buttonStyled'

function Todo({ index, job, setHidedAdd, dispatch }) {
    return (
        <ButtonStyled
            shouldFitContainer
            iconBefore={
                <span className='checkIcon'
                    onClick={() => dispatch(deleteJob(index))}
                >
                    <CheckIcon />
                </span>

            }
            iconAfter={
                <span className='redoIcon'
                    onClick={() => {
                        dispatch(fixJob(job, index))
                        setHidedAdd(false)
                    }}
                >
                    <RedoIcon />
                </span>

            }
        >
            {job}
        </ButtonStyled>
    )
}

export default memo(Todo)