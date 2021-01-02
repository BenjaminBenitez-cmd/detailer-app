const mongoose = require('mongoose');

const washSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            require: true,
            trim: true,
            maxlength: 50
        },
        status: {
            type: String,
            required: true,
            enum: ['active', 'completed', 'pastdue'],
            default: 'active'
        },
        latitude: {
            type: String,
            required: true
        },
        longitude: {
            type: String,
            required: true
        },
        due: Date,
        paid: {
            type: Boolean,
            default: false
        },
        createdBy: {
            type: mongoose.SchemaTypes.ObjectId,
            ref: 'user',
            required: true
        },
        list: {
            type: mongoose.SchemaTypes.ObjectId,
            ref: 'list',
            required: true
        }
    },
    { timestamps: true }
)

washSchema.index({ list: 1, name: 1 }, {unique: true })

module.exports = mongoose.model('wash', washSchema)