import setPagesAndFieldsOnState from './setPagesAndFieldsOnState'
import setWPError from './setWPError'

const PAGES_NAMES = {
  41 : "/",
  71 :"our-board",
  191: "header"
}

export default function getPageContent() {
  return (dispatch) => {
    fetch(`${process.env.REACT_APP_API_URL}wp-json/acf/v3/pages`)
    .catch(error => dispatch(setWPError({ error })))
    .then(res => res.json())
    .catch(error => dispatch(setWPError({ "Could not connect to database? WP data to JSON error": error })))
    .then(pagesCollection => {
      console.log(`RESPONSE FOR PAGES==>`, pagesCollection)
      pagesCollection
        ? _setPagesAndFieldsOnState(pagesCollection, dispatch)
        : console.log("Invalid content returned")
    })
  }
}

function _setPagesAndFieldsOnState(pagesCollection, dispatch) {
  const pagesAndFields = {}

  pagesCollection.forEach((pageIdAndFields) => {
    const { id: pageId, acf: pageFields } = pageIdAndFields // page ids from wp
    const { [pageId]: pageName } = PAGES_NAMES // get page name `41 = "/"` (welcome page)

    pagesAndFields[`${pageName}`] = pageFields

  })
  dispatch(setPagesAndFieldsOnState({ pagesAndFields }))
}

// MOCK DATA
// 191: {
//   header-link-one: 'http://theWebsite/pageOne'
// }