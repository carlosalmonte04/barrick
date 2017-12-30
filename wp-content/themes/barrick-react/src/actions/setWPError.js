export default function setWPError(errorObj) {
  return {
    type: 'SET_WP_ERROR',
    payload: errorObj
  }
}