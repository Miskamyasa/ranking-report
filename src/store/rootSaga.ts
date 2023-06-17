import sagaMiddlewareFactory from "redux-saga"
import {all} from "redux-saga/effects"

import fetchProfilesSaga from "./profiles/sagas.ts"
import searchSaga from "./search/sagas"


export const sagaMiddleware = sagaMiddlewareFactory()


export default function* rootSaga() {
  yield all([
    searchSaga(),
    fetchProfilesSaga(),
  ])
}
