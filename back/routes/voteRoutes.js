var express = require('express');
var router = express.Router();
var voteController = require('../controllers/voteController.js');

/*
 * GET
 */
router.get('/', voteController.list);

/*
 * GET
 */
router.get('/:id', voteController.show);

/*
 * POST
 */
router.post('/', voteController.create);

/*
 * PUT
 */
router.put('/:id', voteController.update);

/*
 * DELETE
 */
router.delete('/:id', voteController.remove);

module.exports = router;
