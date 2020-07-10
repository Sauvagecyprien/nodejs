var express = require('express');
var router = express.Router();
var indexController = require('../controllers/indexController.js');
var usersController = require('../controllers/userController.js');

/** Routes des vues
 * @module routers/index
 * @requires express express.Router()
 */
/**
 * Retourne la vue de l'inscription
 * @name inscription GET
 * @function
 * @memberof module:routers/index
 * @param {string} '/inscription' - Path
 * @param {function} indexController.inscription
 */





//router.get('/', indexController.test);
router.get('/', indexController.login);
router.post('/login', indexController.login);
router.get('/logout', indexController.logout);
router.get('/login',indexController.visulogin);
router.get('/creation', indexController.showcreated);
















module.exports = router;