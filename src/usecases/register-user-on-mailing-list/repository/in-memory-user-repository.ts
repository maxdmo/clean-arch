import { UserRepository } from '../../ports/user-repository'
import { UserData } from '../user-data'

export class InMemoryUserRepository implements UserRepository {
  private users: UserData[]

  constructor (users: UserData[]) {
    this.users = users
  }

  async add (user: UserData): Promise<void> {
    const exists = await this.existsUser(user)

    if (!exists) {
      this.users.push(user)
    }
  }

  async findUserByEmail (email: string): Promise<UserData> {
    const users = this.users.filter((user) => {
      return user.email === email
    })

    if (users.length > 0) {
      return users[0]
    }

    return null
  }

  async findAllUsers (): Promise<UserData[]> {
    return this.users
  }

  async existsUser (user: UserData): Promise<boolean> {
    if (await this.findUserByEmail(user.email) === null) {
      return false
    }

    return true
  }
}
