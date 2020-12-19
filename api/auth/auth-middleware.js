const AuthModel = require("./auth-model")

function isValid(req, res, next) {
    if (!req.body.username || !req.body.password){
        res.status(400).json("username and password required")
    } else {
        next()
    }
}

const checkUsernameUnique = async (req, res, next) => {
    try {
      const rows = await AuthModel.findBy({ username: req.body.username })
      if (!rows.length) {
        next()
      } else {
        res.status(401).json('username taken')
      }
    } catch (err) {
      res.status(500).json('something failed tragically')
    }
}

module.exports = {
    isValid,
    checkUsernameUnique
}