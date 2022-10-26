import { UserData } from '../../entities/user-data'

export interface UserRepository {
    add(user: UserData): Promise<void>;
    findUserByEmail(email: string): Promise<UserData>;
    findAllUsers(): Promise<UserData[]>;
    existsUser(user: UserData): Promise<boolean>;
}
