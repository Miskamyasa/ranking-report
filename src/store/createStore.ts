import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux"
import {legacy_createStore as createStore, applyMiddleware, Dispatch, combineReducers} from "redux"
import sagaMiddlewareFactory from "redux-saga"


import profilesReducer from "./profiles/reducer"
import rootSaga from "./rootSaga"
import searchReducer from "./search/reducer"
import {AppActions, AppState, ConfiguredStore} from "./types"


function configureStore(): ConfiguredStore {
  const sagaMiddleware = sagaMiddlewareFactory()

  const store = createStore<AppState, AppActions, unknown, unknown>(
    combineReducers({
      search: searchReducer,
      profiles: profilesReducer,
    }),
    applyMiddleware(sagaMiddleware),
  )

  sagaMiddleware.run(rootSaga)

  return {
    store,
  }
}

const {store} = configureStore()

export function useAppDispatch(): Dispatch<AppActions> {
  return useDispatch<typeof store.dispatch>()
}

export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector

export {store}
