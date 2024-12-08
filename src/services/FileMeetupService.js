import axios from "axios";

//get all
export const getAllFileMeeetup = async () => {
    try {
        const response = await axios.get('http://localhost:8080/api/FileMeetup/getAllFileMeetup');
        return response.data;
    } catch (error) {
        console.error("Error fetching get all fileMeetup:", error);
        throw error;
    }
};


//get by id
export const getByIdFileMeeetup = async (id) => {
    try {
        const response = await axios.get(`http://localhost:8080/api/FileMeetup/getFileMeetupById/${id}`);
        return response.data;
    } catch (error) {
        console.error("Error fetching get all fileMeetup:", error);
        throw error;
    }
};

//add FileMeetup
export const postFileMeeetup = async (newFileMeetup) => {
    try {
        const response = await axios.post('http://localhost:8080/api/FileMeetup/addMeetupFile',newFileMeetup);
        return response.data;
    } catch (error) {
        console.error("Error fetching add fileMeetup:", error);
        throw error;
    }
};


