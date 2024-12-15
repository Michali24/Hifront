//GPT 25-11-24
// import React, { useEffect } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { deleteAricle,getarticleWithStatusFalse,putAricle} from '../../slices/ArticleSlice';
// import { useNavigate } from 'react-router-dom';

// export default function RequestToAddArticleList() {

//     const dispatch = useDispatch();
//     const navigate = useNavigate();

//     const RegisterArticleList = useSelector((state) => state.article.ArticleList);


//     console.log('id:', RegisterArticleList);

//     // useEffect(() => {
//     //     dispatch(getAllArticleList());
//     // }, [dispatch]);

//     useEffect(() => {
//         dispatch(getarticleWithStatusFalse());
//     }, [dispatch]);


//     function deleteRequsetArticle(id) {
//         console.log('try');
//         dispatch(deleteAricle(id));
//         console.log('sucseess');
//     };

//     return (
//         <>
//             <div>RequestToAddArticleList</div>
//             {RegisterArticleList && RegisterArticleList.length === 0 ? (
//                 <p >  -אין בקשות להוספת מאמרים -404- אין נתונים להציג</p> // הודעה אם אין נתונים
//             ) : (
//                 <ul>
//                     {RegisterArticleList
//                         ?.filter((articleRegister) => articleRegister.status === false)
//                         .map((articleRegister) => (
//                             <li key={articleRegister.id}>
//                                 {articleRegister.title} --
//                                 {articleRegister.subject} --
//                                 {articleRegister.description}<br></br>
//                                 articleRegister.id:{articleRegister.id}<br></br>
//                                 articleRegister.categoryId: {articleRegister.categoryId}<br></br>
//                                 {/* <button
//                                 onClick={() =>
//                                     // navigate(`DetailRequsetArticle/${articleRegister.id}/${articleRegister?.categoryId}`)}
//                                     navigate(`DetailRequsetArticle/${articleRegister.id}/${articleRegister?.categoryId}`)}
//                                     >
//                                 See the request article
//                             </button> */}
//                                 <button onClick={() => navigate(`/RequestToAddArticleList/DetailRequestArticle/${articleRegister.id}/${articleRegister?.categoryId}`)}> See the request article </button>
//                                 <button
//                                     onClick={() => deleteRequsetArticle(articleRegister.id)}>
//                                     Delete Request Article X
//                                 </button>
//                             </li>
//                         ))}
//                 </ul>
//             )}
//         </>
//     );
// }

//14-12-24
//עיצוב
// import React, { useEffect } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { deleteAricle, getarticleWithStatusFalse } from '../../slices/ArticleSlice';
// import { useNavigate } from 'react-router-dom';
// import { Card, CardContent, Typography, Button, Grid, Box } from '@mui/material';

// export default function RequestToAddArticleList() {
//     const dispatch = useDispatch();
//     const navigate = useNavigate();

//     const RegisterArticleList = useSelector((state) => state.article.ArticleList);

//     useEffect(() => {
//         dispatch(getarticleWithStatusFalse());
//     }, [dispatch]);

//     function deleteRequsetArticle(id) {
//         dispatch(deleteAricle(id));
//     }

//     return (
//         <>
//             <div style={{ marginBottom: '20px' }}>
//                 <h2>בקשות להוספת מאמרים</h2>
//             </div>

//             {RegisterArticleList && RegisterArticleList.length === 0 ? (
//                 <p>- אין בקשות להוספת מאמרים - 404 - אין נתונים להציג</p>
//             ) : (
//                 <Grid container spacing={3}>
//                     {RegisterArticleList
//                         ?.filter((articleRegister) => articleRegister.status === false)
//                         .map((articleRegister) => (
//                             <Grid item xs={12} sm={6} md={4} key={articleRegister.id}>
//                                 <Card sx={{ maxWidth: 345 }}>
//                                     <CardContent>
//                                         <Typography variant="h6" component="div">
//                                             {articleRegister.title}
//                                         </Typography>
//                                         <Typography variant="body2" color="text.secondary" paragraph>
//                                             {articleRegister.subject}
//                                         </Typography>
//                                         <Typography variant="body2" color="text.secondary" paragraph>
//                                             {articleRegister.description}
//                                         </Typography>
//                                         <Box display="flex" justifyContent="space-between">
//                                             <Button
//                                                 variant="contained"
//                                                 color="primary"
//                                                 onClick={() => navigate(`/RequestToAddArticleList/DetailRequestArticle/${articleRegister.id}/${articleRegister?.categoryId}`)}
//                                             >
//                                                 ראה את בקשת המאמר
//                                             </Button>
//                                             <Button
//                                                 variant="contained"
//                                                 color="error"
//                                                 onClick={() => deleteRequsetArticle(articleRegister.id)}
//                                             >
//                                                 מחק בקשה
//                                             </Button>
//                                         </Box>
//                                     </CardContent>
//                                 </Card>
//                             </Grid>
//                         ))}
//                 </Grid>
//             )}
//         </>
//     );
// }


