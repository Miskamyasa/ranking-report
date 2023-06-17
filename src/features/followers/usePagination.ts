import {useCallback, useEffect, useReducer} from "react"

import {itemsPerPage} from "../../constants/config"
import {UserProfile} from "../../store/profiles/types"


interface Pagination {
  ids: UserProfile["followersIds"]
  offset: number
  items: UserProfile["id"][]
}

function initialState(): Pagination {
  return {
    ids: new Set(),
    offset: 0,
    items: [],
  }
}

function reducer(state: Pagination, newState: Partial<Pagination>): Pagination {
  const {ids = state.ids, offset = state.offset} = newState
  return {
    ...state,
    ...newState,
    items: Array.from(ids).slice(offset, offset + itemsPerPage),
  }
}

interface Args {
  ids: UserProfile["followersIds"]
  size: number
}

export default function usePagination({ids, size}: Args) {
  const [pagination, setPagination] = useReducer(reducer,initialState())

  useEffect(() => {
    setPagination({ids})
  }, [ids, size])

  const handlePageClick = useCallback((ev: {selected: number}) => {
    setPagination({offset: (ev.selected * itemsPerPage) % size})
  }, [size])

  return {
    items: pagination.items,
    setPagination,
    handlePageClick,
  }
}
