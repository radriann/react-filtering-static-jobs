import { createContext } from 'react'
import { useFilterReducer } from '../hooks/useFilterReducer'

export const JobsContext = createContext([])

export const JobsContextProvider = ({ children }) => {
  const { state, getFilter, clearFilters, filterJobs, removeFilter } = useFilterReducer()

  return (
    <JobsContext.Provider
      value={{
        jobs: state.jobs,
        filterTools: state.filterTools,
        getFilter,
        clearFilters,
        filterJobs,
        removeFilter
      }}
    >
      {children}
    </JobsContext.Provider>
  )
}
