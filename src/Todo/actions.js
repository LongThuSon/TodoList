import { SET_JOB, ADD_JOB, DELETE_JOB, DELETE_ALL_JOB, FIX_JOB } from './constants'

export const setJob = payload => {
    return {
        type: SET_JOB,
        payload
    }
}

export const addJob = payload => {
    return {
        type: ADD_JOB,
        payload
    }
}

export const deleteJob = index => {
    return {
        type: DELETE_JOB,
        index
    }
}

export const deleteAllJob = () => {
    return {
        type: DELETE_ALL_JOB,
    }
}

export const fixJob = (payload, index) => {
    return {
        type: FIX_JOB,
        payload,
        index
    }
}