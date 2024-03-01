const User = require('../models/User');

const signup = async (req, res, next) => {
    // POST DATA
    const name = 'Volkan Konak';
    const email = 'info@volkankonak.com';
    const password = '123456';

    // async & await
    const user = await User.create({
        name: name,
        email: email,
        password: password
    });

    res
    .status(200)
    .json({
        success: true,
        data: user
    })
};


module.exports = {
    signup
}