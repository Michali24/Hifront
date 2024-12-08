import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getAllArticle, getArticleByID,getAllArticleByCategoryId ,addArticle,deleteArticleByID,updateArticleByID,getrticleByID} from "../services/ArticleService";
import { getAllCategoryArticle ,getCategoryArticleId} from "../services/CategoryArticleService";


//AllArticleList
export const getAllArticleList = createAsyncThunk("ArticleList/getAllArticleList", async () => {
    const ArticlesData = await getAllArticle();
    return ArticlesData;
});

//ArticleListByCategoryId
export const getArticleListByCategoryId = createAsyncThunk("ArticleList/getArticleListByCategoryId", async (categoryId) => {
    const ArticlesByCategoryData = await getAllArticleByCategoryId(categoryId);
    return ArticlesByCategoryData;
});

//ArticleById
export const getArticleById=createAsyncThunk("Article/getArticleById",async(articleId)=>{
    const ArticleData=await getArticleByID(articleId)
    return ArticleData;
})

//AllCategoryList
export const getAllCategoryList = createAsyncThunk("CategoryList/getAllCategoryList", async () => {
    const CategoryArticleData = await getAllCategoryArticle();
    return CategoryArticleData;
})

//post
export const postArticle = createAsyncThunk("Article/postArticle", async (newArticle) => {
    const CategoryArticleData = await addArticle (newArticle);
    return CategoryArticleData;
})

///getIdOfAricle
export const getIdOfAricle = createAsyncThunk("id/getIdOfAricle", async (name) => {
    const ArticleId = await getCategoryArticleId (name);
    return ArticleId;
})

//delete
export const deleteAricle = createAsyncThunk("statuse/deleteAricle", async (id) => {
    const ArticleId = await deleteArticleByID (id);
    return ArticleId;
})

//update
export const putAricle = createAsyncThunk("Article/putAricle", async (newAricle) => {
    const ArticlePut = await updateArticleByID (newAricle);
    return ArticlePut;
})

//getDTO
export const getDTOAricle = createAsyncThunk("ArticleList/getDTOAricle", async () => {
    const ArticleDTO = await getrticleByID ();
    return ArticleDTO;
})


