const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('../config');

const authService = {
    getUserWithName(db, name) {
        return db('users')
            .where({ name })
            .first();
    },

    compareUserPasswords(password, hash) {
        return bcrypt.compare(password, hash);
    },

    createUserJwt(subject, payload) {
        return jwt.sign(payload, config.JWT_SECRET, {
            subject,
            expiresIn: config.JWT_EXPIRY,
            algorithm: 'HS256',
        });
    },

    verifyUserJwt(token) {
        return jwt.verify(token, config.JWT_SECRET, {
            algorithms: ['HS256'],
        });
    },
};

module.exports = authService;