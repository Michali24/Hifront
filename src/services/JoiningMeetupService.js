import axios from "axios";

export const getAllJoiningMeetup = async () => {
    try {
        const response = await axios.get('http://localhost:8080/api/JoiningMeetup/getAllJoiningMeetup');
        return response.data;
    } catch (error) {
        console.error("Error fetching category articles:", error);
        throw error;
    }
}

//get JoiningMeetup By MeetupScheduleId
export const getJoiningMeetupByMeetupScheduleId = async (id) => {
    try {
        const response = await axios.get(`http://localhost:8080/api/JoiningMeetup/getJoiningMeetupByMeetupScheduleId/${id}`);
        return response.data;
    } catch (error) {
        console.error("Error fetching category articles:", error);
        throw error;
    }
}


export const postJoiningMeetup = async (newJoiningMeetup) => {
    try {
        const response = await axios.post('http://localhost:8080/api/JoiningMeetup/addJoiningMeetup', newJoiningMeetup);
        return response.data;
    } catch (error) {
        console.error("Error fetching category articles:", error);
        throw error;
    }
}


export const getJoiningMeetupById = async (id) => {
    try {
        const response = await axios.get(`http://localhost:8080/api/MeetapimSchedule/getMeetapimScheduleById/${id}`);
        return response.data;
    } catch (error) {
        console.error("Error fetching getJoiningMeetupById:", error);
        throw error;
    }
}




