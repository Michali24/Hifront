import { configureStore } from '@reduxjs/toolkit';

//Article+CategoryArticle
import ArticleReducer from '../slices/ArticleSlice';
//AddArticle
import AddArticleReducer from '../slices/AddArticleSlice';
//User=LogIn+SignUp...
import UserReducer from '../slices/UserSlices';
//UpcomingMeetupe
import UpcomingMeetupeReducer from '../slices/UpcomingMeetupSlice';
//WhatsAppGroup
import WhatsAppGroupReducer from '../slices/WhatsAppGroupSlice';
//JoiningMeetup
import JoiningMeetupReducer from '../slices/JoiningMeetupSlice';
//FileMeetup+GalleryCategory
import FileMeetupReducer from '../slices/FileMeetupSlice';

// יצירת הסטור עם המידלוור ועם הרידוסר
export const store = configureStore({

    reducer: {
        article: ArticleReducer,
        AddArticle: AddArticleReducer,
        user: UserReducer,
        meetup: UpcomingMeetupeReducer,
        whatsAppGroup: WhatsAppGroupReducer,
        joiningMeetup: JoiningMeetupReducer,
        fileMeetup:FileMeetupReducer,

    },
});


