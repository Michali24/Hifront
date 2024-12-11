import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { addArticle, getRegisterArticle,getAddArticleByID } from '../services/AddArticleService';


//post
export const postArticle = createAsyncThunk("AddArticleObj/postArticle", async (newArticle) => {
    const ArticleData = await addArticle(newArticle);
    return ArticleData;
});

//get all
export const getRegisterArticles = createAsyncThunk("ArticleList/getRegisterArticle", async () => {
    const ArticleListData = await getRegisterArticle();
    return ArticleListData;
});

//get by id
export const getRegisterArticlesByID = createAsyncThunk("AddArticleObj/getRegisterArticlesByID", async (id) => {
    const AddArticleListData = await getAddArticleByID(id);
    return AddArticleListData;
});


export const addArticleSlice = createSlice({
    name: 'AddArticle',
    initialState: {
        AddArticleObj: {},
        ArticleList: [],
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder

            //Post__________________________________________________________________________
            .addCase(postArticle.fulfilled, (state, action) => {
                state.AddArticleObj = action.payload;
            })

            // טיפול במצב בו הפעולה התחילה אבל טרם הסתיימה
            .addCase(postArticle.pending, (state) => {
                // הגדרת מצב הטעינה כ-true כדי להציג אינדיקציית טעינה למשתמש
                state.loading = true;
                // איפוס הודעת השגיאה למקרה בו הייתה שגיאה קודם
                state.error = null;
            })

            // טיפול במצב בו הפעולה נכשלה
            .addCase(postArticle.rejected, (state, action) => {
                // שינוי מצב הטעינה ל-false כדי להפסיק להציג מסך טעינה
                state.loading = false;
                // שמירת הודעת השגיאה במאפיין error כדי להציג למשתמש
                state.error = action.error.message;
            })

            //Get All____________________________________________________________________
            .addCase(getRegisterArticles.fulfilled, (state, action) => {
                state.ArticleList = action.payload;
            })

            // טיפול במצב בו הפעולה התחילה אבל טרם הסתיימה
            .addCase(getRegisterArticles.pending, (state) => {
                // הגדרת מצב הטעינה כ-true כדי להציג אינדיקציית טעינה למשתמש
                state.loading = true;
                // איפוס הודעת השגיאה למקרה בו הייתה שגיאה קודם
                state.error = null;
            })

            // טיפול במצב בו הפעולה נכשלה
            .addCase(getRegisterArticles.rejected, (state, action) => {
                // שינוי מצב הטעינה ל-false כדי להפסיק להציג מסך טעינה
                state.loading = false;
                // שמירת הודעת השגיאה במאפיין error כדי להציג למשתמש
                state.error = action.error.message;
            })

            //get by id
            .addCase(getRegisterArticlesByID.fulfilled, (state, action) => {
                state.AddArticleObj = action.payload;
            })

            // טיפול במצב בו הפעולה התחילה אבל טרם הסתיימה
            .addCase(getRegisterArticlesByID.pending, (state) => {
                // הגדרת מצב הטעינה כ-true כדי להציג אינדיקציית טעינה למשתמש
                state.loading = true;
                // איפוס הודעת השגיאה למקרה בו הייתה שגיאה קודם
                state.error = null;
            })

            // טיפול במצב בו הפעולה נכשלה
            .addCase(getRegisterArticlesByID.rejected, (state, action) => {
                // שינוי מצב הטעינה ל-false כדי להפסיק להציג מסך טעינה
                state.loading = false;
                // שמירת הודעת השגיאה במאפיין error כדי להציג למשתמש
                state.error = action.error.message;
            })
    }
})

export default addArticleSlice.reducer;

