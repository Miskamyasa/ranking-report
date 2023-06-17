import {useEffect, useState} from "react"

import {useAppSelector} from "../../store/createStore"
import {UserProfile} from "../../store/profiles/types"


export type Directions = "asc" | "desc"

function hashOrder(field: keyof UserProfile, direction: Directions) {
  return `${field}:${direction}`
}

export function unhashOrder(order: string) {
  return order.split(":") as [keyof UserProfile, Directions]
}

export default function useSort(userId: UserProfile["id"]) {
  const [order, setOrder] = useState("")
  const [ids, setIds] = useState<UserProfile["followersIds"]>(new Set())

  const store = useAppSelector(state => state.profiles.store)
  const size = useAppSelector(state => state.profiles.store[userId].followersIds.size)

  const createHandleSort = (field: keyof UserProfile, direction: Directions) => () => {
    setOrder(hashOrder(field, direction))
  }

  useEffect(() => {
    setIds(store[userId].followersIds)
  }, [store, userId])

  useEffect(() => {
    if (!order) {
      return
    }
    const [field, direction] = unhashOrder(order)
    const sorted = new Set([...store[userId].followersIds].sort((a, b) => {
      const profileA = store[a]
      const profileB = store[b]
      if (profileA[field] < profileB[field]) {
        return direction === "asc" ? -1 : 1
      }
      if (profileA[field] > profileB[field]) {
        return direction === "asc" ? 1 : -1
      }
      return 0
    }))
    setIds(sorted)
  }, [order, size, store, userId])

  return {
    ids,
    size,
    order,
    createHandleSort,
  }
}
