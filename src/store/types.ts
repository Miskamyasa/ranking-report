import {Store} from "redux"

import {ProfilesReducerActions, ProfilesReducerState} from "./profiles/types"
import {SearchReducerActions, SearchReducerState} from "./search/types"


export type AppActions =
  | SearchReducerActions
  | ProfilesReducerActions

export type AppState = {
  search: SearchReducerState,
  profiles: ProfilesReducerState,
}

export interface ConfiguredStore {
  store: Store<AppState, AppActions>
}
