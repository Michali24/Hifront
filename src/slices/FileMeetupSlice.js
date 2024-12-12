import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getAllFileMeeetup, postFileMeeetup, getByIdFileMeeetup, getFileMeeetupByGallerCategoryId } from '../services/FileMeetupService';
//צרפתי פה גם את GalleryCategory
import { getAllGalleryCategory, postGalleryCategoryp, postFileGalleryCategoryp, getAllGalleryCategoryWithFile } from '../services/GalleryCategoryService';

//FileMeetupService
//get all FileMeetup
export const getAllFileMeeetupList = createAsyncThunk("fileMeetupList/getAllFileMeeetupList", async () => {
    const fileMeeetupDataList = await getAllFileMeeetup();
    return fileMeeetupDataList;
});

//gey by id
export const getFileMeeetupById = createAsyncThunk("fileMeetup/getFileMeeetupById", async (id) => {
    const fileMeeetupDataList = await getByIdFileMeeetup(id);
    return fileMeeetupDataList;
});

//get fileMeeetup By GallerCategory Id
export const getfileMeeetupByGallerCategoryId = createAsyncThunk("fileMeetupList/getfileMeeetupByGallerCategoryId", async (GalleryCategoryId) => {
    const fileMeeetupDataList = await getFileMeeetupByGallerCategoryId(GalleryCategoryId);
    return fileMeeetupDataList;
});

//add file FileMeetup
export const addFileMeeetup = createAsyncThunk("fileMeetup/addFileMeeetup", async (newFileMeetup) => {
    const fileMeeetupData = await postFileMeeetup(newFileMeetup);
    return fileMeeetupData;
});

//GalleryCategory------------------------------------------------------------------------------------------------------------------------

//get all GalleryCategory
export const getAllGalleryCategoryList = createAsyncThunk("galleryCategoryList/getAllGalleryCategoryList", async () => {
    const GalleryCategoryDataList = await getAllGalleryCategory();
    return GalleryCategoryDataList;
});

//get all GalleryCategory with File
export const getAllGalleryCategoryWithFileList = createAsyncThunk("galleryCategoryList/getAllGalleryCategoryWithFileList", async () => {
    const GalleryCategoryDataList = await getAllGalleryCategoryWithFile();
    return GalleryCategoryDataList;
});


//add GalleryCategory with img
export const addGalleryCategoryWithImg = createAsyncThunk("galleryCategoty/addGalleryCategoryWithImg", async (newGalleryCategory) => {
    const GalleryCategoryData = await postFileGalleryCategoryp(newGalleryCategory);
    return GalleryCategoryData;
});

//add GalleryCategory
export const addGalleryCategory = createAsyncThunk("galleryCategoty/addGalleryCategory", async (newGalleryCategory) => {
    const GalleryCategoryData = await postGalleryCategoryp(newGalleryCategory);
    return GalleryCategoryData;
});


