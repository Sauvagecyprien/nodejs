
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





controller.test = async (req, res) => {

    return res.render('./index', {
        title: "node.js",})

}

controller.showcreated = async (req,res) => {
    const created = 'created' ;
    const votes = await Vote.find({status:  created}).populate('createdBy').exec()
    console.log(votes)
    res.render('./index' , {
        title: "sujet",
        votes: votes
    })
}




module.exports = controller;