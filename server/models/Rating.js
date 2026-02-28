const mongoose = require('mongoose');

const RatingSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    domainId: {
        type: String,
        required: true
    },
    stepIndex: {
        type: Number,
        required: true
    },
    resourceUrl: {
        type: String,
        required: true
    },
    stars: {
        type: Number,
        min: 1,
        max: 5,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

// Each user can only rate a resource once (upsert on submit)
RatingSchema.index({ userId: 1, domainId: 1, stepIndex: 1, resourceUrl: 1 }, { unique: true });

module.exports = mongoose.model('Rating', RatingSchema);
