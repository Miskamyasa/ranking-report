import {Fragment} from "react"


import Spinner from "../../components/loaders/Spinner"
import {useAppSelector} from "../../store/createStore"
import Followers from "../followers/Followers"
import Profile from "../profile/Profile"


export default function Dashboard() {
  const loading = useAppSelector(state => state.search.loading)
  const userId = useAppSelector(state => state.search.userId)

  if (loading) {
    return (
      <Spinner />
    )
  }

  if (!userId) {
    return (
      <p>Please, fill the search form and press enter</p>
    )
  }

  if (userId === -1) {
    return (
      <p>Oops! User not found. Please, try another username</p>
    )
  }

  return (
    <Fragment>
      <div className="mb-4">
        <Profile />
      </div>
      <Followers />
    </Fragment>
  )
}
