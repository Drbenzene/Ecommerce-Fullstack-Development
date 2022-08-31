import mongoos from 'mongoose';
import uniqid from 'uniqid';
import bcrypt from 'bcryptjs';

const UserSchema = new mongoos.Schema({
    id: {type: String, default: uniqid()},
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    username: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    address: {
        address: {type: String},
        city: {type: String},
        country: {type: String},
    },
    password: {type: String,  required: true},
    cart: {type: Array, default: []},
    phone: {type: Number},
    orderHistory: {type: Array},
    transactions: {type: Array},
    createdAt: {type: Date, default: Date.now},
})


UserSchema.methods.passwordMatch = async function(passwordToBeVerified) {
    return bcrypt.compare(passwordToBeVerified, this.password)
}


UserSchema.pre('save', async function (next) {
    if (!this.isModified("password")){
        next()
    }
        const salt = await bcrypt.genSalt(10)
        const hased = await bcrypt.hash(this.password, salt);
        this.password = hased;

})

const User = mongoos.model('User', UserSchema);

export default User;