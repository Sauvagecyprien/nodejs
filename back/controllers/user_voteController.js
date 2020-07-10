var user_voteModel = require('../models/user_vote.js');

/**
 * user_voteController.js
 *
 * @description :: Server-side logic for managing user_votes.
 */
module.exports = {

    /**
     * user_voteController.list()
     */
    list: function (req, res) {
        user_voteModel.find(function (err, user_votes) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting user_vote.',
                    error: err
                });
            }
            return res.json(user_votes);
        });
    },

    /**
     * user_voteController.show()
     */
    show: function (req, res) {
        var id = req.params.id;
        user_voteModel.findOne({_id: id}, function (err, user_vote) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting user_vote.',
                    error: err
                });
            }
            if (!user_vote) {
                return res.status(404).json({
                    message: 'No such user_vote'
                });
            }
            return res.json(user_vote);
        });
    },

    /**
     * user_voteController.create()
     */
    create: function (req, res) {
        var user_vote = new user_voteModel({
			_id : req.body._id,
			user : req.body.user,
			vote : req.body.vote,
			choix : req.body.choix

        });

        user_vote.save(function (err, user_vote) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when creating user_vote',
                    error: err
                });
            }
            return res.status(201).json(user_vote);
        });
    },

    /**
     * user_voteController.update()
     */
    update: function (req, res) {
        var id = req.params.id;
        user_voteModel.findOne({_id: id}, function (err, user_vote) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting user_vote',
                    error: err
                });
            }
            if (!user_vote) {
                return res.status(404).json({
                    message: 'No such user_vote'
                });
            }

            user_vote._id = req.body._id ? req.body._id : user_vote._id;
			user_vote.user = req.body.user ? req.body.user : user_vote.user;
			user_vote.vote = req.body.vote ? req.body.vote : user_vote.vote;
			user_vote.choix = req.body.choix ? req.body.choix : user_vote.choix;
			
            user_vote.save(function (err, user_vote) {
                if (err) {
                    return res.status(500).json({
                        message: 'Error when updating user_vote.',
                        error: err
                    });
                }

                return res.json(user_vote);
            });
        });
    },

    /**
     * user_voteController.remove()
     */
    remove: function (req, res) {
        var id = req.params.id;
        user_voteModel.findByIdAndRemove(id, function (err, user_vote) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when deleting the user_vote.',
                    error: err
                });
            }
            return res.status(204).json();
        });
    }
};
