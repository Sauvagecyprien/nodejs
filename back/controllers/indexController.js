
const mongoose = require("mongoose");
const Vote = require("../models/vote");
const User = require("../models/user");
const UserVote = require("../models/user_vote");
const validator = require('validator');
var ObjectId = mongoose.Types.ObjectId;

/** Controller INDEX
 * @module controllers/index
 * @requires mongoose
 */


var controller = {}
var perPage=2;

controller.visulogin = async (req,res) => {
    res.render('./connexion.ejs', {title: "login"})
}

controller.login = async (req,res) => {
    const {email, password} = req.body
    if( !email || !password ){
        req.session.msgFlash = {type: "danger", message: "Donnée manquante"}
        res.redirect('/login')
    } else {
        try {
            const user = await User.findOne({ email: email })
            if (!user || (user.email !== email && user.password !== password) ){
                req.session.msgFlash = {type: "danger", message: "Identifiants invalide"}
                res.redirect('/login')
            } else {
                req.session.user = user // use session for user connected
                console.log(req.session)
                res.redirect('/creation')
            }
        } catch (error) {
            req.session.msgFlash = {type: "error", message: "Identifiants invalide"}
            res.redirect('/login',)
        }
    }
}

controller.logout = async (req,res) => {
    req.session = null
    res.redirect('/')
}




controller.test = async (req, res) => {

    return res.render('./index', {
        title: "node.js",})

}

controller.showcreated = async (req,res) => {
    const created = 'created' ;
    const votes = await Vote.find({status:  created}).populate('createdBy').exec()
    console.log(votes)
    res.render('./index' , {
        title: "application Node.js",
        votes: votes
    })
}




module.exports = controller;