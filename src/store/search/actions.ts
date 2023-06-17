import {SearchErrorAction, SearchStartAction, SearchSuccessAction} from "./types"


export function searchStartAction(payload: SearchStartAction["payload"]): SearchStartAction {
  return {
    type: "SearchStartAction",
    payload,
  }
}

export function searchSuccessAction(payload: SearchSuccessAction["payload"]): SearchSuccessAction {
  return {
    type: "SearchSuccessAction",
    payload,
  }
}

export function searchErrorAction(): SearchErrorAction {
  return {
    type: "SearchErrorAction",
  }
}
