import {UserDTO} from "../../helpers/DTO"


export interface UserProfile extends UserDTO {
  followersIds: Set<UserDTO["id"]>
}

export type Profiles = Record<UserDTO["id"], UserProfile>

export interface ProfilesReducerState {
  loading: boolean
  store: Profiles
}

export interface FetchProfilesAction {
  type: "FetchProfilesAction"
  payload: {
    user: UserDTO,
    depth: number,
  }
}

export interface FetchProfilesDoneAction {
  type: "FetchProfilesDoneAction"
}

export interface AddProfilesAction {
  type: "AddProfilesAction"
  payload: Profiles
}

export type ProfilesReducerActions =
  | FetchProfilesAction
  | FetchProfilesDoneAction
  | AddProfilesAction

// if depth is 1, we need to fetch followers only once

// if depth is more than 1, we need to fetch followers recursively
