import mongoose from "mongoose";

// const url = 
const connectDB = () => {
    return mongoose.connect(process.env.MONGODB_URI)
} 

export default connectDB