export const FileMeetupSlice = createSlice({
    name: 'fileMeetup',
    initialState: {
        fileMeetupList: [],
        fileMeetup: {},
        galleryCategoryList: [],
        galleryCategoty: {},
        loading: false,
        error: null,
        statuse: ''
    },
    reducers: {},
    extraReducers: (builder) => {
        builder

            //FileMeetup----------------------------------------------------------------------
            //all FileMeetup________________________________________________________________________
            .addCase(getAllFileMeeetupList.fulfilled, (state, action) => {
                state.fileMeetupList = action.payload;
            })

            // טיפול במצב בו הפעולה התחילה אבל טרם הסתיימה
            .addCase(getAllFileMeeetupList.pending, (state) => {
                // הגדרת מצב הטעינה כ-true כדי להציג אינדיקציית טעינה למשתמש
                state.loading = true;
                // איפוס הודעת השגיאה למקרה בו הייתה שגיאה קודם
                state.error = null;
            })

            // טיפול במצב בו הפעולה נכשלה
            .addCase(getAllFileMeeetupList.rejected, (state, action) => {
                // שינוי מצב הטעינה ל-false כדי להפסיק להציג מסך טעינה
                state.loading = false;
                // שמירת הודעת השגיאה במאפיין error כדי להציג למשתמש
                state.error = action.error.message;
            })


            // get FileMeeetupById___________________________________________________________________
            .addCase(getFileMeeetupById.fulfilled, (state, action) => {
                state.fileMeetup = action.payload;
            })

            // טיפול במצב בו הפעולה התחילה אבל טרם הסתיימה
            .addCase(getFileMeeetupById.pending, (state) => {
                // הגדרת מצב הטעינה כ-true כדי להציג אינדיקציית טעינה למשתמש
                state.loading = true;
                // איפוס הודעת השגיאה למקרה בו הייתה שגיאה קודם
                state.error = null;
            })

            // טיפול במצב בו הפעולה נכשלה
            .addCase(getFileMeeetupById.rejected, (state, action) => {
                // שינוי מצב הטעינה ל-false כדי להפסיק להציג מסך טעינה
                state.loading = false;
                // שמירת הודעת השגיאה במאפיין error כדי להציג למשתמש
                state.error = action.error.message;
            })

            // get getfileMeeetupByGallerCategoryId___________________________________________________________________
            .addCase(getfileMeeetupByGallerCategoryId.fulfilled, (state, action) => {
                state.fileMeetupList = action.payload;
            })

            // טיפול במצב בו הפעולה התחילה אבל טרם הסתיימה
            .addCase(getfileMeeetupByGallerCategoryId.pending, (state) => {
                // הגדרת מצב הטעינה כ-true כדי להציג אינדיקציית טעינה למשתמש
                state.loading = true;
                // איפוס הודעת השגיאה למקרה בו הייתה שגיאה קודם
                state.error = null;
            })

            // טיפול במצב בו הפעולה נכשלה
            .addCase(getfileMeeetupByGallerCategoryId.rejected, (state, action) => {
                // שינוי מצב הטעינה ל-false כדי להפסיק להציג מסך טעינה
                state.loading = false;
                // שמירת הודעת השגיאה במאפיין error כדי להציג למשתמש
                state.error = action.error.message;
            })


            //post FileMeetup_____________________________________________________________________
            .addCase(addFileMeeetup.fulfilled, (state, action) => {
                state.fileMeetup = action.payload;
            })

            // טיפול במצב בו הפעולה התחילה אבל טרם הסתיימה
            .addCase(addFileMeeetup.pending, (state) => {
                // הגדרת מצב הטעינה כ-true כדי להציג אינדיקציית טעינה למשתמש
                state.loading = true;
                // איפוס הודעת השגיאה למקרה בו הייתה שגיאה קודם
                state.error = null;
            })

            // טיפול במצב בו הפעולה נכשלה
            .addCase(addFileMeeetup.rejected, (state, action) => {
                // שינוי מצב הטעינה ל-false כדי להפסיק להציג מסך טעינה
                state.loading = false;
                // שמירת הודעת השגיאה במאפיין error כדי להציג למשתמש
                state.error = action.error.message;
            })

            //GalleryCategory------------------------------------------------------------------------------------

            //get all GalleryCategory With File List_____________________________________________
            .addCase(getAllGalleryCategoryWithFileList.fulfilled, (state, action) => {
                state.galleryCategoryList = action.payload;
            })

            // טיפול במצב בו הפעולה התחילה אבל טרם הסתיימה
            .addCase(getAllGalleryCategoryWithFileList.pending, (state) => {
                // הגדרת מצב הטעינה כ-true כדי להציג אינדיקציית טעינה למשתמש
                state.loading = true;
                // איפוס הודעת השגיאה למקרה בו הייתה שגיאה קודם
                state.error = null;
            })

            // טיפול במצב בו הפעולה נכשלה
            .addCase(getAllGalleryCategoryWithFileList.rejected, (state, action) => {
                // שינוי מצב הטעינה ל-false כדי להפסיק להציג מסך טעינה
                state.loading = false;
                // שמירת הודעת השגיאה במאפיין error כדי להציג למשתמש
                state.error = action.error.message;
            })

            //get all GalleryCategory_____________________________________________
            .addCase(getAllGalleryCategoryList.fulfilled, (state, action) => {
                state.galleryCategoryList = action.payload;
            })

            // טיפול במצב בו הפעולה התחילה אבל טרם הסתיימה
            .addCase(getAllGalleryCategoryList.pending, (state) => {
                // הגדרת מצב הטעינה כ-true כדי להציג אינדיקציית טעינה למשתמש
                state.loading = true;
                // איפוס הודעת השגיאה למקרה בו הייתה שגיאה קודם
                state.error = null;
            })

            // טיפול במצב בו הפעולה נכשלה
            .addCase(getAllGalleryCategoryList.rejected, (state, action) => {
                // שינוי מצב הטעינה ל-false כדי להפסיק להציג מסך טעינה
                state.loading = false;
                // שמירת הודעת השגיאה במאפיין error כדי להציג למשתמש
                state.error = action.error.message;
            })

            //add GalleryCategory With Imag _____________________________________________________
            .addCase(addGalleryCategoryWithImg.fulfilled, (state, action) => {
                state.galleryCategoty = action.payload;
            })

            // טיפול במצב בו הפעולה התחילה אבל טרם הסתיימה
            .addCase(addGalleryCategoryWithImg.pending, (state) => {
                // הגדרת מצב הטעינה כ-true כדי להציג אינדיקציית טעינה למשתמש
                state.loading = true;
                // איפוס הודעת השגיאה למקרה בו הייתה שגיאה קודם
                state.error = null;
            })

            // טיפול במצב בו הפעולה נכשלה
            .addCase(addGalleryCategoryWithImg.rejected, (state, action) => {
                // שינוי מצב הטעינה ל-false כדי להפסיק להציג מסך טעינה
                state.loading = false;
                // שמירת הודעת השגיאה במאפיין error כדי להציג למשתמש
                state.error = action.error.message;
            })

            //add GalleryCategory _____________________________________________________
            .addCase(addGalleryCategory.fulfilled, (state, action) => {
                state.galleryCategoty = action.payload;
            })

            // טיפול במצב בו הפעולה התחילה אבל טרם הסתיימה
            .addCase(addGalleryCategory.pending, (state) => {
                // הגדרת מצב הטעינה כ-true כדי להציג אינדיקציית טעינה למשתמש
                state.loading = true;
                // איפוס הודעת השגיאה למקרה בו הייתה שגיאה קודם
                state.error = null;
            })

            // טיפול במצב בו הפעולה נכשלה
            .addCase(addGalleryCategory.rejected, (state, action) => {
                // שינוי מצב הטעינה ל-false כדי להפסיק להציג מסך טעינה
                state.loading = false;
                // שמירת הודעת השגיאה במאפיין error כדי להציג למשתמש
                state.error = action.error.message;
            })

    }
})

export default FileMeetupSlice.reducer;
