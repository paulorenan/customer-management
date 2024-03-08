const CustomerController = require('../controllers/CustomerController');
const CustomerMiddleware = require('../middlewares/CustomerMiddleware');

const { Router } = require('express');

const CostumerRoute = Router();

CostumerRoute.post('/', CustomerMiddleware.validateCustomer, CustomerController.createCustomer);

CostumerRoute.get('/', CustomerController.getCustomers);

CostumerRoute.get('/route', CustomerController.shortestRoute);

CostumerRoute.get('/:id', CustomerMiddleware.validateCustomerId, CustomerController.getCustomerById);

CostumerRoute.put('/:id', CustomerMiddleware.validateCustomerId, CustomerMiddleware.validateCustomer, CustomerController.updateCustomer);

CostumerRoute.delete('/:id', CustomerMiddleware.validateCustomerId, CustomerController.deleteCustomer);


module.exports = CostumerRoute;
