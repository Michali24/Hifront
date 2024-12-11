import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getListMeetup, getByIdMeetup, updateMeetup, postMeetup, getLastMeetup } from '../services/UpcomingMeetupService';

//get all
export const getMeetupList = createAsyncThunk("meetupList/getMeetupList", async () => {
    const MeetupData = await getListMeetup();
    return MeetupData;
});

//get by id
export const getByIdfMeetup = createAsyncThunk("meetupById/getByIdfMeetup", async (id) => {
    const MeetupDataById = await getByIdMeetup(id);
    return MeetupDataById;
});

//get last meetup
export const getMeetupLast = createAsyncThunk("lastMeetup/getMeetupLast", async () => {
    const MeetupDataLast = await getLastMeetup();
    return MeetupDataLast;
});

//post
export const addMeetup = createAsyncThunk("meetupById/postMeetup", async (newMeetup) => {
    const MeetupDataAdd = await postMeetup(newMeetup);
    return MeetupDataAdd;
});

//update
export const putMeetup = createAsyncThunk("meetupById/putMeetup", async (id) => {
    const MeetupDataPut = await updateMeetup(id);
    return MeetupDataPut;
});




export const UpcomingMeetupeSlice = createSlice({
    name: 'meetup',
    initialState: {
        meetupList: [],
        meetupById: {},
        lastMeetup: {},
        loading: false,
        error: null,
        statuse: ''
    },
    reducers: {},
    extraReducers: (builder) => {
        builder

            //getAll__________________________________________________________________
            .addCase(getMeetupList.fulfilled, (state, action) => {
                state.meetupList = action.payload;
            })
            .addCase(getMeetupList.pending, (state) => {
                state.loading = true;
                state.error = null;
            })

            .addCase(getMeetupList.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })

            //getById__________________________________________________________________
            .addCase(getByIdfMeetup.fulfilled, (state, action) => {
                state.meetupById = action.payload;
            })
            .addCase(getByIdfMeetup.pending, (state) => {
                state.loading = true;
                state.error = null;
            })

            .addCase(getByIdfMeetup.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })

            //getpostMeetup__________________________________________________________________
            .addCase(addMeetup.fulfilled, (state, action) => {
                state.meetupById = action.payload;
            })
            .addCase(addMeetup.pending, (state) => {
                state.loading = true;
                state.error = null;
            })

            .addCase(addMeetup.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })


            //getputMeetup__________________________________________________________________
            .addCase(putMeetup.fulfilled, (state, action) => {
                state.meetupById = action.payload;
            })
            .addCase(putMeetup.pending, (state) => {
                state.loading = true;
                state.error = null;
            })

            .addCase(putMeetup.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })

            //getLastMeetup__________________________________________________________________
            .addCase(getMeetupLast.fulfilled, (state, action) => {
                state.lastMeetup = action.payload;
            })
            .addCase(getMeetupLast.pending, (state) => {
                state.loading = true;
                state.error = null;
            })

            .addCase(getMeetupLast.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })

    }
})

export default UpcomingMeetupeSlice.reducer;