import {SearchReducerActions, SearchReducerState} from "./types"


function resetSearchReducerState(): SearchReducerState {
  return {
    value: "",
    depth: 1,
    loading: false,
    userId: 0,
  }
}

function searchReducer(
  state = resetSearchReducerState(),
  action: SearchReducerActions): SearchReducerState {
  switch (action.type) {
    case "SearchStartAction":
      return {
        ...state,
        loading: true,
      }
    case "SearchSuccessAction":
      return {
        ...state,
        ...action.payload,
        loading: false,
      }
    case "SearchErrorAction":
      return {
        ...state,
        loading: false,
        userId: -1,
      }
    default:
      return state
  }
}

export default searchReducer
