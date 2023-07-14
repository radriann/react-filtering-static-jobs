import { createContext } from 'react'
import { useFilterReducer } from '../hooks/useFilterReducer'
import dbJobs from '../data.json'

export const JobsContext = createContext([])

export const initialState = {
  jobs: dbJobs,
  filterTools: []
}

export const JobsContextProvider = ({ children }) => {
  const { state, getFilter, clearFilters } = useFilterReducer(initialState)

  return (
    <JobsContext.Provider
      value={{
        jobs: state.jobs,
        filterTools: state.filterTools,
        getFilter,
        clearFilters
      }}
    >
      {children}
    </JobsContext.Provider>
  )
}