//עיצוב 2
// import React, { useEffect } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { deleteAricle, getarticleWithStatusFalse } from '../../slices/ArticleSlice';
// import { useNavigate } from 'react-router-dom';
// import { Card, CardContent, Typography, Button, Box } from '@mui/material';

// export default function RequestToAddArticleList() {
//     const dispatch = useDispatch();
//     const navigate = useNavigate();

//     const RegisterArticleList = useSelector((state) => state.article.ArticleList);

//     useEffect(() => {
//         dispatch(getarticleWithStatusFalse());
//     }, [dispatch]);

//     function deleteRequsetArticle(id) {
//         dispatch(deleteAricle(id));
//     }

//     return (
//         <Box sx={{ padding: '20px' }}>
//             <Typography variant="h4" gutterBottom>
//                 בקשות להוספת מאמרים
//             </Typography>

//             {RegisterArticleList && RegisterArticleList.length === 0 ? (
//                 <Typography variant="body1" color="text.secondary">
//                     - אין בקשות להוספת מאמרים - 404 - אין נתונים להציג
//                 </Typography>
//             ) : (
//                 <Box
//                     sx={{
//                         display: 'flex',
//                         flexWrap: 'wrap',
//                         gap: '16px',
//                         justifyContent: 'center',
//                     }}
//                 >
//                     {RegisterArticleList
//                         ?.filter((articleRegister) => articleRegister.status === false)
//                         .map((articleRegister) => (
//                             <Card
//                                 key={articleRegister.id}
//                                 sx={{
//                                     width: '300px',
//                                     display: 'flex',
//                                     flexDirection: 'column',
//                                     justifyContent: 'space-between',
//                                     padding: '16px',
//                                 }}
//                             >
//                                 <CardContent>
//                                     <Typography variant="h6" component="div">
//                                         {articleRegister.title}
//                                     </Typography>
//                                     <Typography variant="body2" color="text.secondary" paragraph>
//                                         {articleRegister.subject}
//                                     </Typography>
//                                     <Typography variant="body2" color="text.secondary" paragraph>
//                                         {articleRegister.description}
//                                     </Typography>
//                                 </CardContent>
//                                 <Box
//                                     sx={{
//                                         display: 'flex',
//                                         justifyContent: 'space-between',
//                                         marginTop: '16px',
//                                     }}
//                                 >
//                                     <Button
//                                         variant="contained"
//                                         color="primary"
//                                         onClick={() =>
//                                             navigate(`/RequestToAddArticleList/DetailRequestArticle/${articleRegister.id}/${articleRegister?.categoryId}`)
//                                         }
//                                     >
//                                         ראה את בקשת המאמר
//                                     </Button>
//                                     <Button
//                                         variant="contained"
//                                         color="error"
//                                         onClick={() => deleteRequsetArticle(articleRegister.id)}
//                                     >
//                                         מחק בקשה
//                                     </Button>
//                                 </Box>
//                             </Card>
//                         ))}
//                 </Box>
//             )}
//         </Box>
//     );
// }

//עיצוב נוסך כך שלאחר מחיקה מייד יעלם אותה כרטיסיה ולא יצטרכו לרפרש את העמוד
//מייד שחוזרים אחרוה הנתונים לא מתעדכנים...ולכן דברים שאושרו מופיעים עדיין
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteAricle, getarticleWithStatusFalse } from '../../slices/ArticleSlice';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, Typography, Button, Box } from '@mui/material';

export default function RequestToAddArticleList() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    // Use local state to hold the list of articles
    const [articleList, setArticleList] = useState([]);
    
    const RegisterArticleList = useSelector((state) => state.article.ArticleList);

    useEffect(() => {
        dispatch(getarticleWithStatusFalse());
    }, [dispatch]);

    useEffect(() => {
        // Update local state whenever the global state changes
        setArticleList(RegisterArticleList);
    }, [RegisterArticleList]);

    function deleteRequsetArticle(id) {
        dispatch(deleteAricle(id));

        // Update local state to remove the deleted article
        setArticleList((prevList) => prevList.filter((article) => article.id !== id));
    }

    return (
        <Box sx={{ padding: '20px' }}>
            <Typography variant="h4" gutterBottom>
                בקשות להוספת מאמרים
            </Typography>

            {articleList && articleList.length === 0 ? (
                <Typography variant="body1" color="text.secondary">
                    - אין בקשות להוספת מאמרים - 404 - אין נתונים להציג
                </Typography>
            ) : (
                <Box
                    sx={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        gap: '16px',
                        justifyContent: 'center',
                    }}
                >
                    {articleList
                        ?.filter((articleRegister) => articleRegister.status === false)
                        .map((articleRegister) => (
                            <Card
                                key={articleRegister.id}
                                sx={{
                                    width: '300px',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'space-between',
                                    padding: '16px',
                                }}
                            >
                                <CardContent>
                                    <Typography variant="h6" component="div">
                                        {articleRegister.title}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary" paragraph>
                                        {articleRegister.subject}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary" paragraph>
                                        {articleRegister.description}
                                    </Typography>
                                </CardContent>
                                <Box
                                    sx={{
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        marginTop: '16px',
                                    }}
                                >
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        onClick={() =>
                                            navigate(`/RequestToAddArticleList/DetailRequestArticle/${articleRegister.id}/${articleRegister?.categoryId}`)
                                        }
                                    >
                                        ראה את בקשת המאמר
                                    </Button>
                                    <Button
                                        variant="contained"
                                        color="error"
                                        onClick={() => deleteRequsetArticle(articleRegister.id)}
                                    >
                                        מחק בקשה
                                    </Button>
                                </Box>
                            </Card>
                        ))}
                </Box>
            )}
        </Box>
    );
}



