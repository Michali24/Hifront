import axios from "axios";

//Post
export const addArticle = async (newArticle) => {
    try {
        const response = await axios.post('http://localhost:8080/api/RequestToAddArticles/addRequestToAddArticles',newArticle);
        return response.data;
    } catch (error) {
        console.error("Error fetching category articles:", error);
        throw error;
    }
};

//getAll
export const getRegisterArticle = async () => {
    try {
        const response = await axios.get('http://localhost:8080/api/RequestToAddArticles/getAllRequestToAddArticles');
        return response.data;
    } catch (error) {
        console.error("Error fetching category articles:", error);
        throw error;
    }
};

export const getAddArticleByID = async (id) => {
    try {
        const response = await axios.get(`http://localhost:8080/api/RequestToAddArticles/getRequestToAddArticlessById/${id}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching category:', error);
        throw error;
    }
};




