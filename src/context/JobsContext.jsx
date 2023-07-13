import { createContext, useReducer } from 'react'
import { JobsReducer } from '../reducers/JobsReducer'
import dbJobs from '../data.json'

export const JobsContext = createContext([])

export const JobsContextProvider = ({ children }) => {
  const initialState = {
    jobs: dbJobs,
    filterTools: []
  }

  const [state, dispatch] = useReducer(JobsReducer, initialState)

  const getFilter = (e) => {
    const { innerText } = e.target
    dispatch({ type: 'SET_FILTER', payload: innerText.toLowerCase() })
  }

  return (
    <JobsContext.Provider
      value={{
        jobs: state.jobs,
        filterTools: state.filterTools,
        getFilter
      }}
    >
      {children}
    </JobsContext.Provider>
  )
}
