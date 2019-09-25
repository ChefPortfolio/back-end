module.exports = {
    jwtSecret: process.env.JWT_SECRET ||'kept secret, safe',
    environment: process.env.NODE_ENV
}