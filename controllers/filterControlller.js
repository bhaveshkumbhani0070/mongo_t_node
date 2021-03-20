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
                      from: "company",
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
// var value="su"
//  var query = { "city": { $regex: '.*' + value + '.*', $options: 'i' } };

//  Customer.find().exec((err, ProductData) => {
//     if(err) {
//         console.log("Error: ", err);
//     }
//     else {
//         console.log('Product get successfully',ProductData)
//     }
// });


// Customer.aggregate([
//   { $lookup:
//      {
//        from: 'Product',
//        localField: 'product',
//        foreignField: '_id',
//        as: 'orderdetails'
//      }
//    }
//   ]).exec(function(err, res) {
//   if (err) {
//     console.log('Error',err)
//   }
//   else{
//     console.log(res);
//   }
// });
// Customer.aggregate([
//   {
//       $lookup:
//       {
//           from: "Product",
//           localField: "product",
//           foreignField: "_id",
//           as: "productdata"
//       }
//   }
// ]).exec(function(err, res) {
//     if (err) {
//       console.log('Error',err)
//     }
//     else{
//       console.log(res);
//     }
//   });



module.exports = filterController;


/**
 * Customer
 *  {
    updated_at: 2021-03-18T03:07:17.659Z,
    _id: 6052c3e50016c24b24a37f4d,
    name: 'bhavesh',
    product: '6052c356a76d435cf857aa3c',
    city: 'surat',
    __v: 0
  },
  {
    updated_at: 2021-03-18T03:07:46.184Z,
    _id: 6052c40202dce351e8448441,
    name: 'alex',
    product: '6052c369b9395c55042373e6',
    city: 'ahmdabad',
    __v: 0
  },
  {
    updated_at: 2021-03-18T03:08:05.935Z,
    _id: 6052c4157d1616563c707732,
    name: 'lexa',
    product: '6052c37321b64b4c40ac65a5',
    city: 'mumbai',
    __v: 0
  },
  {
    updated_at: 2021-03-18T03:08:30.411Z,
    _id: 6052c42efa94db04ccf19560,
    name: 'bhumi',
    product: '6052c37ef633e64cb8b65423',
    city: 'surat',
    __v: 0
  }

 */
/**
 * company 
 *  {
    updated_at: 2021-03-18T02:59:35.387Z,
    _id: 6052c217a1abc325b01ec87c,
    name: 'artoon',
    status: 'active',
    __v: 0
  },
  {
    updated_at: 2021-03-18T03:00:01.508Z,
    _id: 6052c2311993dc433c0657d7,
    name: 'identix',
    status: 'active',
    __v: 0
  }
 */

  /**
   * Product
   *  {
    updated_at: 2021-03-18T03:04:54.187Z,
    _id: 6052c356a76d435cf857aa3c,
    name: 'laptop',
    company: '6052c217a1abc325b01ec87c',
    price: 66,
    __v: 0
  },
  {
    updated_at: 2021-03-18T03:05:13.939Z,
    _id: 6052c369b9395c55042373e6,
    name: 'charger',
    company: '6052c2311993dc433c0657d7',
    price: 50,
    __v: 0
  },
  {
    updated_at: 2021-03-18T03:05:23.503Z,
    _id: 6052c37321b64b4c40ac65a5,
    name: 'tablet',
    company: '6052c2311993dc433c0657d7',
    price: 50,
    __v: 0
  },
  {
    updated_at: 2021-03-18T03:05:34.979Z,
    _id: 6052c37ef633e64cb8b65423,
    name: 'bettery',
    company: '6052c217a1abc325b01ec87c',
    price: 500,
    __v: 0
  }
   */

// var data=[
//   {
//     name: 'bhavesh',
//     product: ObjectId('6052c356a76d435cf857aa3c'),
//     city: 'surat',
//   },
//   {
//     name: 'alex',
//     product: ObjectId('6052c369b9395c55042373e6'),
//     city: 'ahmdabad',
//   },
//   {
//     name: 'lexa',
//     product: ObjectId('6052c37321b64b4c40ac65a5'),
//     city: 'mumbai',
//   },
//   {
//     name: 'bhumi',
//     product: ObjectId('6052c37ef633e64cb8b65423'),
//     city: 'surat',
//   }
// ]
// data.forEach(element => {
//   var customer = new Customer(element);
//     customer.save((err) => {
//         if(err) {
//             console.log(err);
//         } 
//         else {
//             console.log("Successfully created an Customer.");
//         }
//     });
// });