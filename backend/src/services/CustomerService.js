const Customer = require('../models/customer');
const calculateRoutes = require('../schemas/calculateRoutes');

const createCustomer = async (customer) => {
    const { name, email, phone, address } = customer;
    try {
        return await Customer.createCustomer({ name, email, phone, address });
    } catch (error) {
        return error;
    }
}

const getCustomers = async () => {
    try {
        return await Customer.findAllCustomers();
    } catch (error) {
        return error;
    }
}

const getCustomerById = async (id) => {
    try {
        return await Customer.findCustomerById(id);
    } catch (error) {
        return error;
    }
}

const updateCustomer = async (id, customer) => {
    const { name, email, phone, address } = customer;
    try {
        const update =  await Customer.updateCustomer(id, { name, email, phone, address });
        console.log(update);
        return update;
    } catch (error) {
        return error;
    }
}

const deleteCustomer = async (id) => {
    try {
        return await Customer.deleteCustomer(id);
    } catch (error) {
        return error;
    }
}

const shortestRoute = async () => {
    try {
        const costumers = await Customer.findAllCustomers();
        console.log(costumers);
        const routes = calculateRoutes.calculateShortestDistance(costumers);
        return routes;
    }
    catch (error) {
        return error;
    }
}

module.exports = {
    createCustomer,
    getCustomers,
    getCustomerById,
    updateCustomer,
    deleteCustomer,
    shortestRoute,
};