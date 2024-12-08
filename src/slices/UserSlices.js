//תיקון נוסף-2
//4-12-24
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getUserByID, addUser, LogIn, getAllUsers } from '../services/UserService';

export const getUserById = createAsyncThunk("user/getUserById", async (userId) => {
    const UserByIdData = await getUserByID(userId);
    return UserByIdData;
});

export const postUser = createAsyncThunk("user/postUser", async (User) => {
    const postUserData = await addUser(User);
    return postUserData;
});

export const LogInUser = createAsyncThunk("user/LogInUser", async (User) => {
    const LogInData = await LogIn(User);
    return LogInData;
});

export const getListUsers = createAsyncThunk("user/getListUsers", async () => {
    const ListUsersData = await getAllUsers();
    return ListUsersData;
});

export const UserSlice = createSlice({
    name: 'user',
    initialState: {
        currentUser: {
            id: null,
            name: '',
        },
        auth: {
            isLoggedIn: false,
            loading: false,
            error: null,
        },
    },
    reducers: {
        setCurrent: (state, action) => {
            state.currentUser = action.payload;
            state.isLoggedIn = true;
        },
        logoutUser: (state) => {
            state.currentUser = {};
            state.isLoggedIn = false;
        },
        setUser: (state, action) => {
            state.currentUser = { ...state.currentUser, ...action.payload };
        },
    },
    extraReducers: (builder) => {
        builder
            // טיפול ב-LogInUser
            .addCase(LogInUser.pending, (state) => {
                state.auth.loading = true;
                state.auth.error = null;
            })
            .addCase(LogInUser.fulfilled, (state, action) => {
                state.auth.loading = false;
                state.currentUser = action.payload;
                state.auth.isLoggedIn = true;
            })
            .addCase(LogInUser.rejected, (state, action) => {
                state.auth.loading = false;
                state.auth.error = action.error.message;
            })
    }
});

export const { setCurrent, logoutUser } = UserSlice.actions;
export default UserSlice.reducer;


// //GPT-----------------1-<<-4-12-24
// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import { getUserByID, addUser, LogIn, getAllUsers } from '../services/UserService';
// import { act } from "react";

// // createAsyncThunk עם await
// export const getUserById = createAsyncThunk("user/getUserById", async (userId) => {
//     const UserByIdData = await getUserByID(userId);
//     return UserByIdData;
// });

// export const postUser = createAsyncThunk("user/postUser", async (User) => {
//     const postUserData = await addUser(User);
//     return postUserData;
// });

// export const LogInUser = createAsyncThunk("user/LogInUser", async (User) => {
//     const LogInData = await LogIn(User);
//     return LogInData;
// });

// export const getListUsers = createAsyncThunk("user/getListUsers", async () => {
//     const ListUsersData = await getAllUsers();
//     return ListUsersData;
// });

// export const UserSlice = createSlice({
//     name: 'user',
//     initialState: {
//         currentUser: {
//             id: null,
//             name: '',
//             // ניתן להוסיף מידע נוסף על המשתמש במידת הצורך
//         },
//         auth: {
//             isLoggedIn: false,
//             loading: false,
//             error: null,
//         },
//     },

//     reducers: {
//         setCurrent:(state,action)=>{
//             state.currentUser=action.payload;
//             state.isLoggedIn=true;
//         },
//         logoutUser:(state)=>{
//             state.currentUser={};
//             state.isLoggedIn=false;
//         },
//         setUser:(state,action)=>{
//             state.currentUser={...state.currentUser,
//                 ...action.payload
//             };//שילוב ערכים
//         }
//     },
//     extraReducers: (builder) => {
//         builder
//             // טיפול ב-getUserById_______________________________________________
//             .addCase(getUserById.pending, (state) => {
//                 state.auth.loading = true;
//                 state.auth.error = null;
//             })
//             .addCase(getUserById.fulfilled, (state, action) => {
//                 state.auth.loading = false;
//                 state.User = action.payload;
//                 state.auth.isLoggedIn = true;
//             })
//             .addCase(getUserById.rejected, (state, action) => {
//                 state.auth.loading = false;
//                 state.auth.error = action.error.message;
//             })

//             // טיפול ב-postUser (הרשמה)_______________________________________________
//             .addCase(postUser.pending, (state) => {
//                 state.auth.loading = true;
//                 state.auth.error = null;
//             })
//             .addCase(postUser.fulfilled, (state, action) => {
//                 state.auth.loading = false;
//                 state.user = action.payload;
//                 state.auth.isLoggedIn = true;
//             })
//             .addCase(postUser.rejected, (state, action) => {
//                 state.auth.loading = false;
//                 state.auth.error = action.error.message;
//             })
//             //LogIn___________________________________________________________________
//             .addCase(LogInUser.fulfilled, (state, action) => {
//                 state.currentUser = action.payload;
//             })

//             // טיפול במצב בו הפעולה התחילה אבל טרם הסתיימה
//             .addCase(LogInUser.pending, (state) => {
//                 // הגדרת מצב הטעינה כ-true כדי להציג אינדיקציית טעינה למשתמש
//                 state.loading = true;
//                 // איפוס הודעת השגיאה למקרה בו הייתה שגיאה קודם
//                 state.error = null;
//             })

//             // טיפול במצב בו הפעולה נכשלה
//             .addCase(LogInUser.rejected, (state, action) => {
//                 // שינוי מצב הטעינה ל-false כדי להפסיק להציג מסך טעינה
//                 state.loading = false;
//                 // שמירת הודעת השגיאה במאפיין error כדי להציג למשתמש
//                 state.error = action.error.message;
//             })

