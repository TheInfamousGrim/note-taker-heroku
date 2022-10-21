const router = require('express').Router();
const path = require('path');

// Import our modular routers for /tips and /feedback
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
});

module.exports = router;
