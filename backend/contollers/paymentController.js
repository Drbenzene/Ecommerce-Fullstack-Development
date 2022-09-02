import User from '../models/userModel.js';
import got from 'got'

const FLW_PRIVATE_KEY = "FLWSECK_TEST-10876e1c7827a5d99bc4bebfbd09a166-X"
const makePayment = async (req, res) => {
    const {name, email, phone, address, city, country, total, TRXID, cartItems} = req.body;
    console.log(email, phone, name, "The Email")


    try {

        //Update User Address On The User Model
        const updateUser = await User.findOneAndUpdate({email}, {$set: {address: {address, city, country}}}, {new: true});
        console.log(updateUser, "updateUser");

        const response = await got.post("https://api.flutterwave.com/v3/payments", {
            headers: {
                Authorization: `Bearer ${FLW_PRIVATE_KEY}`
            },
            json: {
                tx_ref:   `${TRXID}`,
                amount: `${total}`,
                currency: "USD",
                redirect_url: "http://localhost:3000/payment",
                meta: {
                    consumer_id: 23,
                    consumer_mac: "92a3-912ba-1192a"
                },
                customer: {
                    email: `${email}`,
                    phonenumber: `${phone}`,
                    name: `${name}`
                },
                customizations: {
                    title: "Shorpn Limited Payment",
                    logo: "http://www.piedpiper.com/app/themes/joystick-v27/images/logo.png"
                }
            }
        }).json()
        
        await User.findOneAndUpdate({email}, {$set: {orderHistory: {id: TRXID, orderDate: Date.now(), orderItems: cartItems} }}, {new: true});

        console.log(JSON.stringify(response))
        res.status(200).json(response)

        const redirect = response.data.link
        console.log(redirect, "redirect")

    
        
    } catch (err) {
        console.log(err)
    }
}


export {makePayment};