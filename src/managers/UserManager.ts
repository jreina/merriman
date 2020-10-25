import UserRA from '../ResourceAccess/UserRA';

class UserManager {
  create(creds: { username: string; password: string }) {
    return UserRA.create(creds);
  }
}

export default new UserManager();
