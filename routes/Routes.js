var express = require('express');
var router = express.Router();

var company = require("../controllers/CompanyController.js");
var customer = require("../controllers/CustomerController.js");
var product = require("../controllers/ProductController.js");
var filter = require("../controllers/filterControlller.js");

// Get all employees
router.get('/company', company.read);

// Create employee
router.get('/create/company', company.create);

// Edit update
router.post('/update/company/:id', company.update);

// Edit update
router.post('/delete/company/:id', company.delete);

module.exports = router;