const CustomerService = require('../services/CustomerService');

const createCustomer = async (req, res) => {
    const customer = req.body;
    try {
        const data = await CustomerService.createCustomer(customer);
        res.status(201).json(data);
    } catch (error) {
        res.status(500).json(error);
    }
}

const getCustomers = async (req, res) => {
    try {
        const data = await CustomerService.getCustomers();
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json(error);
    }
}

const getCustomerById = async (req, res) => {
    const { id } = req.params;
    try {
        const data = await CustomerService.getCustomerById(id);
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json(error);
    }
}

const updateCustomer = async (req, res) => {
    const { id } = req.params;
    const customer = req.body;
    try {
        const findCostumer = await CustomerService.getCustomerById(id);
        if (!findCostumer) {
            return res.status(404).json({ error: 'Customer not found' });
        }
        await CustomerService.updateCustomer(id, customer);
        const newCustomer = await CustomerService.getCustomerById(id);
        res.status(200).json(newCustomer);
    } catch (error) {
        res.status(500).json(error);
    }
}

const deleteCustomer = async (req, res) => {
    const { id } = req.params;
    try {
        const data = await CustomerService.deleteCustomer(id);
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json(error);
    }
}

module.exports = {
    createCustomer,
    getCustomers,
    getCustomerById,
    updateCustomer,
    deleteCustomer
};