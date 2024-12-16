// //שיוינ גודל תצוגת הסרטון
// import React, { useEffect, useRef, useState } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { getAllArticleList } from '../../slices/ArticleSlice';
// import { getAllFileMeeetupList } from '../../slices/FileMeetupSlice';
// import '@fontsource/dancing-script';
// import { Box, Card, CardContent, Typography, Grid } from '@mui/material';
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import './Home.css';

// export default function Home() {
//   const dispatch = useDispatch();
//   const articleList = useSelector((state) => state.article.ArticleList);
//   const fileMeetupList = useSelector((state) => state.fileMeetup.fileMeetupList);
//   const [isAdmin, setIsAdmin] = useState(false);
//   const [imageFiles, setImageFiles] = useState([]);
//   const [videoFiles, setVideoFiles] = useState([]);
//   const videoRef = useRef(null);

//   useEffect(() => {
//     const adminStatus = localStorage.getItem('isAdmin');
//     if (adminStatus === 'true') {
//       setIsAdmin(true);
//     }
//     dispatch(getAllArticleList());
//     dispatch(getAllFileMeeetupList());
//   }, [dispatch]);

//   useEffect(() => {
//     const images = fileMeetupList.filter((file) => file.typeFile === 'image');
//     const videos = fileMeetupList.filter((file) => file.typeFile === 'video');
//     setImageFiles(images.sort(() => Math.random() - 0.5)); // מיקסוס רנדומלי של התמונות
//     setVideoFiles(videos);
//   }, [fileMeetupList]);

//   useEffect(() => {
//     const intervalId = setInterval(() => {
//       if (videoRef.current) {
//         videoRef.current.currentTime = 0; // מחזיר את הסרטון להתחלה
//         videoRef.current.play(); // מתחיל את הסרטון
//       }
//     }, 1000000000); // כל 5 שניות

//     return () => clearInterval(intervalId); // לא לשכוח לנקות את ה-interval כשתרצה להפסיק
//   }, []);

//   const sliderSettings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 3000,
//     arrows: true,
//     adaptiveHeight: true,
//   };

//   return (
//     <div className="ContentContainer">      
//       <div className="hero-image-container">
//       </div>
//       <div className="welcome-info-conainer">
//         <img src="/public/images/welcome-info-image.jpg" className="welcome-image"></img>
//         <div className="welcome-text">
//           <p>Welcome to our technology learning hub Hitechistim!</p>
//           <p>Dive into a world of knowledge with our expertly crafted courses designed for beginners and professionals alike.</p>
//           <p>Whether you're looking to master coding, explore data science, or understand the latest</p>
//           <p>in cybersecurity, our comprehensive courses have you covered.</p>
//           <p>Learn at your own pace, with hands-on projects and real-world applications.</p>
//           <p>Our experienced instructors are here to guide you every step of the way.</p>
//           <p>Join our vibrant community of learners and stay ahead in the fast-evolving tech landscape.</p>
//           <p>Your journey to tech mastery starts here!"</p>
//         </div>
//       </div>
//       <div className="carousel-container">
//         {imageFiles.length > 0 ? (
//           <Slider {...sliderSettings}>
//             {imageFiles.map((file, index) => (
//               <Box key={index} sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
//                 <img
//                   src={`data:image/jpeg;base64,${file.fileData}`}
//                   alt={`Slide ${index + 1}`}
//                   style={{
//                     width: "100%",
//                     objectFit: "cover",
//                     borderRadius: "10px",
//                     boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
//                     padding: "1rem",
//                   }}
//                 />
//               </Box>
//             ))}
//           </Slider>
//         ) : (
//           <Typography variant="body1" sx={{ textAlign: "center" }}>
//             No images available to display.
//           </Typography>
//         )}
//       </div>
//       <div className="articles-container">
//         <div className="articles-title">
//           <Typography variant="h4" component="div" gutterBottom sx={{ paddingBottom: 0, fontFamily: '"Great Vibes", cursive' }}>
//             New Article on Hitechistim:
//           </Typography>
//         </div>
//         <div className="articles-grid">
//           {articleList.slice().reverse().slice(0, 5).map((article) => (
//             <Card key={article.id} sx={{ maxWidth: 346 }}>
//               <CardContent>
//                 <Typography variant="body2" color="text.secondary">
//                   <span>
//                     <strong style={{ color: '#007bff' }}>Article name:</strong>
//                     <strong style={{ color: '#007bff' }}> {article.title}</strong>
//                     <strong style={{ color: '#007bff' }}>{article.author}</strong>
//                   </span>
//                   <div>Description of the course: {article.description}</div>
//                 </Typography>
//               </CardContent>
//             </Card>
//           ))}
//         </div>
//       </div>

