// Importing Controllers Reviws and Product
const productController = require('../controllers/productController.js')
const reviewController = require('../controllers/reviewController')

//router

const router = require('express').Router()

//use Routers
router.post('/addProduct',productController.addProduct)

router.get('/allProducts',productController.getAllProducts)

router.get('/published',productController.getPublishedProduct)

// Review Url and Controller

router.get('/allReviews', reviewController.getAllReviews)
router.post('/addReview', reviewController.addReview)

//get product reviews
router.get('/getProductReviews',productController.getProductReviews)

// get Product Reviews
//router.get('/getProductReviews', productController.getProductReviews)

router.get('/:id', productController.getProductReviews)
//Products router
router.get('/:id',productController.getOneProduct)

router.put('/:id',productController.updateProduct)

router.delete('/:id',productController.deleteProduct)

module.exports = router
