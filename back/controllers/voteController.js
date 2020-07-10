var voteModel = require('../models/vote.js');

/**
 * voteController.js
 *
 * @description :: Server-side logic for managing votes.
 */
module.exports = {

    /**
     * voteController.list()
     */
    list: function (req, res) {
        voteModel.find(function (err, votes) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting vote.',
                    error: err
                });
            }
            return res.json(votes);
        });
    },

    /**
     * voteController.show()
     */
    show: function (req, res) {
        var id = req.params.id;
        voteModel.findOne({_id: id}, function (err, vote) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting vote.',
                    error: err
                });
            }
            if (!vote) {
                return res.status(404).json({
                    message: 'No such vote'
                });
            }
            return res.json(vote);
        });
    },

    /**
     * voteController.create()
     */
    create: function (req, res) {
        var vote = new voteModel({
			_id : req.body._id,
			subject : req.body.subject,
			quota : req.body.quota,
			choices : req.body.choices,
			nbVote : req.body.nbVote,
			createdBy : req.body.createdBy,
			participants : req.body.participants,
			status : req.body.status

        });

        vote.save(function (err, vote) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when creating vote',
                    error: err
                });
            }
            return res.status(201).json(vote);
        });
    },

    /**
     * voteController.update()
     */
    update: function (req, res) {
        var id = req.params.id;
        voteModel.findOne({_id: id}, function (err, vote) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting vote',
                    error: err
                });
            }
            if (!vote) {
                return res.status(404).json({
                    message: 'No such vote'
                });
            }

            vote._id = req.body._id ? req.body._id : vote._id;
			vote.subject = req.body.subject ? req.body.subject : vote.subject;
			vote.quota = req.body.quota ? req.body.quota : vote.quota;
			vote.choices = req.body.choices ? req.body.choices : vote.choices;
			vote.nbVote = req.body.nbVote ? req.body.nbVote : vote.nbVote;
			vote.createdBy = req.body.createdBy ? req.body.createdBy : vote.createdBy;
			vote.participants = req.body.participants ? req.body.participants : vote.participants;
			vote.status = req.body.status ? req.body.status : vote.status;
			
            vote.save(function (err, vote) {
                if (err) {
                    return res.status(500).json({
                        message: 'Error when updating vote.',
                        error: err
                    });
                }

                return res.json(vote);
            });
        });
    },

    /**
     * voteController.remove()
     */
    remove: function (req, res) {
        var id = req.params.id;
        voteModel.findByIdAndRemove(id, function (err, vote) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when deleting the vote.',
                    error: err
                });
            }
            return res.status(204).json();
        });
    }
};
