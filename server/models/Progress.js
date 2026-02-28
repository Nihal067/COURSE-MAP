const mongoose = require('mongoose');

const ProgressSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    domainId: {
        type: String,
        required: true
    },
    completedSteps: {
        type: [Number],   // array of step indices that are completed
        default: []
    },
    updatedAt: {
        type: Date,
        default: Date.now
    }
});

// One progress record per user per domain
ProgressSchema.index({ userId: 1, domainId: 1 }, { unique: true });

ProgressSchema.pre('save', function (next) {
    this.updatedAt = Date.now();
    next();
});

module.exports = mongoose.model('Progress', ProgressSchema);
