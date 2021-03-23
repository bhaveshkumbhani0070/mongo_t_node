var mongoose = require("mongoose");
var Company = require("../models/Company");

var companyController = {};
/**
 * name, status
 */

companyController.create = (req, res) => {
    var company = new Company(req.body);
    company.save((err) => {
        if(err) {
            console.log(err);
        } 
        else {
            console.log("Successfully created an company.");
        }
    });
};

companyController.read = (req, res) => {
    if(req.params.id){
        Company.findOne({_id: req.params.id}).exec((err, companyData) => {
            if(err) {
                console.log("Error: ", err);
            }
            else {
                console.log('company get successfully',companyData)
            }
        });
    }
    else{
        Company.find({}).exec((err, companyData) => {
            if(err) {
                console.log("Error: ", err);
            }
            else {
                console.log('company get successfully',companyData)
            }
        });
    }
};

companyController.update = (req, res) => {
    Company.findByIdAndUpdate(req.params.id, 
        { 
            $set: { 
                name: req.body.name, 
                status: req.body.address, 
            }
        }, { new: true }, (err, employee) => {
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

companyController.delete = (req, res) => {
    Company.remove({_id: req.params.id}, (err) => {
        if(err) {
            console.log(err);
        }
        else {
            console.log("Employee deleted!");
        }
    });
};
module.exports = companyController;
