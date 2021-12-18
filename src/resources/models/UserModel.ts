import * as uuid from 'uuid';

interface IUser {
  id?:string,
  name:string,
  login:number,
  password:string,
}

class User {
  
  id:string;

  name:string;

  login:number;

  password:string;

  constructor(userObj: IUser) {
    this.id = uuid.v4();
    this.name = userObj.name;
    this.login = userObj.login;
    this.password = userObj.password;
  }

  static toResponse(user: IUser) {
    const { id, name, login } = user;
    return { id, name, login };
  }
}

export default User;
export {IUser};