var mongoose = require("mongoose");
var Company = require("../models/Company");
var Customer = require("../models/Customer");
var Product = require("../models/Product");
var ObjectId=require('mongodb').ObjectID;
var filterController = {};

/**
 * Allow you to see what is the most popular product and or company for a given city, 
 * given a company name, return the city where that company had most sales
 */

 filterController.search = (req, res) => {
  Customer.aggregate([
    {
        $lookup: {
            from: "Product",
            let: {
                product_id: { $toObjectId: "$product" }
            },
            pipeline: [
                {
                    $match: {
                        $expr: { $eq: ["$_id", "$$product_id"] }
                    }
                },
                {
                    $lookup: {
                        from: "Company",
                        let: {
                            company_id: { $toObjectId: "$company" },
                        },
                        pipeline: [
                            {
                                $match: {
                                    $expr: { $eq: ["$_id", "$$company_id"] }
                                }
                            }
                        ],
                        as: "company"
                    }
                },
                { $unwind: "$company" }
            ],
            as: "Product"
        }
    },
    { $unwind: "$Product" }
  ]).exec(function(err, res) {
    if (err) {
      console.log('Error',err)
    }
    else{
      console.log(res);
    }
  });
  }

