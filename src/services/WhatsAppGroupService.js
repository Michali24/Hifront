import axios from "axios";


export const getAllWhatsAppGroup = async () => {
    try {
        const response = await axios.get('http://localhost:8080/api/JoiningWhatsAppGroups/getAllJoiningWhatsAppGroups');
        return response.data;
    } catch (error) {
        console.error("Error fetching category articles:", error);
        throw error;
    }
}

export const getByIdWhatsAppGroup = async (id) => {
    try {
        const response = await axios.get(`http://localhost:8080/api/JoiningWhatsAppGroups/getArticlesById/${id}`);
        return response.data;
    } catch (error) {
        console.error("Error fetching category articles:", error);
        throw error;
    }
}



export const addWhatsAppGroup = async (newWhatsAppGroup) => {
    try {
        const response = await axios.post('http://localhost:8080/api/JoiningWhatsAppGroups/addJoiningWhatsAppGroups',newWhatsAppGroup);
        return response.data;
    } catch (error) {
        console.error("Error fetching category articles:", error);
        throw error;
    }
}

