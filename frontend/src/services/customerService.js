import axios from "axios";

const { REACT_APP_API_URL } = process.env;

const URL = `${REACT_APP_API_URL ? REACT_APP_API_URL : "http://localhost:4000"}/api/customer`;

export const getCustomers = async () => {
  console.log(URL)
  try {
    const response = await axios.get(URL);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const updateCustomer = async (customer) => {
  try {
    const response = await axios.put(
      `{URL}/${customer.id}`,
      customer
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const deleteCustomer = async (id) => {
  try {
    const response = await axios.delete(
      `{URL}/${id}`
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const createCustomer = async (customer) => {
  try {
    const response = await axios.post(
      URL,
      customer
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

export const getCustomer = async (id) => {
  try {
    const response = await axios.get(`{URL}/${id}`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

export const getCustomersShortestRoute = async () => {
  try {
    const response = await axios.get(`${URL}/route`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}
