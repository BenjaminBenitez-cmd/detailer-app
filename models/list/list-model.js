const mongoose = require('mongoose');

const listSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true,
            maxlength: 50
        },
        createdBy: {
            type: mongoose.SchemaTypes.ObjectId,
            ref: 'user',
            required: true
        }
    },
    { timestamps: true }
)

listSchema.index({ user: 1, name: 1 }, { unique: true })

module.exports = mongoose.model('list', listSchema)