import axios from "axios"

import {githubToken, maxApiRowsPerRequest} from "../constants/config"

import {UserDTO} from "./DTO"


axios.defaults.withCredentials = false

const axiosInstance = axios.create({
  timeout: 5000,
  headers: {
    "Accept": "application/vnd.github+json",
    "Content-Type": "application/json",
    "Authorization": `Bearer ${githubToken}`,
  },
})

export async function getUser(name: string) {
  const response = await axiosInstance.get<UserDTO>(`https://api.github.com/users/${name}`)
  return response.data
}

export async function getFollowers(url: string) {
  const response = await axiosInstance.get<UserDTO[]>(url, {
    params: {
      per_page: maxApiRowsPerRequest,
    },
  })
  return response.data
}
