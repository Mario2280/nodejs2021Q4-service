import * as uuid from 'uuid';

interface IUser {
  id?: string;
  name: string;
  login: number;
  password: string;
}

class User {
  id: string;

  name: string;

  login: number;

  password: string;

  constructor(userObj: IUser) {
    this.id = uuid.v4();
    this.name = userObj.name;
    this.login = userObj.login;
    this.password = userObj.password;
  }

  /**
   *
   * @description This method was conceived to remove secret fields from an object. In this case it is the password
   * @param board {@link IUser} object
   * @returns -> {@link IUser} object without {@link IUser.password}
   */
  static toResponse(user: IUser): {
    id: string | undefined;
    name: string;
    login: number;
  } {
    const { id, name, login } = user;
    return { id, name, login };
  }
}

export default User;
export { IUser };