export const ArticleSlice = createSlice({
    name: 'article',
    initialState: {
        id:'',
        ArticleList: [],
        Article: {},
        CategoryList: [],
        loading: false,
        error: null,
        statuse:''
    },
    reducers: {},
    extraReducers: (builder) => {
        builder

        //all article_____________________________________________________________________
            .addCase(getAllArticleList.fulfilled, (state, action) => {
                state.ArticleList = action.payload;
            })

            // טיפול במצב בו הפעולה התחילה אבל טרם הסתיימה
            .addCase(getAllArticleList.pending, (state) => {
                // הגדרת מצב הטעינה כ-true כדי להציג אינדיקציית טעינה למשתמש
                state.loading = true;
                // איפוס הודעת השגיאה למקרה בו הייתה שגיאה קודם
                state.error = null;
            })

            // טיפול במצב בו הפעולה נכשלה
            .addCase(getAllArticleList.rejected, (state, action) => {
                // שינוי מצב הטעינה ל-false כדי להפסיק להציג מסך טעינה
                state.loading = false;
                // שמירת הודעת השגיאה במאפיין error כדי להציג למשתמש
                state.error = action.error.message;
            })
            
            ///by id category___________________________________________________________
            .addCase(getArticleListByCategoryId.fulfilled, (state, action) => {
                state.ArticleList = action.payload;
            })
            // טיפול במצב בו הפעולה התחילה אבל טרם הסתיימה
            .addCase(getArticleListByCategoryId.pending, (state) => {
                // הגדרת מצב הטעינה כ-true כדי להציג אינדיקציית טעינה למשתמש
                state.loading = true;
                // איפוס הודעת השגיאה למקרה בו הייתה שגיאה קודם
                state.error = null;
            })

            // טיפול במצב בו הפעולה נכשלה
            .addCase(getArticleListByCategoryId.rejected, (state, action) => {
                // שינוי מצב הטעינה ל-false כדי להפסיק להציג מסך טעינה
                state.loading = false;
                // שמירת הודעת השגיאה במאפיין error כדי להציג למשתמש
                state.error = action.error.message;
            })

            //article by id___________________________________________________
            .addCase(getArticleById.fulfilled, (state, action) => {
                state.Article = action.payload;
            })
            // טיפול במצב בו הפעולה התחילה אבל טרם הסתיימה
            .addCase(getArticleById.pending, (state) => {
                // הגדרת מצב הטעינה כ-true כדי להציג אינדיקציית טעינה למשתמש
                state.loading = true;
                // איפוס הודעת השגיאה למקרה בו הייתה שגיאה קודם
                state.error = null;
            })

            // טיפול במצב בו הפעולה נכשלה
            .addCase(getArticleById.rejected, (state, action) => {
                // שינוי מצב הטעינה ל-false כדי להפסיק להציג מסך טעינה
                state.loading = false;
                // שמירת הודעת השגיאה במאפיין error כדי להציג למשתמש
                state.error = action.error.message;
            })

            //all category______________________________________________________
            .addCase(getAllCategoryList.fulfilled, (state, action) => {
                state.CategoryList = action.payload;
            })
            // טיפול במצב בו הפעולה התחילה אבל טרם הסתיימה
            .addCase(getAllCategoryList.pending, (state) => {
                // הגדרת מצב הטעינה כ-true כדי להציג אינדיקציית טעינה למשתמש
                state.loading = true;
                // איפוס הודעת השגיאה למקרה בו הייתה שגיאה קודם
                state.error = null;
            })

            // טיפול במצב בו הפעולה נכשלה
            .addCase(getAllCategoryList.rejected, (state, action) => {
                // שינוי מצב הטעינה ל-false כדי להפסיק להציג מסך טעינה
                state.loading = false;
                // שמירת הודעת השגיאה במאפיין error כדי להציג למשתמש
                state.error = action.error.message;
            })

            //post________________________________________________________________
            .addCase(postArticle.fulfilled, (state, action) => {
                state.Article = action.payload;
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

            //getIdOfAricle___________________________________________
            .addCase(getIdOfAricle.fulfilled, (state, action) => {
                state.id = action.payload;
            })
            // טיפול במצב בו הפעולה התחילה אבל טרם הסתיימה
            .addCase(getIdOfAricle.pending, (state) => {
                // הגדרת מצב הטעינה כ-true כדי להציג אינדיקציית טעינה למשתמש
                state.loading = true;
                // איפוס הודעת השגיאה למקרה בו הייתה שגיאה קודם
                state.error = null;
            })

            // טיפול במצב בו הפעולה נכשלה
            .addCase(getIdOfAricle.rejected, (state, action) => {
                // שינוי מצב הטעינה ל-false כדי להפסיק להציג מסך טעינה
                state.loading = false;
                // שמירת הודעת השגיאה במאפיין error כדי להציג למשתמש
                state.error = action.error.message;
            })

            //delete_______________________________________________
            .addCase(deleteAricle.fulfilled, (state, action) => {
                state.statuse = action.payload;
            })
            // טיפול במצב בו הפעולה התחילה אבל טרם הסתיימה
            .addCase(deleteAricle.pending, (state) => {
                // הגדרת מצב הטעינה כ-true כדי להציג אינדיקציית טעינה למשתמש
                state.loading = true;
                // איפוס הודעת השגיאה למקרה בו הייתה שגיאה קודם
                state.error = null;
            })

            // טיפול במצב בו הפעולה נכשלה
            .addCase(deleteAricle.rejected, (state, action) => {
                // שינוי מצב הטעינה ל-false כדי להפסיק להציג מסך טעינה
                state.loading = false;
                // שמירת הודעת השגיאה במאפיין error כדי להציג למשתמש
                state.error = action.error.message;
            })

            //update_________________________________________________
            .addCase(putAricle.fulfilled, (state, action) => {
                state.Article = action.payload;
            })
            // טיפול במצב בו הפעולה התחילה אבל טרם הסתיימה
            .addCase(putAricle.pending, (state) => {
                // הגדרת מצב הטעינה כ-true כדי להציג אינדיקציית טעינה למשתמש
                state.loading = true;
                // איפוס הודעת השגיאה למקרה בו הייתה שגיאה קודם
                state.error = null;
            })

            // טיפול במצב בו הפעולה נכשלה
            .addCase(putAricle.rejected, (state, action) => {
                // שינוי מצב הטעינה ל-false כדי להפסיק להציג מסך טעינה
                state.loading = false;
                // שמירת הודעת השגיאה במאפיין error כדי להציג למשתמש
                state.error = action.error.message;
            })

            //getDTO__________________________________________________________
            .addCase(getDTOAricle.fulfilled, (state, action) => {
                state.ArticleList = action.payload;
            })
            // טיפול במצב בו הפעולה התחילה אבל טרם הסתיימה
            .addCase(getDTOAricle.pending, (state) => {
                // הגדרת מצב הטעינה כ-true כדי להציג אינדיקציית טעינה למשתמש
                state.loading = true;
                // איפוס הודעת השגיאה למקרה בו הייתה שגיאה קודם
                state.error = null;
            })

            // טיפול במצב בו הפעולה נכשלה
            .addCase(getDTOAricle.rejected, (state, action) => {
                // שינוי מצב הטעינה ל-false כדי להפסיק להציג מסך טעינה
                state.loading = false;
                // שמירת הודעת השגיאה במאפיין error כדי להציג למשתמש
                state.error = action.error.message;
            })
    }
})

export default ArticleSlice.reducer;

