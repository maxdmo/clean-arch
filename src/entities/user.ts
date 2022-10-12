import { Either, left } from '../shared/either'
import { Email } from './email'
import { InvalidEmailError } from './errors/InvalidEmailError'
import { InvalidNameError } from './errors/invalidNameError'
import { Name } from './name'
import { UserData } from './user-data'

export class User {
  static create (user: UserData): Either<InvalidNameError | InvalidEmailError, User> {
    const nameOrError = Name.create(user.name)
    if (nameOrError.isLeft()) {
      return left(new InvalidNameError())
    }

    const emailOrError = Email.create(user.email)

    if (emailOrError.isLeft()) {
      return left(new InvalidEmailError())
    }
  }
}
