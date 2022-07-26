/*========================================
        Import Dependencies
========================================*/
const mongoose = require("mongoose")
const Schema = mongoose.Schema
const bcrypt = require("bcrypt")
const SALT_ROUNDS = 6

/*========================================
        User Schema
========================================*/
const userSchema = new Schema (
    {
        name_first: {
            type: String,
            required: true,
        },
        name_middle: {
            type: String,
            default: "",
        },
        name_last: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            trim: true,
            lowercase: true,
            required: true,
            unique: true,
        },
        password: {
            type: String,
            trim: true,
            minLength: 3,
            required: true,
        },
        recently_viewed: [],
        DOB: {
            type: String,
            default: undefined,
        },
        SSN: {
            type: String,
            default: "",
        },
        phone_number: {
            type: String,
            default: "",
        },
        address: {
            type: String,
            default: "",
        },
        city: {
            type: String,
            default: "",
        },
        state: {
            type: String,
            default: "",
        },
        zipCode: {
            type: String,
            default: "",
        },
    },
    {
        timestamps: true,
        toJSON: {
            transform: (doc, ret) => {
                delete ret.password
                return ret
            }
        }
    }
)

userSchema.pre('save', async function (next) {
	if (!this.isModified('password')) return next();
	this.password = await bcrypt.hash(this.password, SALT_ROUNDS)
	return next();
})

/*========================================
        Export Model
========================================*/
module.exports = mongoose.model("User", userSchema)