const mongoose = require('mongoose');

const washSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            require: true,
            trim: true,
            maxlength: 50
        },
        carType: {
            type: String,
            required: true, 
        },
        status: {
            type: String,
            required: true,
            enum: ['active', 'completed', 'pastdue'],
            default: 'active'
        },
        work:{
            type: String,
            required: true,
            enum: ['just started', 'waxing car', 'finished', 'drying', 'washing'],
            default: 'just started'   
        },
        latitude: {
            type: String,
            required: true
        },
        longitude: {
            type: String,
            required: true
        },
        due: {
            type: String,
            default: 'Express'
        },
        paid: {
            type: Boolean,
            default: false
        },
        createdBy: {
            type: mongoose.SchemaTypes.ObjectId,
            ref: 'user',
            required: true
        },
    },
    { timestamps: true }
)

// washSchema.index({ user: 1, name: 1 }, {unique: true })

module.exports = mongoose.model('wash', washSchema)