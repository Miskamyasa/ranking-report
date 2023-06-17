import {memo} from "react"

import Td from "../../components/tables/Td"
import Tr from "../../components/tables/Tr"
import {UserDTO} from "../../helpers/DTO"
import {useAppSelector} from "../../store/createStore"


interface Props {
  profileId: UserDTO["id"]
}

function FollowerRow(props: Props) {
  const follower = useAppSelector(state => state.profiles.store[props.profileId])
  return (
    <Tr>
      <Td>
        <img
          alt="avatar"
          className="pixelated border-2 border-gray-400"
          height="32"
          src={follower.avatar_url}
          width="32" />
      </Td>
      <Td>
        <a
          className="hover:text-white"
          href={follower.html_url}
          rel="noreferrer"
          target="_blank">
          {follower.login}
        </a>
      </Td>
      <Td>
        <span>{follower.followers}</span>
      </Td>
      <Td alignRight>
        <span>{new Date(follower.created_at).toLocaleString()}</span>
      </Td>
    </Tr>
  )
}

export default memo(FollowerRow)
