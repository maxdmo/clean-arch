import { Either, left } from '../shared/either'
import { Email } from './email'
import { InvalidEmailError } from './errors/InvalidEmailError'
import { UserData } from './user-data'

export class User {
  static create (user: UserData): Either<InvalidEmailError, User> {
    const emailOrError = Email.create(user.email)

    if (emailOrError.isLeft()) {
      return left(new InvalidEmailError())
    }
  }
}
