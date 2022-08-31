import User from "../models/userModel.js";

const protect = async (req, res, next) => {
    let token;

    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        token = req.headers.authorization.split(' ')[1];


        try {
            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            const user = await User.findById(decoded.id).select('-password');
            console.log(user)
            req.user = user;
            next();
        } catch(err) {
            console.log(err)
            res.status(401).json({
                error: "Invalid Token. Not Authorized to Access this Resource"
            })
        }
    }

    if (!token) {
        return res.status(401).json({
            status: 'failed',
            error: 'You are not authorized. Please Login Again'
        })
    }
}


export {protect}