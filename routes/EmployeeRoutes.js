var express = require('express');
var router = express.Router();

var employee = require("../controllers/EmployeeController.js");
var company = require("../controllers/CompanyController.js");
var customer = require("../controllers/CustomerController.js");
var product = require("../controllers/ProductController.js");
var filter = require("../controllers/filterControlller.js");

// Get all employees
router.get('/', employee.list);

// Get single employee by id
router.get('/show/:id', employee.show);

// Create employee
router.get('/create', employee.create);

// Save employee
router.post('/save', employee.save);

// Edit employee
router.get('/edit/:id', employee.edit);

// Edit update
router.post('/update/:id', employee.update);

// Edit update
router.post('/delete/:id', employee.delete);

module.exports = router;