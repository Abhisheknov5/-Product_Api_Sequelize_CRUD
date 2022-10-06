const db = require('../models')

//Create main model

const Product = db.products
const Review = db.reviews

//1 create Product
const addProduct = async (req,res)=>{
    let info = {
        title: req.body.title,
        price: req.body.price,
        description: req.body.description,
        published: req.body.published ? req.body.published: false
    }
    const product = await Product.create(info)
    res.status(200).send(product)
    console.log(product)
}
// 2 get all product
const getAllProducts = async (req,res)=>{

    let products = await Product.findAll({})
    res.status(200).send(products);
}

// 3 get single product
const getOneProduct = async (req,res)=>{
    
    let id = req.params.id;
    let products = await Product.findOne({where: {id: id}})
    res.status(200).send(products);
}

// 4 Update product
const updateProduct = async (req,res)=>{
    
    let id = req.params.id;
    const product = await Product.update(req.body,{where: {id: id}})
    res.status(200).send(product)
}

// 5 delete Product by id

const deleteProduct = async (req,res)=>{
    
    let id = req.params.id;
    await Product.destroy({where: {id: id}})
    res.status(200).send('Product is deleted')
}

// 6 get published Product

const getPublishedProduct = async (req,res)=>{
    
    let id = req.params.id;
    const  products = await Product.findAll({where: {published: true}})
    res.status(200).send(products)
}

// 7 Connect one to many relation Product and Reviews
const getProductReviews = async(req,res)=>{
    let id = req.params.id;
    const data = await Product.findOne({
        include:[{
            model: Review,
            as: 'review'
        }],
        where: {id: id}
    })
    res.status(200).send(data)
} 

module.exports={
    addProduct,
    getAllProducts,
    getOneProduct,
    updateProduct,
    deleteProduct,
    getPublishedProduct,
    getProductReviews


}