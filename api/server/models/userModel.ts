import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        require: [true, 'Enter an email'],
        trim: true,
        unique: true
    },
    password: {
        type: String,
        required: [true, 'Enter a password'],
        trim: true,
        min:[6, "Your password should at least 6 characters"]
    },
    todos: [{ type: mongoose.Types.ObjectId, ref: 'Todo' }]
}, {
    timestamps: {
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    }
});

export default mongoose.model('User', userSchema);