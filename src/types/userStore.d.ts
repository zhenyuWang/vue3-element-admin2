export interface UserStoreState {
  userInfo: {
    name: string
    token: string
    avatar: string
    roles: string[]
  }
}
export interface LoginData {
  name: string
  password: string
}
