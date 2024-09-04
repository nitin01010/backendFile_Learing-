const checkHeaderKey = (req, res, next) => {
    const predefinedKey = '1234';
    const userKey = req.headers['key'];
    if (userKey === predefinedKey) {
        next();
    } else {
        return res.status(403).json({ message: 'Forbidden: Invalid header key' });
    }
};

module.exports = { checkHeaderKey };