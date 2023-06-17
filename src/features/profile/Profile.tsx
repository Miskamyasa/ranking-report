import {useAppSelector} from "../../store/createStore"

import UserRank from "./UserRank"


export default function Profile() {
  const userId = useAppSelector(state => state.search.userId)
  const user = useAppSelector(state => state.profiles.store[userId])

  return (
    <figure className="flex gap-6 items-start">
      <img
        alt="avatar"
        className="pixelated border-4 border-gray-400 w-24 h-24 mt-2"
        height="96"
        src={user.avatar_url}
        width="96" />
      <figcaption>
        <h2>Username: {user.login}</h2>
        <p>Bio: {user.bio}</p>
        <p className="flex gap-2 items-baseline">Rank: <UserRank userId={userId} /></p>
      </figcaption>
    </figure>
  )
}
