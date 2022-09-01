import axios from "axios"
import Product from "../models/productModel.js"

const fetchProduct = async (res) => {
    try {
        const product = await axios.get("https://fakestoreapi.com/products")
        const productData = product.data
        console.log(productData, "productData")
        
        //Mapping Product To Database

        productData.map(item => {
            const productSave = new Product({
                id: item.id,
                title: item.title,
                description: item.description,
                price: item.price,
                image: item.image,
                category: item.category,
            })
            productSave.save()
        })


        res.status(200).json( {
            status: "success",
            data: productData
        })
        
    }catch (err) {
        console.log(err)
        res.status(500).send(err.message)
    }
}

const getProduct = async (req, res) => {
    try {
        const product = await Product.find()
        res.status(200).json( {
            status: "success",
            data: product
        })
    }catch (err) {
        console.log(err)
        res.status(500).send(err.message)
    }
}

export { fetchProduct, getProduct}