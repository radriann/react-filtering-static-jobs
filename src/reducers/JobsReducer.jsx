import { actions } from './actions'

export const JobsReducer = (state, action) => {
  const { payload, type } = action

  switch (type) {
    case actions.SET_FILTER:
      return {
        ...state,
        filterTools: [...state.filterTools, payload]
      }

    default:
      return state
  }
}
