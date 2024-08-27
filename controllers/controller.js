const Service = require("../services/service");

let Controller = {
    register: async (req, res) => {
        const { username, email, password } = req.body;

        try {
            const user = await Service.registerUser(username, email, password);
            res.status(201).json({ message: 'User registered successfully', user });
        } catch (error) {
            res.status(500).json({ message: 'Server error', error: error.message });
        }
    },
    login: async (req, res) => {
        const { email, password } = req.body;

        try {
            const { accessToken, refreshToken } = await Service.loginUser(email, password);
            res.json({ accessToken, refreshToken });
        } catch (error) {
            res.status(401).json({ message: 'Invalid credentials', error: error.message });
        }
    },
    refreshToken: async (req, res) => {
        const { token } = req.body;

        try {
            const accessToken = await Service.refreshAccessToken(token);
            res.json({ accessToken });
        } catch (error) {
            res.status(403).json({ message: 'Invalid refresh token', error: error.message });
        }
    },
    logout: async (req, res) => {
        const { token } = req.body;

        try {
            await Service.logoutUser(token);
            res.status(204).send();
        } catch (error) {
            res.status(403).json({ message: 'Invalid refresh token', error: error.message });
        }
    }
}

module.exports = Controller;