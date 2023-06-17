import {memo} from "react"

import Th from "../../components/tables/Th"
import Tr from "../../components/tables/Tr"
import {UserProfile} from "../../store/profiles/types"

import {Directions, unhashOrder} from "./useSort"


interface Props {
  order: string
  createHandleSort: (field: keyof UserProfile, direction: Directions) => () => void
}

function createClass(field: keyof UserProfile, direction: Directions, order: string) {
  const [orderField, orderDirection] = unhashOrder(order)
  if (field === orderField && direction === orderDirection) {
    return "text-gray-50"
  }
  return "text-gray-400 hover:text-gray-200"
}

function FollowersHead(props: Props) {
  const {order, createHandleSort} = props
  return (
    <thead>
      <Tr>
        <Th className="w-24">Avatar</Th>
        <Th>
          <div className="flex gap-3">
            Profile
            <button
              className={createClass("login", "desc", order)}
              onClick={createHandleSort("login", "desc")}>
              ▼
            </button>
            <button
              className={createClass("login", "asc", order)}
              onClick={createHandleSort("login", "asc")}>
              ▲
            </button>
          </div>
        </Th>
        <Th className="w-32">
          <div className="flex gap-3">
            Rank
            <button
              className={createClass("followers", "desc", order)}
              onClick={createHandleSort("followers", "desc")}>
              ▼
            </button>
            <button
              className={createClass("followers", "asc", order)}
              onClick={createHandleSort("followers", "asc")}>
              ▲
            </button>
          </div>
        </Th>
        <Th
          alignRight
          className="w-52">
          <div className="flex justify-end gap-3">
            <button
              className={createClass("created_at", "desc", order)}
              onClick={createHandleSort("created_at", "desc")}>
              ▼
            </button>
            <button
              className={createClass("created_at", "asc", order)}
              onClick={createHandleSort("created_at", "asc")}>
              ▲
            </button>
            Created
          </div>
        </Th>
      </Tr>
    </thead>
  )
}

export default memo(FollowersHead)
