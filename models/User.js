const { Schema, model } = require('mongoose');

const UserSchema = new Schema({
    username: {
        type: String,
        unique: true,
        required: 'You need to provide your username!',
        trim: true
    },
    email: {
        type: String,
        required: 'You need to provide your email!',
        match: /.+\@.+\..+/,
        unique: true,
    },
    thoughts: [{
        type: Schema.Types.ObjectId,
        ref: 'Thoughts'
    }],
    friends: [{
        type: Schema.Types.ObjectId,
        ref: 'User'
    }]
},
{
    toJSON: {
        virtuals: true,
    },
    id: false
});

UserSchema.virtual('thoughtCount').get(function(){
    return this.thoughts.length;
});

UserSchema.virtual('friendCount').get(function(){
    return this.friends.length;
})

const User = model('User', UserSchema);

module.exports = User;