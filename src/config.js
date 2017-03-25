const path = require('path')

export default {
  http: {
    port: 2000,
    favicon: path.join(__dirname, 'assets/favicon.ico'),
    static: {
      '/build': path.join(__dirname, '../build')
    }
  },
  backend: {
    host: 'bigez-backend:8080'
  },
  login: {
    url: "http://localhost:2000/login/facebook/callback"
  },
  databases: {
    mongo: 'mongodb://127.0.0.1:27017/mobx-starter'
  }
}
