const checkHeaderKey = (req, res, next) => {
    const predefinedKey = '1234';
    const userKey = req.headers['key'];
    if (userKey === predefinedKey) {
        console.log('Header key matches the predefined value.');
        next();
    } else {
        console.log('Header key does not match the predefined value.');
        return res.status(403).json({ message: 'Forbidden: Invalid header key' });
    }
};

module.exports = { checkHeaderKey };