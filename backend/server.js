import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors'
import morgan from 'morgan'
import connectDB from './config/db.js';
import colors from 'colors';
import productRoute from './routes/productRoute.js';
import userRoute from './routes/userRoute.js';
import paymentRoute from './routes/paymentRoute.js';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);

let __dirname = path.dirname(__filename);


dotenv.config()


//Starting Express App
const app = express();

//Using Cors for cross Reference Origin 
const corsOptions = {
    origin: "*",
}

app.use(cors(corsOptions));
app.use(morgan('dev'));

app.use(express.json({limits: '50mb'}));



//Routes 

app.use('/api/products', productRoute)
app.use("/api/users", userRoute)
app.use("/api/payment", paymentRoute)

//End of Routes 


// *****************DEPLOYMENT*******************************
__dirname = path.resolve()

if (process.env.NODE_ENV === 'production'){
    app.use(express.static(path.join(__dirname, '/frontend/build')));
    
    app.get("*", (res) => {
        res.sendFile(path.join(__dirname, 'frontend', 'build', 'index.html'));
    })

} else {
    app.get('/', (res) => {
        res.send('Welcome World')
    })
}

// *****************END OF DEPLOYMENT*************************
app.get('/', (res) => {
    res.send('Welcome World')
})

const start = async (PORT) => {

    try {
        //Connecting To Dabatabse
        await connectDB()

        //listening To Application
        app.listen(PORT, (err) => {
            if (err) throw err;
            console.log(`Server is running on port ${PORT}`.green.underline.bold)
        })

        console.log(`Mongoose Database Connected Successfully`.yellow.underline)

    } catch (err) {
        console.log(err)
    }
}


//Starting Server 
const PORT = process.env.PORT || 5000;
start(PORT)