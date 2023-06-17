import {AddProfilesAction, FetchProfilesAction, FetchProfilesDoneAction} from "./types"


export function fetchProfilesAction(payload: FetchProfilesAction["payload"]): FetchProfilesAction {
  return {
    type: "FetchProfilesAction",
    payload,
  }
}

export function fetchProfilesDoneAction(): FetchProfilesDoneAction {
  return {
    type: "FetchProfilesDoneAction",
  }
}

export function addProfilesAction(payload: AddProfilesAction["payload"]): AddProfilesAction {
  return {
    type: "AddProfilesAction",
    payload,
  }
}
