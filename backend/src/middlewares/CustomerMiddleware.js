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

    if (parseInt(id) <= 0 ) {
        return res.status(400).json({ error: 'id must be a positive integer' });
    }

    if (isNaN(parseInt(id))) {
        return res.status(400).json({ error: 'id must be a number' });
    }

    next();
}

module.exports = {
    validateCustomer,
    validateCustomerId
};