const router = require('express').Router();
const {
    getAllThoughts,
    getThoughtById,
    addThought, 
    addReaction,
    removeThought,
    removeReaction
} = require('../../controllers/thoughts-controller')

router.route('/')
.get(getAllThoughts);

router.route('/:id')
.get(getThoughtById);

router.route('/:userId')
.post(addThought);

router.route('/:userId/:thoughtsId')
.put(addReaction)
.delete(removeThought);

router.route(':/userId/:thoughtsId/:reactionId')
.delete(removeReaction);

module.exports = router;