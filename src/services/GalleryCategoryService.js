import axios from "axios";

//get all GalleryCategory
export const getAllGalleryCategory = async () => {
    try {
        const response = await axios.get('http://localhost:8080/api/GalleryCategory/getAllGalleryCategory');
        return response.data;
    } catch (error) {
        console.error("Error fetching get all fileMeetup:", error);
        throw error;
    }
};

//get all GalleryCategory with file
export const getAllGalleryCategoryWithFile = async () => {
    try {
        const response = await axios.get('http://localhost:8080/api/GalleryCategory/getAllGalleryCategoryFile');
        return response.data;
    } catch (error) {
        console.error("Error fetching get all fileMeetup:", error);
        throw error;
    }
};


//add GalleryCategory-without img
export const postGalleryCategoryp = async (newGalleryCategory) => {
    try {
        const response = await axios.post('http://localhost:8080/api/GalleryCategory/addGalleryCategory', newGalleryCategory);
        return response.data;
    } catch (error) {
        console.error("Error fetching add fileMeetup:", error);
        throw error;
    }
};

//add GalleryCategory-with img!!!!!!!!
export const postFileGalleryCategoryp = async (newFileGalleryCategory) => {
    try {
        console.log('-000-before--',newFileGalleryCategory);
        // console.log('0-0detail',img_meetup);
        const response = await axios.post('http://localhost:8080/api/GalleryCategory/addGalleryCategoryFile', newFileGalleryCategory);
        console.log('sucsess to add GalleryCategory');
        return response.data;
    } catch (error) {
        console.error("Error fetching add fileMeetup:", error);
        throw error;
    }
};

