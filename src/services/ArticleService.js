import axios from "axios";
//14-12-24-------------------------------------------------------------------

//get all
export const getAllArticle = async () => {
    try {
        const response = await axios.get('http://localhost:8080/api/Aritcles/getListArticles');
        return response.data;
    } catch (error) {
        console.error("Error fetching category articles:", error);
        throw error;
    }
};

export const getArticleWithStatusFalse = async () => {
    try {
        const response = await axios.get('http://localhost:8080/api/Aritcles/getListArticlesWithStatusFalse');
        return response.data;
    } catch (error) {
        console.error('Error fetching category:', error);
        throw error;
    }
};


//מחזירה מאמרים לפי קטגוריה מסוימת
//מקבלת Id
export const getArticlesByCategoryId = async (categoryId) => {
    try {
        const response = await axios.get(`http://localhost:8080/api/Aritcles/getArticlesByCategoryId/${categoryId}`);
        return response.data;
    } catch (error) {
        console.error("Error fetching category articles:", error);
        throw error;
    }
};

//by id
export const getArticleByID = async (id) => {
    try {
        const response = await axios.get(`http://localhost:8080/api/Aritcles/getArticleById/${id}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching category:', error);
        throw error;
    }
};


export const addArticle = async (newArticle) => {
    try {
        console.log('chance to add');
        const response = await axios.post('http://localhost:8080/api/Aritcles/addArticle', newArticle);
        console.log('add it!!!!');
        return response.data;
    } catch (error) {
        console.error('Error fetching category:', error);
        throw error;
    }
};





//update article-to add it (the article that request-with status=false that now is turn to true!)
export const updateArticleByID = async (id, putArticle) => {
    try {
        const response = await axios.put(`http://localhost:8080/api/Aritcles/updateArticle/${id}`, putArticle);
        return response.data;
    } catch (error) {
        console.error('Error fetching category:', error);
        throw error;
    }
};


//delete aerticle by id
export const deleteArticleByID = async (id) => {
    try {
        const response = await axios.delete(`http://localhost:8080/api/Aritcles/deleteArticles/${id}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching category:', error);
        throw error;
    }
};