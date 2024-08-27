const User = require("../models/User");

let UserDataProvider = {
    createUser: async (userData) => {
        const user = new User(userData);
        return await user.save();
    },
    findUserByEmail: async (email) => {
        return User.findOne({ email });
    },
    findUserById: async (id) => {
        return User.findById(id);
    },
    findUserByRefreshToken: async (refreshToken) => {
        return User.findOne({ refreshToken });
    },
    updateUserRefreshToken: async (userId, refreshToken) => {
        return await User.findByIdAndUpdate(userId, { refreshToken }, { new: true });
    }
}

module.exports = UserDataProvider;