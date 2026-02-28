const mongoose = require('mongoose');

const EnrollmentSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
        unique: true
    },
    domainIds: {
        type: [String],
        default: []
    },
    updatedAt: {
        type: Date,
        default: Date.now
    }
});

EnrollmentSchema.pre('save', function (next) {
    this.updatedAt = Date.now();
    next();
});

module.exports = mongoose.model('Enrollment', EnrollmentSchema);
