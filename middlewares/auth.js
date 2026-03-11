const { verifyToken } = require('../helpers/token')

async function authentication(req, res, next) {
  try {
    const authHeader = req.headers.authorization
console.log(authHeader)
    if (!authHeader) {
      return res.status(401).json({
        message: "Authorization header required"
      })
    }

    const [scheme, token] = authHeader.split(" ")

    if (scheme !== "Bearer" || !token) {
      return res.status(401).json({
        message: "Invalid token format"
      })
    }

    const decoded = await verifyToken(token)

console.log(decoded)

    req.userId = decoded.id  // pastikan huruf kecil!

    next()
  } catch (err) {
    return res.status(401).json({
      message: "Invalid or expired token"
    })
  }
}

module.exports = authentication