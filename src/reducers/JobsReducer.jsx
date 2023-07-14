import { actions } from './actions'
import dbJobs from '../data.json'

export const initialState = {
  filterTools: [],
  jobs: dbJobs
}

export const JobsReducer = (state, action) => {
  const { payload, type } = action

  switch (type) {
    case actions.SET_FILTER: {
      const isInArray = state.filterTools.some(item => item === payload)

      if (isInArray) {
        return state
      }

      const newState = {
        ...state,
        filterTools: [...state.filterTools, payload]
      }

      return newState
    }

    case actions.CLEAR_FILTERS: {
      return initialState
    }

    default:
      return state
  }
}
