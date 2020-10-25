class AuthRA {
  login(creds: { username: string; password: string }) {
    return fetch('/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(creds)
    }).then(x => x.json());
  }
}

export default new AuthRA();
