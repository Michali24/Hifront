import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getAllJoiningMeetup, postJoiningMeetup, getJoiningMeetupById } from '../services/JoiningMeetupService';

//get all
export const getAllJoiningMeetupList = createAsyncThunk("joiningMeetupList/getAllJoiningMeetupList", async () => {
    const JoiningMeetupDataList = await getAllJoiningMeetup();
    return JoiningMeetupDataList;
});

//get Joining Meetup By MeetupScheduleId
export const getJoiningMeetupByMeetupScheduleid = createAsyncThunk("joiningMeetupList/getJoiningMeetupByMeetupScheduleid", async (id) => {
    const joiningMeetupDataByMeetupScheduleId = await getJoiningMeetupByMeetupScheduleId(id);
    return joiningMeetupDataByMeetupScheduleId;
});

export const getJoiningMeetupByid = createAsyncThunk("joiningMeetup/getJoiningMeetupByid", async (id) => {
    const joiningMeetupById = await getJoiningMeetupById(id);
    return joiningMeetupById;
});
//add
export const addJoiningMeetupList = createAsyncThunk("joiningMeetup/addJoiningMeetupList", async (newJoiningMeetup) => {
    const JoiningMeetupData = await postJoiningMeetup(newJoiningMeetup);
    return JoiningMeetupData;
});



export const JoiningMeetupSlice = createSlice({
    name: 'joiningMeetup',
    initialState: {
        joiningMeetupList: [],
        joiningMeetup: {},
        loading: false,
        error: null,
        statuse: ''
    },
    reducers: {},
    extraReducers: (builder) => {
        builder

            //all joiningMeetup________________________________________________________________________
            .addCase(getAllJoiningMeetupList.fulfilled, (state, action) => {
                state.joiningMeetupList = action.payload;
            })

            // טיפול במצב בו הפעולה התחילה אבל טרם הסתיימה
            .addCase(getAllJoiningMeetupList.pending, (state) => {
                // הגדרת מצב הטעינה כ-true כדי להציג אינדיקציית טעינה למשתמש
                state.loading = true;
                // איפוס הודעת השגיאה למקרה בו הייתה שגיאה קודם
                state.error = null;
            })

            // טיפול במצב בו הפעולה נכשלה
            .addCase(getAllJoiningMeetupList.rejected, (state, action) => {
                // שינוי מצב הטעינה ל-false כדי להפסיק להציג מסך טעינה
                state.loading = false;
                // שמירת הודעת השגיאה במאפיין error כדי להציג למשתמש
                state.error = action.error.message;
            })

            //get Joining Meetup By MeetupScheduleId________________________________________________________________________
            .addCase(getJoiningMeetupByMeetupScheduleid.fulfilled, (state, action) => {
                state.joiningMeetupList = action.payload;
            })

            // טיפול במצב בו הפעולה התחילה אבל טרם הסתיימה
            .addCase(getJoiningMeetupByMeetupScheduleid.pending, (state) => {
                // הגדרת מצב הטעינה כ-true כדי להציג אינדיקציית טעינה למשתמש
                state.loading = true;
                // איפוס הודעת השגיאה למקרה בו הייתה שגיאה קודם
                state.error = null;
            })

            // טיפול במצב בו הפעולה נכשלה
            .addCase(getJoiningMeetupByMeetupScheduleid.rejected, (state, action) => {
                // שינוי מצב הטעינה ל-false כדי להפסיק להציג מסך טעינה
                state.loading = false;
                // שמירת הודעת השגיאה במאפיין error כדי להציג למשתמש
                state.error = action.error.message;
            })

            //get Joining Meetup Id________________________________________________________________________
            .addCase(getJoiningMeetupByid.fulfilled, (state, action) => {
                state.joiningMeetup = action.payload;
            })

            // טיפול במצב בו הפעולה התחילה אבל טרם הסתיימה
            .addCase(getJoiningMeetupByid.pending, (state) => {
                // הגדרת מצב הטעינה כ-true כדי להציג אינדיקציית טעינה למשתמש
                state.loading = true;
                // איפוס הודעת השגיאה למקרה בו הייתה שגיאה קודם
                state.error = null;
            })

            // טיפול במצב בו הפעולה נכשלה
            .addCase(getJoiningMeetupByid.rejected, (state, action) => {
                // שינוי מצב הטעינה ל-false כדי להפסיק להציג מסך טעינה
                state.loading = false;
                // שמירת הודעת השגיאה במאפיין error כדי להציג למשתמש
                state.error = action.error.message;
            })

            //add joiningMeetup_____________________________________________________________________
            .addCase(addJoiningMeetupList.fulfilled, (state, action) => {
                state.joiningMeetup = action.payload;
            })

            // טיפול במצב בו הפעולה התחילה אבל טרם הסתיימה
            .addCase(addJoiningMeetupList.pending, (state) => {
                // הגדרת מצב הטעינה כ-true כדי להציג אינדיקציית טעינה למשתמש
                state.loading = true;
                // איפוס הודעת השגיאה למקרה בו הייתה שגיאה קודם
                state.error = null;
            })

            // טיפול במצב בו הפעולה נכשלה
            .addCase(addJoiningMeetupList.rejected, (state, action) => {
                // שינוי מצב הטעינה ל-false כדי להפסיק להציג מסך טעינה
                state.loading = false;
                // שמירת הודעת השגיאה במאפיין error כדי להציג למשתמש
                state.error = action.error.message;
            })
    }
})

export default JoiningMeetupSlice.reducer;

