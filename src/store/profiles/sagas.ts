import {call, put, select, takeLatest} from "redux-saga/effects"


import createDefaultUser from "../../helpers/createUser.ts"
import {UserDTO} from "../../helpers/DTO.ts"
import {getFollowers, getUser} from "../../helpers/github"
import {store} from "../createStore.ts"
import {AppState} from "../types.ts"

import {addProfilesAction, fetchProfilesDoneAction} from "./actions"
import {FetchProfilesAction, Profiles} from "./types"


async function fetchFollowers(
  user: UserDTO,
  depth: number,
  profiles: Profiles,
  rootId: UserDTO["id"],
  controller: AbortController,
) {
  if (depth <= 0) {
    return profiles
  }
  try {
    const followers = await getFollowers(user.followers_url)
    if (!Array.isArray(followers) || followers.length === 0) {
      return profiles
    }
    return Promise.all(followers.map(async (follower) => {
      const {id, login} = follower
      if (!profiles[id]) {
        // we need this call because of "created_at" column
        const data = await getUser(login)
        profiles[id] = createDefaultUser(data)
      }
      if (id !== rootId) {
        profiles[rootId].followersIds.add(id)
        /*
          This is a very hacky way to update the store,
          but I think that to show followers as soon as possible is a better for UX
          than to wait for all followers to be fetched
        */
        if (!controller.signal.aborted) {
          store.dispatch(addProfilesAction(profiles))
          if (depth > 1) {
            await fetchFollowers(follower, depth - 1, profiles, rootId, controller)
          }
        }
      }
    }))
  } catch (e) {
    console.error(e)
  }
}

let controller = new AbortController()

export default function* fetchProfilesSaga() {
  yield takeLatest<FetchProfilesAction>(
    "FetchProfilesAction",
    function* fetchProfilesEffect({payload}) {
      controller.abort()
      try {
        const reducerProfiles: AppState["profiles"]["store"] = yield select((state: AppState) => {
          return state.profiles.store
        })

        const {user, depth} = payload

        controller = new AbortController()

        reducerProfiles[user.id] = createDefaultUser(user)

        yield call(fetchFollowers, user, depth, reducerProfiles, user.id, controller)

        yield put(fetchProfilesDoneAction())

      } catch (e) {
        console.error(e)
        yield put(fetchProfilesDoneAction())
      }
    },
  )
}