//GPT-24-11-24
// import React, { useEffect } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { getAllArticleList, deleteAricle } from '../../slices/ArticleSlice';
// import { useNavigate } from 'react-router-dom';

// export default function RequestToAddArticleList() {

//     const dispatch = useDispatch();
//     const navigate = useNavigate();

//     const RegisterArticleList = useSelector((state) => state.article.ArticleList);

//     useEffect(() => {
//         dispatch(getAllArticleList());
//     }, [dispatch]);

//     function deleteRequsetArticle(id) {
//         console.log('try');
//         dispatch(deleteAricle(id));
//         console.log('sucseess');
//     };

//     return (
//         <>
//             <div>RequestToAddArticleList</div>
//             <ul>
//                 {/* ?.- מוודא ש-RegisterArticleList אינו null או undefined לפני שמנסים לגשת אליו.*/}
//                 {RegisterArticleList
//                     // filter-מסנן את המאמרים כך שיוצגו רק אלו שסטטוס שלהם הוא false
//                     ?.filter((articleRegister) => articleRegister.status === false) // סינון המאמרים שהסטטוס שלהם שווה ל-false
//                     .map((articleRegister) => (
//                         <li key={articleRegister.id}>
//                             {articleRegister.title} --
//                             {articleRegister.subject} --
//                             {articleRegister.description}
//                             <button onClick={() => navigate(`DetailRequsetArticle/${articleRegister.id}`)}>see the requset article</button>
//                             <button onClick={() => deleteRequsetArticle(articleRegister.id)}>deleteRequsetArticle X</button>
//                             </li>
//                     ))}
//             </ul>
//         </>
//     );
// }

//DetailRequsetArticle

//הקוד לפני שינוי ועדכון
// import React, { useEffect } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { getRegisterArticles } from '../../slices/AddArticleSlice';
// import { useNavigate } from 'react-router-dom';

// export default function RequestToAddArticleList() {
//     const RegisterArticleList = useSelector((state) => state.AddArticle.ArticleList);
//     const dispatch = useDispatch();
//     const navigate=useNavigate();

//     useEffect(() => {
//         dispatch(getRegisterArticles());
//     }, [dispatch]);

//     return (
//         <>
//             <div>RequestToAddArticleList</div>
//             <ul>
//                 {/* ?.- מוודא ש-RegisterArticleList אינו null או undefined לפני שמנסים לגשת אליו.*/}
//                 {RegisterArticleList
//                 // filter-מסנן את המאמרים כך שיוצגו רק אלו שסטטוס שלהם הוא false
//                     ?.filter((articleRegister) => articleRegister.statuse === false) // סינון המאמרים שהסטטוס שלהם שווה ל-false
//                     .map((articleRegister) => (
//                         <li key={articleRegister.id}>
//                             {articleRegister.artical_name} --
//                             {articleRegister.subject} --
//                             {articleRegister.description}
//                             <button onClick={()=>navigate(`DetailOfRequesArticle/${articleRegister.id}`)}>see the requset article</button>
//                         </li>
//                     ))}
//             </ul>
//         </>
//     );
// }

//my code !----------------
// import React, { useEffect } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { getRegisterArticles } from '../../slices/AddArticleSlice';


// export default function RequestToAddArticleList() {
//     const RegisterArticleList = useSelector((state) => state.AddArticle.ArticleList);
//     const dispatch = useDispatch();

//     useEffect(() => {
//         dispatch(getRegisterArticles());
//     }, [dispatch]);

//     return (
//         <>

//             <div>RequestToAddArticleList</div>
//             <ul>
//                 {/* --תנאי-- */}
//                 {/* אם הסטטוס שווה T */}
//                 {RegisterArticleList.map((articleRegister) => (
//                     <li key={articleRegister.id}>
//                         {articleRegister.statuse}
//                         {articleRegister.artical_name}--
//                         {articleRegister.subject}--
//                         {articleRegister.description}--
//                         {/* <button onClick={() => navigate('/CateforyArticle')}>to return to CateforyArticle</button> */}
//                     </li>
//                 ))}
//             </ul>
//         </>
//     )
// }