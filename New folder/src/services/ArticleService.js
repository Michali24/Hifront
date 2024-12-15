import axios from "axios";

//all
export const getAllArticle = async () => {
    try {
        const response = await axios.get('http://localhost:8080/api/Aritcles/getAllArticles');
        return response.data;
    } catch (error) {
        console.error("Error fetching category articles:", error);
        throw error;
    }
};

//by id
export const getArticleByID = async (id) => {
    try {
        const response = await axios.get(`http://localhost:8080/api/Aritcles/getArticlesById/${id}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching category:', error);
        throw error;
    }
};

post
export const addArticle = async (newArticle) => {
    console.log('commeeee');
    try {
        const response = await axios.post('http://localhost:8080/api/Aritcles/addArticle', newArticle);
        console.log('data---');
        console.log('post article',response.data);
        return response.data;
    } catch (error) {
        console.error("Error fetching add articles:", error);
        throw error;
    }
};





//מחזירה מאמרים לפי קטגוריה מסוימת
//מקבלת Id
export const getAllArticleByCategoryId = async (id) => {
    try {
        const response = await axios.get(` http://localhost:8080/api/Aritcles/getArticlesByCategoryId/${id}`);
        return response.data;
    } catch (error) {
        console.error("Error fetching category articles:", error);
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

//update article-to add it (the article that request-with status=false that now is turn to true!)
export const updateArticleByID = async (id,putArticle) => {
    try {
        const response = await axios.put(`http://localhost:8080/api/Aritcles/updateArticle/${id}`,putArticle);
        return response.data;
    } catch (error) {
        console.error('Error fetching category:', error);
        throw error;
    }
};


//Aritcles/getPendingArticles
// export const getrticleByID = async () => {
//     try {
//         const response = await axios.get('http://localhost:8080/api/Aritcles/getPendingArticles');
//         return response.data;
//     } catch (error) {
//         console.error('Error fetching category:', error);
//         throw error;
//     }
// };

export const getrticleByID = async () => {
    try {
        const response = await axios.get('http://localhost:8080/api/Aritcles/getPendingArticlesWithCategory');
        return response.data;
    } catch (error) {
        console.error('Error fetching category:', error);
        throw error;
    }
};