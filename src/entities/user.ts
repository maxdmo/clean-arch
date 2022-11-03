import { Either, left, right } from '../shared/either'
import { Email } from './email'
import { InvalidEmailError } from './errors/InvalidEmailError'
import { InvalidNameError } from './errors/invalidNameError'
import { Name } from './name'
import { UserData } from './user-data'

export class User {
  public readonly name: Name
  public readonly email: Email

  private constructor (name: Name, email: Email) {
    this.name = name
    this.email = email
  }

  static create (user: UserData): Either<InvalidNameError | InvalidEmailError, User> {
    const nameOrError = Name.create(user.name)
    if (nameOrError.isLeft()) {
      return left(new InvalidNameError(user.name))
    }

    const emailOrError = Email.create(user.email)

    if (emailOrError.isLeft()) {
      return left(new InvalidEmailError(user.email))
    }

    const name: Name = nameOrError.value as Name
    const email: Email = emailOrError.value as Email

    return right(new User(name, email))
  }
}
