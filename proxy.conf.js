const PROXY_CONFIG = [
  {
      context: [
          "/login"
      ],

      target: "http://localhost:8080/login",
      secure: false
  }
]

module.exports = PROXY_CONFIG;