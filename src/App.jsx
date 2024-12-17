import './App.css';

import { Route, Routes } from 'react-router-dom';
//componnets...
import Article from './componets/Article/ArticleList';
import CategoryArticle from './componets/Article/CategoryArticleList';
import DetailArticle from './componets/Article/DetailArticle';
import RequestToAddAnArticle from './componets/Article/RequestToAddAnArticle';
import RequestToAddArticleList from './componets/Manager/RequestToAddArticleList';
import Login from './componets/User/Login';
import SignUp from './componets/User/SignUp';
import DetailRequsetArticle from './componets/Manager/DetailRequsetArticle';
import NewMeetup from './componets/UpcomingMeetup/NewMeetup';
import AddNewMeetup from './componets/UpcomingMeetup/AddNewMeetup';
import Home from './componets/Home/Home'
import WhatsAppGroup from './componets/WhatsAppGroup/WhatsAppGroup';
import SignUpForTheWhatsAppGroup from './componets/WhatsAppGroup/SignUpForTheWhatsAppGroup';
import JoiningMeetup from './componets/UpcomingMeetup/JoiningMeetup';
import MeetupRegistrationRequests from './componets/UpcomingMeetup/MeetupRegistrationRequests';
import GalleryCategoryList from './componets/FileMeetup/GalleryCategoryList';
import FileMeetupDetail from './componets/FileMeetup/FileMeetupDetail';
import AddGalleryCategory from './componets/Manager/AddGalleryCategory';
import AddFileMeetup from './componets/Manager/AddFileMeetup';
import AboutUs from './componets/Home/AboutUs';
import ViewMeetupRegistrant from './componets/UpcomingMeetup/ViewMeetupRegistrant';
import NavBar from './componets/NavBar/NavBar';
import Footer from './componets/Footer/Footer';
import Contact from './componets/Footer/Contact';


function App() {
  return (
    <>
      <NavBar />
      <div className='page-container'>
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/Home' element={<Home></Home>}></Route>
          <Route path='AboutUs' element={<AboutUs></AboutUs>}></Route>
          <Route path='SignUp' element={<SignUp></SignUp>}></Route>
          <Route path='Login' element={<Login></Login>}></Route>
          <Route path='CateforyArticle' element={<CategoryArticle></CategoryArticle>}></Route>
          <Route path='Article/:id' element={<Article></Article>}></Route>
          <Route path='Detailes/:id' element={<DetailArticle></DetailArticle>}></Route>
          <Route path='RequestToAddAnArticle' element={<RequestToAddAnArticle></RequestToAddAnArticle>}></Route>
          <Route path='/RequestToAddArticleList' element={<RequestToAddArticleList></RequestToAddArticleList>}></Route>
          <Route path="/RequestToAddArticleList/DetailRequestArticle/:articleId/:categoryId" element={<DetailRequsetArticle />} />
          <Route path='NewMeetup' element={<NewMeetup></NewMeetup>}></Route>
          <Route path='AddNewMeetup' element={<AddNewMeetup></AddNewMeetup>}></Route>
          <Route path='WhatsAppGroup' element={<WhatsAppGroup></WhatsAppGroup>}></Route>
          <Route path='SignUpForTheWhatsAppGroup/:id' element={<SignUpForTheWhatsAppGroup></SignUpForTheWhatsAppGroup>}></Route>
          {/* <Route path='JoiningMeetup' element={<JoiningMeetup></JoiningMeetup>}></Route> */}
          <Route path='JoiningMeetup/:id' element={<JoiningMeetup></JoiningMeetup>}></Route>
          <Route path='MeetupRegistrationRequests' element={<MeetupRegistrationRequests></MeetupRegistrationRequests>}></Route>
          <Route path='GalleryCategoryList' element={<GalleryCategoryList></GalleryCategoryList>}></Route>
          <Route path='FileMeetupDetail/:id' element={<FileMeetupDetail></FileMeetupDetail>}></Route>
          <Route path="GalleryCategoryList/FileMeetupDetail/:id" element={<FileMeetupDetail></FileMeetupDetail>}></Route>
          <Route path='AddGalleryCategory' element={<AddGalleryCategory></AddGalleryCategory>}></Route>
          {/* <Route path='AddFileMeetup' element={<AddFileMeetup></AddFileMeetup>}></Route> */}
          <Route path='AddFileMeetup/:id' element={<AddFileMeetup></AddFileMeetup>}></Route>
          <Route path='ViewMeetupRegistrant/:id' element={<ViewMeetupRegistrant></ViewMeetupRegistrant>}></Route>
          <Route path='Contact' element={<Contact></Contact>}></Route>

        </Routes>
      </div>
      <Footer />
    </>
  )
}

export default App
