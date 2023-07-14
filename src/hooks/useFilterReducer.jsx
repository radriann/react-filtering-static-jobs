import { useReducer } from 'react'
import { JobsReducer } from '../reducers/JobsReducer'

export const useFilterReducer = (initialState) => {
  const [state, dispatch] = useReducer(JobsReducer, initialState)

  const getFilter = (e) => {
    const { innerText } = e.target
    dispatch({ type: 'SET_FILTER', payload: innerText.toLowerCase() })
  }

  const clearFilters = () => {
    dispatch({ type: 'CLEAR_FILTERS' })
  }

  return { clearFilters, getFilter, state }
}
