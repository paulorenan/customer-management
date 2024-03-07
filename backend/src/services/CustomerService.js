const { Customer } = require('../models');

const createCustomer = async (customer) => {
    const { name, email, phone, address } = customer;
    try {
        return await Customer.create({ name, email, phone, address });
    } catch (error) {
        return error;
    }
}

const getCustomers = async () => {
    try {
        return await Customer.findAll();
    } catch (error) {
        return error;
    }
}

const getCustomerById = async (id) => {
    try {
        return await Customer.findByPk(id);
    } catch (error) {
        return error;
    }
}

const updateCustomer = async (id, customer) => {
    const { name, email, phone, address } = customer;
    try {
        const update =  await Customer.update({ name, email, phone, address }, { where: { id } });
        console.log(update);
        return update;
    } catch (error) {
        return error;
    }
}

const deleteCustomer = async (id) => {
    try {
        return await Customer.destroy({ where: { id } });
    } catch (error) {
        return error;
    }
}

module.exports = {
    createCustomer,
    getCustomers,
    getCustomerById,
    updateCustomer,
    deleteCustomer
};