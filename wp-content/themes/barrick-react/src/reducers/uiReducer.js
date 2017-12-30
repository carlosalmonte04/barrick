const initialState = {
  pagesAndFields: {},
  error: {},
  dataReady: false
}

export default function uiReducer(state = initialState, action) {
  switch(action.type) {
    case 'SET_PAGES_AND_FIELDS_ON_STATE':
    console.log("setting on state", action.payload)
      return Object.assign({}, state, { pagesAndFields: { ...action.payload.pagesAndFields }, dataReady: true })
    case 'SET_WP_ERROR':
      return Object.assign({}, state, { error: action.payload })
    default:
      return state
  }
}