//             //get ALL-List Users_________________________________________
//             .addCase(getListUsers.fulfilled, (state, action) => {
//                 state.UserList = action.payload;
//             })

//             // טיפול במצב בו הפעולה התחילה אבל טרם הסתיימה
//             .addCase(getListUsers.pending, (state) => {
//                 // הגדרת מצב הטעינה כ-true כדי להציג אינדיקציית טעינה למשתמש
//                 state.loading = true;
//                 // איפוס הודעת השגיאה למקרה בו הייתה שגיאה קודם
//                 state.error = null;
//             })

//             // טיפול במצב בו הפעולה נכשלה
//             .addCase(getListUsers.rejected, (state, action) => {
//                 // שינוי מצב הטעינה ל-false כדי להפסיק להציג מסך טעינה
//                 state.loading = false;
//                 // שמירת הודעת השגיאה במאפיין error כדי להציג למשתמש
//                 state.error = action.error.message;
//             })
//     }
// });

// export const{setCurrent,logoutUser}=UserSlice.actions;
// export default UserSlice.reducer;



// //GPT-----------------
// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import { getUserByID, addUser, LogIn, getAllUsers } from '../services/UserService';

// // createAsyncThunk עם await
// export const getUserById = createAsyncThunk("user/getUserById", async (userId) => {
//     const UserByIdData = await getUserByID(userId);
//     return UserByIdData;
// });

// export const postUser = createAsyncThunk("user/postUser", async (User) => {
//     const postUserData = await addUser(User);
//     return postUserData;
// });

// export const LogInUser = createAsyncThunk("user/LogInUser", async (User) => {
//     const LogInData = await LogIn(User);
//     return LogInData;
// });

// export const getListUsers = createAsyncThunk("user/getListUsers", async () => {
//     const ListUsersData = await getAllUsers();
//     return ListUsersData;
// });

// export const UserSlice = createSlice({
//     name: 'user',
//     initialState: {
//         currentUser: {
//             id: null,
//             name: '',
//             // ניתן להוסיף מידע נוסף על המשתמש במידת הצורך
//         },
//         auth: {
//             isLoggedIn: false,
//             loading: false,
//             error: null,
//         },
//     },

//     reducers: {},
//     extraReducers: (builder) => {
//         builder
//             // טיפול ב-getUserById_______________________________________________
//             .addCase(getUserById.pending, (state) => {
//                 state.auth.loading = true;
//                 state.auth.error = null;
//             })
//             .addCase(getUserById.fulfilled, (state, action) => {
//                 state.auth.loading = false;
//                 state.User = action.payload;
//                 state.auth.isLoggedIn = true;
//             })
//             .addCase(getUserById.rejected, (state, action) => {
//                 state.auth.loading = false;
//                 state.auth.error = action.error.message;
//             })

//             // טיפול ב-postUser (הרשמה)_______________________________________________
//             .addCase(postUser.pending, (state) => {
//                 state.auth.loading = true;
//                 state.auth.error = null;
//             })
//             .addCase(postUser.fulfilled, (state, action) => {
//                 state.auth.loading = false;
//                 state.user = action.payload;
//                 state.auth.isLoggedIn = true;
//             })
//             .addCase(postUser.rejected, (state, action) => {
//                 state.auth.loading = false;
//                 state.auth.error = action.error.message;
//             })
//             //LogIn___________________________________________________________________
//             .addCase(LogInUser.fulfilled, (state, action) => {
//                 state.currentUser = action.payload;
//             })

//             // טיפול במצב בו הפעולה התחילה אבל טרם הסתיימה
//             .addCase(LogInUser.pending, (state) => {
//                 // הגדרת מצב הטעינה כ-true כדי להציג אינדיקציית טעינה למשתמש
//                 state.loading = true;
//                 // איפוס הודעת השגיאה למקרה בו הייתה שגיאה קודם
//                 state.error = null;
//             })

//             // טיפול במצב בו הפעולה נכשלה
//             .addCase(LogInUser.rejected, (state, action) => {
//                 // שינוי מצב הטעינה ל-false כדי להפסיק להציג מסך טעינה
//                 state.loading = false;
//                 // שמירת הודעת השגיאה במאפיין error כדי להציג למשתמש
//                 state.error = action.error.message;
//             })

//             //get ALL-List Users_________________________________________
//             .addCase(getListUsers.fulfilled, (state, action) => {
//                 state.UserList = action.payload;
//             })

//             // טיפול במצב בו הפעולה התחילה אבל טרם הסתיימה
//             .addCase(getListUsers.pending, (state) => {
//                 // הגדרת מצב הטעינה כ-true כדי להציג אינדיקציית טעינה למשתמש
//                 state.loading = true;
//                 // איפוס הודעת השגיאה למקרה בו הייתה שגיאה קודם
//                 state.error = null;
//             })

//             // טיפול במצב בו הפעולה נכשלה
//             .addCase(getListUsers.rejected, (state, action) => {
//                 // שינוי מצב הטעינה ל-false כדי להפסיק להציג מסך טעינה
//                 state.loading = false;
//                 // שמירת הודעת השגיאה במאפיין error כדי להציג למשתמש
//                 state.error = action.error.message;
//             })
//     }
// });

// export default UserSlice.reducer;
