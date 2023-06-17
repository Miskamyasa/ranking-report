import {UserDTO} from "../../helpers/DTO"


export interface SearchReducerState {
  value: string
  depth: number
  loading: boolean
  userId: -1 | 0 | UserDTO["id"]
}

export interface SearchStartAction {
  type: "SearchStartAction"
  payload: Pick<SearchReducerState, "value" | "depth">
}

export interface SearchSuccessAction {
  type: "SearchSuccessAction"
  payload: Omit<SearchReducerState, "loading">
}

export interface SearchErrorAction {
  type: "SearchErrorAction"
}

export type SearchReducerActions =
  | SearchStartAction
  | SearchSuccessAction
  | SearchErrorAction
