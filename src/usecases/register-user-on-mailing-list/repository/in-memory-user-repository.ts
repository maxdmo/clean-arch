import { UserRepository } from '../../ports/user-repository'
import { UserData } from '../user-data'

export class InMemoryUserRepository implements UserRepository {
  private user: UserData[]

  constructor (users: UserData[]) {
    this.user = users
  }

  add (user: UserData): Promise<void> {
    throw new Error('Method not implemented.')
  }

  findUserByEmail (email: string): Promise<UserData> {
    return null
  }

  findAllUsers (): Promise<UserData[]> {
    throw new Error('Method not implemented.')
  }

  existsUser (user: UserData): Promise<boolean> {
    throw new Error('Method not implemented.')
  }
}
