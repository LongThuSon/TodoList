import {  useRef, memo  } from 'react'
import {  deleteAllJob  } from './actions'

import Button from '@atlaskit/button'

function DeleteAllBtn({ hidedDeleteAll, dispatch }) {
    const deleteAllRef = useRef()

    return (
        <Button
            style={{
                float: 'right',
                margin: '4px 4px 0'
            }}
            ref={deleteAllRef}
            onClick={() => dispatch(deleteAllJob())}
            isDisabled={hidedDeleteAll}
            appearance='primary'
        >
            Xoá tất cả
        </Button>
    )
}

export default memo(DeleteAllBtn)