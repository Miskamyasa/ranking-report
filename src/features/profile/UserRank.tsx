import Spinner from "../../components/loaders/Spinner"
import {UserDTO} from "../../helpers/DTO"
import {useAppSelector} from "../../store/createStore"


interface Props {
  userId: UserDTO["id"]
}


export default function UserRank(props: Props) {
  const loading = useAppSelector(state => state.profiles.loading)
  const user = useAppSelector(state => state.profiles.store[props.userId])

  if (loading || !user) {
    return (
      <Spinner />
    )
  }

  return (
    <span>{user.followersIds.size}</span>
  )
}
