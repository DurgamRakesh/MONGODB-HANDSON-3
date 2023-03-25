const express = require('express');
const employeecontrller  = require('../controller/employeecontroller');
const router = express.Router();

router.post('/employee', employeecontrller.emplyoeeEnroll);
router.post('/employee/insertMany', employeecontrller.insertManyTODB);
router.get('/employee', employeecontrller.findinDB);
router.get('/employee/more30k', employeecontrller.findempmorethan30k);
router.get('/employee/more2yrs', employeecontrller.findempmorethan2yrs);
router.get('/employee/gand1yrs', employeecontrller.findgraduatedandmorethan1yrs);
router.put('/employee', employeecontrller.updateempdata);
router.delete('/employee', employeecontrller.deleteempdata);


module.exports = router;