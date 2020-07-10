var express = require('express');
var router = express.Router();
var user_voteController = require('../controllers/user_voteController.js');

/*
 * GET
 */
router.get('/', user_voteController.list);

/*
 * GET
 */
router.get('/:id', user_voteController.show);

/*
 * POST
 */
router.post('/', user_voteController.create);

/*
 * PUT
 */
router.put('/:id', user_voteController.update);

/*
 * DELETE
 */
router.delete('/:id', user_voteController.remove);

module.exports = router;
