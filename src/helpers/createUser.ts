import {UserDTO} from "./DTO"


export default function createDefaultUser(user: UserDTO) {
  return {
    ...user,
    followersIds: new Set<UserDTO["id"]>(),
  }
}
