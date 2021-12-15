import { SET_JOB, ADD_JOB, DELETE_JOB, DELETE_ALL_JOB, FIX_JOB } from './constants'

// Init state
export const initState = {
    job: '',
    listJobs: JSON.parse(localStorage.getItem('Jobs')) ?? []
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

            localStorage.setItem('Jobs', JSON.stringify(newState.listJobs))

            break
        case DELETE_JOB:
            const newListJobs = [...state.listJobs]

            newListJobs.splice(action.index, 1)

            newState = {
                ...state,
                listJobs: newListJobs
            }

            if (newState.listJobs) {
                localStorage.setItem('Jobs', JSON.stringify(newState.listJobs))
            } else {
                localStorage.setItem('Jobs', '[]')
            }

            break
        case DELETE_ALL_JOB:
            newState = {
                job: '',
                listJobs: []
            }

            localStorage.setItem('Jobs', '[]')

            break
        case FIX_JOB:
            const updateListJobs = [...state.listJobs]

            updateListJobs.splice(action.index, 1)

            newState = {
                job: action.payload,
                listJobs: updateListJobs
            }
            break
        default:
            throw new Error('Invalid action.')
    }

    return newState
}

export default reducer