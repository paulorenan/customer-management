const validateCustomer = (req, res, next) => {
    const customer = req.body;
    if (!customer.name || !customer.email || !customer.phone || !customer.address) {
        return res.status(400).json({ error: 'name, email, phone and address are required' });
    }
    next();
}

const validateCustomerId = (req, res, next) => {
    const { id } = req.params;
    if (!id) {
        return res.status(400).json({ error: 'id is required' });
    }
    next();
}

module.exports = {
    validateCustomer,
    validateCustomerId
};