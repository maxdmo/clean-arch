import { UserData } from '../../../../src/entities/user-data'
import { UserRepository } from '../../../../src/usecases/ports/user-repository'

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
    const user = this.users.find((user) => {
      return user.email === email
    })

    return user || null
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
