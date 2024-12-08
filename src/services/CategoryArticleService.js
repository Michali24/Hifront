import axios from "axios";

export const getAllCategoryArticle = async () => {
    try {
        const response = await axios.get('http://localhost:8080/api/CategoryOfArticles/getAllCategoryOfArticles');
        return response.data;
    } catch (error) {
        console.error("Error fetching category articles:", error);
        throw error;
    }
}

//שולפת ID 
//של קטגוריה לפי השם של הקטגוריה
export const getCategoryArticleId = async (name) => {
    try {
        const response = await axios.get(`http://localhost:8080/api/CategoryOfArticles/getCategoryIdByName/${name}`);
        return response.data;
    } catch (error) {
        console.error("Error fetching category articles:", error);
        throw error;
    }
}