//       {/* <Box sx={{ marginBottom: 4, display: "flex", justifyContent: "center", alignItems: "center" }}>
//         <video
//           ref={videoRef}
//           width="70%" // שינוי רוחב הווידאו ל-70% (תוכל לשנות לפי הצורך)
//           height="auto"
//           controls
//           // autoPlay
//           loop
//           muted
//           style={{
//             maxWidth: "600px", // קביעת רוחב מקסימלי
//             borderRadius: "10px",
//             boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
//           }}
//         >
//           <source src="/vidoe/iconVideo.mp4" type="video/mp4" />
//           Your browser does not support the video tag.
//         </video>
//       </Box> */}

//       {/* קרוסלת תמונות */}
//       {/* <Box sx={{ maxWidth: "800px", margin: "0 auto", padding: 3, marginTop: 7 }}>
//         {imageFiles.length > 0 ? (
//           <Slider {...sliderSettings}>
//             {imageFiles.map((file, index) => (
//               <Box key={index} sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
//                 <img
//                   src={`data:image/jpeg;base64,${file.fileData}`}
//                   alt={`Slide ${index + 1}`}
//                   style={{
//                     width: "100%",
//                     height: "400px",
//                     objectFit: "cover",
//                     borderRadius: "10px",
//                     boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
//                   }}
//                 />
//               </Box>
//             ))}
//           </Slider>
//         ) : (
//           <Typography variant="body1" sx={{ textAlign: "center" }}>
//             No images available to display.
//           </Typography>
//         )}
//       </Box> */}

//       {/* <div style={{ margin: '115px', fontSize: '16px', fontFamily: 'cursive', height: '30vh', padding: '300px 118px 170px 100px', position: 'absolute', bottom: '0', left: '-80px', textAlign: 'left', color: 'black', marginTop: '50px' }}>
//         <p>"Welcome to our technology learning hub Hitechistim!</p>
//         <p>Dive into a world of knowledge with our expertly crafted courses designed for beginners and professionals alike.</p>
//         <p>Whether you're looking to master coding, explore data science, or understand the latest</p>
//         <p>in cybersecurity, our comprehensive courses have you covered.</p>
//         <p>Learn at your own pace, with hands-on projects and real-world applications.</p>
//         <p>Our experienced instructors are here to guide you every step of the way.</p>
//         <p>Join our vibrant community of learners and stay ahead in the fast-evolving tech landscape.</p>
//         <p>Your journey to tech mastery starts here!"</p>
//       </div> */}

//       {/* <hr style={{ borderTop: '2px solid purple', margin: '20px 0' }} />
//       <div className="MainImage" /> */}
//       {/* <div className="SecondaryBackground">
//         <Box sx={{ position: 'relative', zIndex: 1, padding: '20px', width: '100%', paddingBottom: 2 }}>
//           <Typography variant="h4" component="div" gutterBottom sx={{ paddingBottom: 0, fontFamily: '"Great Vibes", cursive' }}>
//             New Article on Hitechistim:
//           </Typography>
//           <Typography variant="body1" component="div" sx={{ paddingBottom: 7, fontFamily: '"Great Vibes", cursive' }}></Typography>

//           <Grid container spacing={2} className="CourseList">
//             {articleList.slice().reverse().slice(0, 5).map((article) => (
//               <Grid item key={article.id} sx={{ paddingBottom: 6 }}>
//                 <Card sx={{ maxWidth: 346 }}>
//                   <CardContent>
//                     <Typography variant="body2" color="text.secondary">
//                       <span>
//                         <strong style={{ color: '#007bff' }}>Article name:</strong>
//                         <strong style={{ color: '#007bff' }}> {article.title}</strong>
//                         <strong style={{ color: '#007bff' }}>{article.author}</strong>
//                       </span>
//                       <div>Description of the course: {article.description}</div>
//                     </Typography>
//                   </CardContent>
//                 </Card>
//               </Grid>
//             ))}
//           </Grid>
//         </Box>
//         <div style={{ marginBottom: '70px' }}></div>
//       </div>
//       <div className='TheradBackground'>
//       </div> */}
//     </div>
//   );
// }



