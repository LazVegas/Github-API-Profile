// imports
import axios from 'axios'
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'


// 1. action definitions
    // Need to get the users
const GET_USER = 'gh/GET_USER'
    // Need to get the repos
const GET_REPOS = 'gh/GET_REPOS'

// 2. initial state
    // We know user is an object and repos is an array
const initialState = {
    user: {},
    repos: []
}

// 3. reducer
    // Getting from index.js
    export default function (state = initialState, action) {
        switch(action.type) {
            case GET_USER:
                return {...state, user: action.payload}
            case GET_REPOS:
                return {...state, repos: action.payload}
            default:
                return initialState
        }
    }

// 4. action creators

function getUser(username) {
    return dispatch => {
        axios.get(`http://api.github.com/users/${username}`).then(resp => {
            dispatch({
                type: GET_USER,
                payload: resp.data
            })
        })
    }
}

function getRepos(username) {
    return dispatch => {
        axios.get(`http://api.github.com/users/${username}/repos`).then(resp => {
            dispatch({
                type: GET_REPOS,
                payload: resp.data
            })
        })
    }
}

// 5. custom hooks

export function useGithub(username) {
    const dispatch = useDispatch()
    const user = useSelector(appState => appState.githubReducer.user)
    const repos = useSelector(appState => appState.githubReducer.repos)
    useEffect(() => {
        dispatch(getUser(username))
        dispatch(getRepos(username))
    }, [])

    return { user, repos }
}
