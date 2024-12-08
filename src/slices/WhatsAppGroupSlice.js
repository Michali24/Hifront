import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getAllWhatsAppGroup, addWhatsAppGroup, getByIdWhatsAppGroup } from '../services/WhatsAppGroupService';

//get all
export const getAllWhatsAppGroupList = createAsyncThunk("whatsAppGroupList/getAllWhatsAppGroupList", async () => {
    const whatsAppGroupDataList = await getAllWhatsAppGroup();
    return whatsAppGroupDataList;
});

//get by id
export const getByIdlGroupWhatsApp = createAsyncThunk("whatsAppGroup/getByIdlGroupWhatsApp", async (id) => {
    const whatsAppGroupData = await getByIdWhatsAppGroup(id);
    return whatsAppGroupData;
});

//post
export const postWhatsAppGroup = createAsyncThunk("whatsAppGroup/postWhatsAppGroup", async (newWhatsAppGroup) => {
    const whatsAppGroupData = await addWhatsAppGroup(newWhatsAppGroup);
    return whatsAppGroupData;
});


export const WhatsAppGroupSlice = createSlice({
    name: 'whatsAppGroup',
    initialState: {
        whatsAppGroupList: [],
        whatsAppGroup: {},
        loading: false,
        error: null,
        statuse: ''
    },
    reducers: {},
    extraReducers: (builder) => {
        builder

            //all WhatsAppGroup_____________________________________________________________________
            .addCase(getAllWhatsAppGroupList.fulfilled, (state, action) => {
                state.whatsAppGroupList = action.payload;
            })

            // טיפול במצב בו הפעולה התחילה אבל טרם הסתיימה
            .addCase(getAllWhatsAppGroupList.pending, (state) => {
                // הגדרת מצב הטעינה כ-true כדי להציג אינדיקציית טעינה למשתמש
                state.loading = true;
                // איפוס הודעת השגיאה למקרה בו הייתה שגיאה קודם
                state.error = null;
            })

            // טיפול במצב בו הפעולה נכשלה
            .addCase(getAllWhatsAppGroupList.rejected, (state, action) => {
                // שינוי מצב הטעינה ל-false כדי להפסיק להציג מסך טעינה
                state.loading = false;
                // שמירת הודעת השגיאה במאפיין error כדי להציג למשתמש
                state.error = action.error.message;
            })

            //get by id WhatsAppGroup_____________________________________________________________________
            .addCase(getByIdlGroupWhatsApp.fulfilled, (state, action) => {
                state.whatsAppGroup = action.payload;
            })

            // טיפול במצב בו הפעולה התחילה אבל טרם הסתיימה
            .addCase(getByIdlGroupWhatsApp.pending, (state) => {
                // הגדרת מצב הטעינה כ-true כדי להציג אינדיקציית טעינה למשתמש
                state.loading = true;
                // איפוס הודעת השגיאה למקרה בו הייתה שגיאה קודם
                state.error = null;
            })

            // טיפול במצב בו הפעולה נכשלה
            .addCase(getByIdlGroupWhatsApp.rejected, (state, action) => {
                // שינוי מצב הטעינה ל-false כדי להפסיק להציג מסך טעינה
                state.loading = false;
                // שמירת הודעת השגיאה במאפיין error כדי להציג למשתמש
                state.error = action.error.message;
            })

            //post WhatsAppGroup_____________________________________________________________________
            .addCase(postWhatsAppGroup.fulfilled, (state, action) => {
                state.whatsAppGroup = action.payload;
            })

            // טיפול במצב בו הפעולה התחילה אבל טרם הסתיימה
            .addCase(postWhatsAppGroup.pending, (state) => {
                // הגדרת מצב הטעינה כ-true כדי להציג אינדיקציית טעינה למשתמש
                state.loading = true;
                // איפוס הודעת השגיאה למקרה בו הייתה שגיאה קודם
                state.error = null;
            })

            // טיפול במצב בו הפעולה נכשלה
            .addCase(postWhatsAppGroup.rejected, (state, action) => {
                // שינוי מצב הטעינה ל-false כדי להפסיק להציג מסך טעינה
                state.loading = false;
                // שמירת הודעת השגיאה במאפיין error כדי להציג למשתמש
                state.error = action.error.message;
            })
    }
})

export default WhatsAppGroupSlice.reducer;