//נסיום שלנות את הטקטס
//שיוינ גודל תצוגת הסרטון
import React, { useEffect, useRef, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAllArticleList } from '../../slices/ArticleSlice';
import { getAllFileMeeetupList } from '../../slices/FileMeetupSlice';
import '@fontsource/dancing-script';
import { Box, Card, CardContent, Typography, Grid } from '@mui/material';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Home.css';

export default function Home() {
  const dispatch = useDispatch();
  const articleList = useSelector((state) => state.article.ArticleList);
  const fileMeetupList = useSelector((state) => state.fileMeetup.fileMeetupList);
  const [isAdmin, setIsAdmin] = useState(false);
  const [imageFiles, setImageFiles] = useState([]);
  const [videoFiles, setVideoFiles] = useState([]);
  const videoRef = useRef(null);

  useEffect(() => {
    const adminStatus = localStorage.getItem('isAdmin');
    if (adminStatus === 'true') {
      setIsAdmin(true);
    }
    dispatch(getAllArticleList());
    dispatch(getAllFileMeeetupList());
  }, [dispatch]);

  useEffect(() => {
    const images = fileMeetupList.filter((file) => file.typeFile === 'image');
    const videos = fileMeetupList.filter((file) => file.typeFile === 'video');
    setImageFiles(images.sort(() => Math.random() - 0.5)); // מיקסוס רנדומלי של התמונות
    setVideoFiles(videos);
  }, [fileMeetupList]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (videoRef.current) {
        videoRef.current.currentTime = 0; // מחזיר את הסרטון להתחלה
        videoRef.current.play(); // מתחיל את הסרטון
      }
    }, 1000000000); // כל 5 שניות

    return () => clearInterval(intervalId); // לא לשכוח לנקות את ה-interval כשתרצה להפסיק
  }, []);

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    adaptiveHeight: true,
  };

  return (
    <div className="ContentContainer">
      <div className="hero-image-container">
      </div>
      <div className="welcome-info-conainer">
        <img src="/public/images/welcome-info-image.jpg" className="welcome-image"></img>
        <div className="welcome-text">
          <p>HiTechistim is Israel’s leading platform connecting tech professionals.</p>
          <p>Founded in 2017 by Gabriel Hakimi, we unify the knowledge, experience, </p>
          <p>and connections you need to thrive in the tech industry—all in Hebrew and at WhatsApp speed, for free.</p>
          <p>Join our specialized WhatsApp groups in fields like QA, Development, DevOps, Automation</p>
          <p> HR, and more to share insights, ask questions, and consult with experts.</p>
          <p>Access high-quality content, including professional articles, details on meetups and tech events, </p>
          <p>and participate in empowering meetups at Israel’s highest levels.</p>
          <p>Become part of a strong, collaborative community driving Israeli tech forward.</p>
          <p>HiTechistim—where knowledge, experience, and connections create meaningful solutions and lasting change!</p>
        </div>
      </div>
      <div className="carousel-container">
        {imageFiles.length > 0 ? (
          <Slider {...sliderSettings}>
            {imageFiles.map((file, index) => (
              <Box key={index} sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                <img
                  src={`data:image/jpeg;base64,${file.fileData}`}
                  alt={`Slide ${index + 1}`}
                  style={{
                    width: "100%",
                    objectFit: "cover",
                    borderRadius: "10px",
                    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                    padding: "1rem",
                  }}
                />
              </Box>
            ))}
          </Slider>
        ) : (
          <Typography variant="body1" sx={{ textAlign: "center" }}>
            No images available to display.
          </Typography>
        )}
      </div>
      <div className="articles-container">
        <div className="articles-title">
          <Typography variant="h4" component="div" gutterBottom sx={{ paddingBottom: 0, fontFamily: '"Great Vibes", cursive' }}>
            New Article on Hitechistim:
          </Typography>
        </div>
        <div className="articles-grid">
          {articleList.slice().reverse().slice(0, 5).map((article) => (
            <Card key={article.id} sx={{ maxWidth: 346 }}>
              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  <span>
                    <strong style={{ color: '#007bff' }}>Article name:</strong>
                    <strong style={{ color: '#007bff' }}> {article.title}</strong>
                    <strong style={{ color: '#007bff' }}>{article.author}</strong>
                  </span>
                  <div>Description of the course: {article.description}</div>
                </Typography>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* <Box sx={{ marginBottom: 4, display: "flex", justifyContent: "center", alignItems: "center" }}>
        <video
          ref={videoRef}
          width="70%" // שינוי רוחב הווידאו ל-70% (תוכל לשנות לפי הצורך)
          height="auto"
          controls
          // autoPlay
          loop
          muted
          style={{
            maxWidth: "600px", // קביעת רוחב מקסימלי
            borderRadius: "10px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
          }}
        >
          <source src="/vidoe/iconVideo.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </Box> */}

      {/* קרוסלת תמונות */}
      {/* <Box sx={{ maxWidth: "800px", margin: "0 auto", padding: 3, marginTop: 7 }}>
        {imageFiles.length > 0 ? (
          <Slider {...sliderSettings}>
            {imageFiles.map((file, index) => (
              <Box key={index} sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                <img
                  src={`data:image/jpeg;base64,${file.fileData}`}
                  alt={`Slide ${index + 1}`}
                  style={{
                    width: "100%",
                    height: "400px",
                    objectFit: "cover",
                    borderRadius: "10px",
                    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                  }}
                />
              </Box>
            ))}
          </Slider>
        ) : (
          <Typography variant="body1" sx={{ textAlign: "center" }}>
            No images available to display.
          </Typography>
        )}
      </Box> */}

      {/* <div style={{ margin: '115px', fontSize: '16px', fontFamily: 'cursive', height: '30vh', padding: '300px 118px 170px 100px', position: 'absolute', bottom: '0', left: '-80px', textAlign: 'left', color: 'black', marginTop: '50px' }}>
        <p>"Welcome to our technology learning hub Hitechistim!</p>
        <p>Dive into a world of knowledge with our expertly crafted courses designed for beginners and professionals alike.</p>
        <p>Whether you're looking to master coding, explore data science, or understand the latest</p>
        <p>in cybersecurity, our comprehensive courses have you covered.</p>
        <p>Learn at your own pace, with hands-on projects and real-world applications.</p>
        <p>Our experienced instructors are here to guide you every step of the way.</p>
        <p>Join our vibrant community of learners and stay ahead in the fast-evolving tech landscape.</p>
        <p>Your journey to tech mastery starts here!"</p>
      </div> */}

      {/* <hr style={{ borderTop: '2px solid purple', margin: '20px 0' }} />
      <div className="MainImage" /> */}
      {/* <div className="SecondaryBackground">
        <Box sx={{ position: 'relative', zIndex: 1, padding: '20px', width: '100%', paddingBottom: 2 }}>
          <Typography variant="h4" component="div" gutterBottom sx={{ paddingBottom: 0, fontFamily: '"Great Vibes", cursive' }}>
            New Article on Hitechistim:
          </Typography>
          <Typography variant="body1" component="div" sx={{ paddingBottom: 7, fontFamily: '"Great Vibes", cursive' }}></Typography>

          <Grid container spacing={2} className="CourseList">
            {articleList.slice().reverse().slice(0, 5).map((article) => (
              <Grid item key={article.id} sx={{ paddingBottom: 6 }}>
                <Card sx={{ maxWidth: 346 }}>
                  <CardContent>
                    <Typography variant="body2" color="text.secondary">
                      <span>
                        <strong style={{ color: '#007bff' }}>Article name:</strong>
                        <strong style={{ color: '#007bff' }}> {article.title}</strong>
                        <strong style={{ color: '#007bff' }}>{article.author}</strong>
                      </span>
                      <div>Description of the course: {article.description}</div>
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
        <div style={{ marginBottom: '70px' }}></div>
      </div>
      <div className='TheradBackground'>
      </div> */}
    </div>
  );
}