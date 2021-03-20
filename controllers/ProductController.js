var mongoose = require("mongoose");
var Product = require("../models/Product");

var productController = {};
/**
 * name, company, price
 */

 productController.create = (req, res) => {
    var product = new Product(req.body);
    product.save((err) => {
        if(err) {
            console.log(err);
        } 
        else {
            console.log("Successfully created an Product.");
        }
    });
};

productController.read = (req, res) => {
    if(req.params.id){
        Product.findOne({_id: req.params.id}).exec((err, ProductData) => {
            if(err) {
                console.log("Error: ", err);
            }
            else {
                console.log('Product get successfully',ProductData)
            }
        });
    }
    else{
        Product.find({}).exec((err, ProductData) => {
            if(err) {
                console.log("Error: ", err);
            }
            else {
                console.log('Product get successfully',ProductData)
            }
        });
    }
};

productController.update = (req, res) => {
    Product.findByIdAndUpdate(req.params.id, 
        { 
            $set: { 
                name: req.body.name, 
                company: req.body.company,
                price:req.body.price 
            }
        }, { new: true }, (err, Product) => {
            if (err) {
                console.log("Error for update",err);
                return
            }
            else{
                console.log('update successfully');
                return
            }
    });
};

productController.delete = (req, res) => {
    Product.remove({_id: req.params.id}, (err) => {
        if(err) {
            console.log(err);
        }
        else {
            console.log("Product deleted!");
        }
    });
};



module.exports = productController;