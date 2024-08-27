const bcrypt = require('bcryptjs');
const Utils = require("../utils/utils");
const UserDataProvider = require('../dataproviders/user_data_provider');
require('dotenv').config();

const Service = {
    registerUser: async (username, email, password) => {
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = await UserDataProvider.createUser({ username, email, password: hashedPassword });
        return user;
    },
    loginUser: async (email, password) => {
        const user = await UserDataProvider.findUserByEmail(email);
        if (!user || (await bcrypt.compare(password, user.password))) {
            throw new Error('Invalid Credentials');
        }

        const accessToken = Utils.generateAccessToken(user._id);
        const refreshToken = Utils.generateRefreshToken(user._id);

        await UserDataProvider.updateUserRefreshToken(user._id, refreshToken.toString());

        return { accessToken, refreshToken };
    },
    refreshAccessToken: async (refreshToken) => {
        const user = await UserDataProvider.findUserByRefreshToken(refreshToken);
        if (!user) throw new Error('Invalid refresh token');

        const newAccessToken = Utils.generateAccessToken(user._id);
        return newAccessToken;
    },
    logoutUser: async (refreshToken) => {
        const user = await UserDataProvider.findUserByRefreshToken(refreshToken);
        if (!user) throw new Error('Invalid refresh token');

        await UserDataProvider.updateUserRefreshToken(user._id, null);
    }
}

module.exports = Service;