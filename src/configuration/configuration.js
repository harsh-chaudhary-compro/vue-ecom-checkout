/**
 * Class to generate Configuration json for diff environments
 */
class Configuration {
  static baseConfig = {
    NODE_ENV: 'base',
  }

  static devConfig() {
    this.baseConfig.NODE_ENV = 'development';
    this.baseConfig.VUE_APP_ENV = 'development';
    this.baseConfig.BASE_URL = 'https://jsonplaceholder.typicode.com';
    return this.baseConfig;
  }

  static prodConfig() {
    this.baseConfig.NODE_ENV = 'production';
    this.baseConfig.VUE_APP_ENV = 'production';
    this.baseConfig.BASE_URL = 'https://jsonplaceholder.typicode.com';
    return this.baseConfig;
  }

  static getConfig() {
    const appEnv = process.env.VUE_APP_ENV;

    if (appEnv === 'development') { return this.devConfig(); }
    if (appEnv === 'production') { return this.prodConfig(); }

    return this.baseConfig;
  }
}

export default Configuration;
