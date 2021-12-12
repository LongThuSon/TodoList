import { SET_JOB, ADD_JOB, DELETE_JOB, DELETE_ALL_JOB, FIX_JOB } from './constants'

// Init state
export const initState = {
    job: '',
    listJobs: []
}

// Reducer
const reducer = (state, action) => {
    let newState

    switch (action.type) {
        case SET_JOB:
            newState = {
                ...state,
                job: action.payload
            }
            break
        case ADD_JOB:
            newState = {
                ...state,
                listJobs: [...state.listJobs, action.payload]
            }
            break
        case DELETE_JOB:
            const newListJobs = [...state.listJobs]

            newListJobs.splice(action.index, 1)

            newState = {
                ...state,
                listJobs: newListJobs
            }
            break
        case DELETE_ALL_JOB:
            newState = {
                job: '',
                listJobs: []
            }
            break
        case FIX_JOB:
            const updateListJobs = [...state.listJobs]

            updateListJobs.splice(action.index, 1)

            newState = {
                job: action.payload,
                // ...state,
                listJobs: updateListJobs
            }
            break
        default:
            throw new Error('Invalid action.')
    }

    return newState
}

export default reducer