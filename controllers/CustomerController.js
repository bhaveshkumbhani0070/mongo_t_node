var mongoose = require("mongoose");
var Customer = require("../models/Customer");

var customerController = {};
/**
 * name, product, city
 */

 customerController.create = (req, res) => {
    var customer = new Customer(req.body);
    customer.save((err) => {
        if(err) {
            console.log(err);
        } 
        else {
            console.log("Successfully created an Customer.");
        }
    });
};

customerController.read = (req, res) => {
    if(req.params.id){
        Customer.findOne({_id: req.params.id}).exec((err, CustomerData) => {
            if(err) {
                console.log("Error: ", err);
            }
            else {
                console.log('Customer get successfully',CustomerData)
            }
        });
    }
    else{
        Customer.find({}).exec((err, CustomerData) => {
            if(err) {
                console.log("Error: ", err);
            }
            else {
                console.log('Customer get successfully',CustomerData)
            }
        });
    }
};

customerController.update = (req, res) => {
    Customer.findByIdAndUpdate(req.params.id, 
        { 
            $set: { 
                name: req.body.name, 
                product: req.body.product,
                city:req.body.city 
            }
        }, { new: true }, (err, Customer) => {
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

customerController.delete = (req, res) => {
    Customer.remove({_id: req.params.id}, (err) => {
        if(err) {
            console.log(err);
        }
        else {
            console.log("Customer deleted!");
        }
    });
};

module.exports = customerController;