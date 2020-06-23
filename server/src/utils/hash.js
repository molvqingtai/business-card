const crypto = require('crypto')

const hash = (string, algorithm = 'sha1') => {
  return crypto.createHash(algorithm).update(string).digest('hex')
}

module.exports = hash
