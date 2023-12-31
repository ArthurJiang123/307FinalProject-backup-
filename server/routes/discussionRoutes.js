// Inside: /server/routes/discussionRoutes.js

// server/routes/discussionRoutes.js

const express = require('express');
const router = express.Router();
const discussionController = require('../controllers/discussionController');
const authMiddleware = require('../middleware/authMiddleware');

router.get('/boards', authMiddleware.verifyToken, discussionController.getBoards);
router.post('/boards/create', authMiddleware.verifyToken, discussionController.createBoard);

// Other discussion board-related routes...

module.exports = router;