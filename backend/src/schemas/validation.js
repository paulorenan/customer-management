const validateEmail = (email) => {
    const emailRegex = /\S+@\S+\.\S+/;
    if (!emailRegex.test(email)) {
        return 'Invalid email';
    }
    return null;
}

const validateAddress = (address) => {
    const addressRegex = /^-?\d+(\.\d+)?,-?\d+(\.\d+)?$/;
    if (!addressRegex.test(address)) {
        return 'Invalid address';
    }
    return null;
}

const validateCustomer = (customer) => {
    const { address, email } = customer;
    const emailError = validateEmail(email);
    if (emailError) {
        return emailError;
    }
    const addressError = validateAddress(address);
    if (addressError) {
        return addressError;
    }
    return null;
}

module.exports = {
    validateCustomer
}