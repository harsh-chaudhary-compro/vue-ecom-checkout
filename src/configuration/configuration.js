/**
 * Class to generate Configuration json for diff environments
 */
class Configuration {
  static baseConfig = {
    NODE_ENV: 'base',
  }

  static devConfig() {
    this.baseConfig.NODE_ENV = 'development';
    return this.baseConfig;
  }

  static prodConfig() {
    this.baseConfig.NODE_ENV = 'production';
    return this.baseConfig;
  }

  static getConfig() {
    const env = process.env.NODE_ENV;

    if (env == 'development') { return this.devConfig(); }
    if (env == 'development') { return this.prodConfig(); }

    return this.baseConfig;
  }
}

exports = module.exports = Configuration;
