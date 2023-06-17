import {ProfilesReducerActions, ProfilesReducerState} from "./types"


function resetProfilesReducerState(): ProfilesReducerState {
  return {
    loading: false,
    store: {},
  }
}

function profilesReducer(
  state = resetProfilesReducerState(),
  action: ProfilesReducerActions): ProfilesReducerState {
  switch (action.type) {
    case "FetchProfilesAction":
      return {
        ...state,
        loading: true,
      }
    case "FetchProfilesDoneAction":
      return {
        ...state,
        loading: false,
      }
    case "AddProfilesAction":
      return {
        ...state,
        store: {
          ...state.store,
          ...action.payload,
        },
      }
    default:
      return state
  }
}

export default profilesReducer
