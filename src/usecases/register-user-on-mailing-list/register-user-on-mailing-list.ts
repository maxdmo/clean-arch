
import { InvalidEmailError } from '../../entities/errors/InvalidEmailError'
import { InvalidNameError } from '../../entities/errors/invalidNameError'
import { User } from '../../entities/user'
import { UserData } from '../../entities/user-data'
import { Either, left, right } from '../../shared/either'
import { UserRepository } from '../ports/user-repository'

export class RegisterUserOnMailingList {
  private readonly userRepo: UserRepository

  constructor (userRepo: UserRepository) {
    this.userRepo = userRepo
  }

  public async perform (request: UserData): Promise<Either<InvalidNameError | InvalidEmailError, UserData>> {
    const userOrError: Either<InvalidEmailError | InvalidNameError, User> = User.create(request)

    if (userOrError.isLeft()) {
      return left(userOrError.value)
    }

    if (!(await this.userRepo.existsUser(request))) {
      await this.userRepo.add(request)
    }

    return right(request)
  }
}
