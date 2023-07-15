import { useReducer } from 'react'
import { JobsReducer, initialState } from '../reducers/JobsReducer'

export const useFilterReducer = () => {
  const [state, dispatch] = useReducer(JobsReducer, initialState)

  const getFilter = (e) => {
    const { innerText } = e.target
    dispatch({ type: 'SET_FILTER', payload: innerText })
  }

  const clearFilters = () => {
    dispatch({ type: 'CLEAR_FILTERS' })
  }

  const removeFilter = (e) => {
    console.log(e.target.value)
    dispatch({ type: 'REMOVE_FILTER', payload: e.target.value })
  }

  const filterJobs = (jobs, filters) => {
    const filteredJobs = jobs.filter(job => {
      const matchesFilters = filters.every((filter) => {
        return (
          job.role.toLowerCase().includes(filter.toLowerCase()) ||
          job.level.toLowerCase().includes(filter.toLowerCase()) ||
          job.languages.some((language) =>
            language.toLowerCase().includes(filter.toLowerCase())
          ) ||
          job.tools.some((tool) => tool.toLowerCase().includes(filter.toLowerCase()))
        )
      })
      return matchesFilters
    })
    return filteredJobs
  }

  return { clearFilters, getFilter, state, filterJobs, removeFilter }
}
