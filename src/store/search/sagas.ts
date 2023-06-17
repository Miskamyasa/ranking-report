import {takeLatest, call, put, all, select} from "redux-saga/effects"

import createDefaultUser from "../../helpers/createUser"
import {UserDTO} from "../../helpers/DTO"
import {getUser} from "../../helpers/github"
import {addProfilesAction, fetchProfilesAction} from "../profiles/actions"
import {AppActions, AppState} from "../types"

import {searchErrorAction, searchSuccessAction} from "./actions"
import {SearchStartAction} from "./types"


export default function* searchSaga() {
  yield takeLatest<SearchStartAction>(
    "SearchStartAction",
    function* searchEffect({payload}) {
      try {
        const state: AppState = yield select((state: AppState) => state)

        const actions: AppActions[] = []

        let user: UserDTO = state.profiles.store[state.search.userId]

        if (!user || state.search.value !== payload.value) {
          user = yield call(getUser, payload.value)
          actions.push(
            addProfilesAction({
              [user.id]: createDefaultUser(user),
            }),
          )
        }

        actions.push(
          searchSuccessAction({
            userId: user.id,
            value: payload.value,
            depth: payload.depth,
          }),
          fetchProfilesAction({
            user,
            depth: payload.depth,
          }),
        )

        yield all(actions.map(action => put(action)))

      } catch (e) {
        console.error(e)
        yield put(searchErrorAction())
      }
    },
  )
}
