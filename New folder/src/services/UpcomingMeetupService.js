import axios from "axios";

//get
export const getListMeetup = async () => {
    try {
        const response = await axios.get('http://localhost:8080/api/MeetapimSchedule/getAllMeetapimSchedule');
        return response.data;
    } catch (error) {
        console.error("Error fetching meetup list:", error);
        throw error;
    }
};


//GET last meetup
export const getLastMeetup = async () => {
    try {
        const response = await axios.get('http://localhost:8080/api/MeetapimSchedule/getLastMeetapimSchedule');
        return response.data;
    } catch (error) {
        console.error("Error fetching last meetup :", error);
        throw error;
    }
};


//getByID
export const getByIdMeetup = async (id) => {
    try {
        const response = await axios.get(`http://localhost:8080/api/MeetapimSchedule/getMeetapimScheduleById/${id}`);
        return response.data;
    } catch (error) {
        console.error("Error fetching by id meetup:", error);
        throw error;
    }
};

//post
export const postMeetup = async (newMeetup) => {
    console.log('try');
    try {
        const response = await axios.post('http://localhost:8080/api/MeetapimSchedule/addMeetupSchedule',newMeetup);
        //console.log('response:',response);
        return response.data;
    } catch (error) {
        //console.log('errrrrrrrrrrrr');
        console.error("Error fetching add meetup:", error);
        throw error;
    }
};

//put
export const updateMeetup = async (id) => {
    try {
        const response = await axios.put(`http://localhost:8080/api/MeetapimSchedule/updateMeetapimSchedule/${id}`);
        return response.data;
    } catch (error) {
        console.error("Error fetching update meetup:", error);
        throw error;
    }
};

