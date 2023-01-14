module.exports = {
  get userInfo() {
    const token = this.request.header.token;
    const tokenCache = token ? this.app.jwt.verify(token, this.app.config.jwt.secret) : undefined;
    console.log('extend....', tokenCache);
    return tokenCache;
  },
};
