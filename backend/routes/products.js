const express = require('express');
const router = express.Router();
const {Product} = require('../models/product');
const {Category} = require('../models/category')
const mongoose = require('mongoose');

router.get(`/`, async (req, res) => {

    const productList = await Product.find();
    
    if (!productList) {
        res.status(500).json({ success: false });
    }
    res.send(productList);
}); 

router.get(`/:id`, async (req, res) => {
    const product = await Product.findById(req.params.id).populate('category');

    if (!product) {
        res.status(500).json({ success: false });
    }
    res.send(product);
});

router.post(`/`, async (req, res)=>{
    // const file = req.file;
    // if (!file) return res.status(400).send('No image in the request');

    // const fileName = file.filename;
    // const basePath = `${req.protocol}://${req.get('host')}/public/uploads/`;
    const product = new Product({
        name: req.body.name,
        description: req.body.description,
        image: req.body.image, // "http://localhost:3000/public/upload/image-2323232"
        brand: req.body.brand,
        price: req.body.price,
        category: req.body.category,
        countInStock: req.body.countInStock,
        rating: req.body.rating,
        numReviews: req.body.numReviews,
        isFeatured: req.body.isFeatured,

    });

    product.save().then((createdProduct=>{
        res.status(201).json(createdProduct)
    })).catch((err)=>{
        res.status(500).json({
            error:err,
            success:false
        })  
    })   
})

router.delete('/:id', (req, res) => {
    Product.findByIdAndDelete(req.params.id)
        .then((Product) => {
            if (Product) {
                return res
                    .status(200)
                    .json({
                        success: true,
                        message: 'the product is deleted!',
                    });
            } else {
                return res
                    .status(404)
                    .json({ success: false, message: 'product not found!' });
            }
        })
        .catch((err) => {
            return res.status(500).json({ success: false, error: err });
        });
});

router.put('/:id', async (req, res) => {
    if (!mongoose.isValidObjectId(req.params.id)) {
        return res.status(400).send('Invalid Product Id');
    }
    const category = await Category.findById(req.body.category);
    if (!category) return res.status(400).send('Invalid Category');

    const product = await Product.findById(req.params.id);
    if (!product) return res.status(400).send('Invalid Product!');

    // const file = req.file;
    // let imagepath;

    // if (file) {
    //     const fileName = file.filename;
    //     const basePath = `${req.protocol}://${req.get('host')}/public/uploads/`;
    //     imagepath = `${basePath}${fileName}`;
    // } else {
    //     imagepath = product.image;
    // }

    const updatedProduct = await Product.findByIdAndUpdate(
        req.params.id,
        {
            name: req.body.name,
            description: req.body.description,
            image: req.body.image,
            brand: req.body.brand,
            price: req.body.price,
            category: req.body.category,
            countInStock: req.body.countInStock,
            rating: req.body.rating,
            numReviews: req.body.numReviews,
            isFeatured: req.body.isFeatured,
        },
        { new: true }
    );

    if (!updatedProduct)
        return res.status(500).send('the product cannot be updated!');

    res.send(updatedProduct);
});

module.exports = router;