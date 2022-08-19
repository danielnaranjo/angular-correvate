export interface IUser {
    id?: number
    username: string
    firstName: string
    lastName: string
    email: string
    password: string
    phone: string
    userStatus: number
}

export interface ILogin {
    username: string
    password: string
}

export interface IResponseLogin {
    code: number
    type: string
    message: string
  }