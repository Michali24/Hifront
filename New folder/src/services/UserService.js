import axios from "axios";

//get By Id
export const getUserByID = async (id) => {
    try {
        const response = await axios.get(`http://localhost:8080/api/Register/getRegisterById/${id}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching category:', error);
        throw error;
    }
};

//get All
export const getAllUsers = async () => {
    try {
        const response = await axios.get('ttp://localhost:8080/api/Register/getAllRegister');
        return response.data;
    } catch (error) {
        console.error('Error fetching category:', error);
        throw error;
    }
};

//post
export const addUser = async (newUser) => {
    try {
        const response = await axios.post('http://localhost:8080/api/Register/addRegister', newUser);
        return response.data;
    } catch (error) {
        console.error('Error adding course:', error);
        throw error;
    }
};

//login
export const LogIn = async (paramters) => {
    try {
        const response = await axios.post('http://localhost:8080/api/Register/Login', paramters);
        console.log('log in sucesse!!');
        return response.data;
    } catch (error) {
        console.error('Error adding course:', error);
        throw error;
    }
};
