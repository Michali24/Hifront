//ניסוי GPT נוסף
// import React, { useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { postArticle, getIdOfAricle } from '../../slices/ArticleSlice';
// import { getAllCategoryList } from '../../slices/ArticleSlice';
// import { useEffect } from 'react';

// export default function RequestToAddAnArticle() {
//     const [title, setTitle] = useState('');
//     const [subject, setSubject] = useState('');
//     const [description, setDescription] = useState('');
//     const [content, setContent] = useState('');
//     const [idCategory, setIdCategory] = useState(null); // ניהול מקומי ל-id

//     const lodinUser=useSelector((state)=>state.user.currentUser);

//     const dispatch = useDispatch();

//     useEffect(() => {
//         dispatch(getAllCategoryList());
//     }, [dispatch]);

//     // רשימת קטגוריות
//     const options = useSelector((state)=>state.article.CategoryList);

//     const handleForm = (e) => {
//         e.preventDefault();
//         const ArticleDetailToAdd = {
//             title,
//             author: lodinUser.name,
//             content,
//             description,
//             status:false,
//             categoryId: subject,
//         };

//         console.log('Submitting article:', ArticleDetailToAdd);

//         dispatch(postArticle(ArticleDetailToAdd));
//         console.log('sucsess to postArticle');

//     };

//     return (
//         <>
//             <h1>Request to Add an Article</h1>
//             <form onSubmit={handleForm}>
//                 <input
//                     type="text"
//                     name="title"
//                     placeholder="Enter the title"
//                     value={title}
//                     onChange={(e) => setTitle(e.target.value)}
//                     required
//                 />
//                 {/* Select שדה ה-subject כ-dropdown */}
//                 <select
//                     name="subject"
//                     value={subject} // subject שנבחר
//                     onChange={(e) => setSubject(e.target.value)}
//                     required
//                 >
//                     <option value="" disabled>
//                         Select a subject
//                     </option>
//                     {options.map((option) => (
//                         <option key={option.id} value={option.id}>
//                             {option.categoryName}
//                         </option>
//                     ))}
//                 </select>
//                 <input
//                     type="text"
//                     name="description"
//                     placeholder="Enter the description"
//                     value={description}
//                     onChange={(e) => setDescription(e.target.value)}
//                     required
//                 />
//                 <input
//                     type="text"
//                     name="content"
//                     placeholder="Enter the content"
//                     value={content}
//                     onChange={(e) => setContent(e.target.value)}
//                     required
//                 />
//                 <button type="submit">Submit an Article</button>
//             </form>
//         </>
//     );
// }


//14-12-24
//לאפשר שיהיה אפשרות להוסיף קובץ

// import React, { useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { postArticle, getIdOfAricle } from '../../slices/ArticleSlice';
// import { getAllCategoryList } from '../../slices/ArticleSlice';
// import { useEffect } from 'react';

// export default function RequestToAddAnArticle() {

//     const dispatch = useDispatch();
//     const lodinUser = useSelector((state) => state.user.currentUser);

//     useEffect(() => {
//         dispatch(getAllCategoryList());
//     }, [dispatch]);

//     // רשימת קטגוריות
//     const options = useSelector((state) => state.article.CategoryList);

//     const [pdfarticleFile, setPdfarticleFile] = useState(null);
//     const [newArticle, setNewArticle] = useState({
//         title: '',
//         author: '',
//         content: '',
//         description: '',
//         status: '',
//         categoryId: '',
//         pdfarticleFile: '',
//     });


//     // טיפול בשינוי הקובץ
//     const handelFileChange = (e) => {
//         const file = e.target.files[0];
//         setPdfarticleFile(file);
//     };

//     // טיפול בשינוי השדות
//     const handleChange = (e) => {
//         const { name, value } = e.target;

//         // אם השדה הוא התאריך, מבצעים המרה לפורמט YYYY-MM-DD
//         if (name === 'localmeetupDate') {
//             const formattedDate = new Date(value).toISOString().split('T')[0];
//             setNewMeetup((prevData) => ({
//                 ...prevData,
//                 [name]: formattedDate,
//             }));
//         } else {
//             setNewMeetup((prevData) => ({
//                 ...prevData,
//                 [name]: value,
//             }));
//         }
//     };

//     // טיפול בהגשת הטופס
//     function handleSubmit(e) {
//         e.preventDefault();
//         console.log('Uploading..',pdfarticleFile);

//         // יצירת FormData
//         const formData = new FormData();
//         formData.append(
//             'fileARTICLE',
//             new Blob([JSON.stringify(newArticle)], { type: 'application/json' })
//         );
//         formData.append('file', pdfarticleFile);

//         console.log('FormData before dispatch:', formData);

//         dispatch(postArticle(formData));
//     }


//     return (
//         <>
//             <div>Add New Meetup</div>
//             <form onSubmit={handleSubmit}>
//                 <input
//                     type="file"
//                     name="pdfarticleFile"
//                     onChange={handelFileChange}
//                     required
//                 />
//                 <input
//                     type="text"
//                     name="title"
//                     placeholder="Enter your Meetup Name"
//                     value={newArticle.title}
//                     onChange={handleChange}
//                     required
//                 />
//                 <input
//                     type="text"
//                     name="author"
//                     placeholder="Enter your Meetup Description"
//                     value={newArticle.author}
//                     onChange={handleChange}
//                     required
//                 />
//                 <input
//                     type="date"
//                     name="content"
//                     placeholder="Enter your Meetup Date"
//                     value={newArticle.content}
//                     onChange={handleChange} // שינוי שדה התאריך כולל המרה
//                     required
//                 />
//                 <input
//                     type="text"
//                     name="description"
//                     placeholder="Enter the Host Company Name"
//                     value={newArticle.description}
//                     onChange={handleChange}
//                     required
//                 />
//                 <select
//                     name="subject"
//                     value={newArticle.categoryId} // subject שנבחר
//                     onChange={handleChange}
//                     required
//                 >
//                     <option value="" disabled>
//                         Select a subject
//                     </option>
//                     {options.map((option) => (
//                         <option key={option.id} value={option.id}>
//                             {option.categoryName}
//                         </option>
//                     ))}
//                 </select>
//                 <button type="submit">Submit a New Meetup</button>
//             </form>
//         </>
//     );
// }

//תיקון הקוד כך שאנ יוכל לרשום באינםוטים
// import React, { useState, useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { postArticle, getAllCategoryList } from '../../slices/ArticleSlice';

// export default function RequestToAddAnArticle() {
//     const dispatch = useDispatch();
//     const loggedInUser = useSelector((state) => state.user.currentUser);

//     // שליפת רשימת הקטגוריות
//     useEffect(() => {
//         dispatch(getAllCategoryList());
//     }, [dispatch]);

//     const options = useSelector((state) => state.article.CategoryList);

//     const [pdfarticleFile, setPdfarticleFile] = useState(null);
//     const [newArticle, setNewArticle] = useState({
//         title: '',
//         author: '',
//         content: '',
//         description: '',
//         status: '',
//         categoryId: '',
//     });

//     // טיפול בשינוי הקובץ
//     const handleFileChange = (e) => {
//         const file = e.target.files[0];
//         setPdfarticleFile(file);
//     };

//     // טיפול בשינוי השדות
//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setNewArticle((prevData) => ({
//             ...prevData,
//             [name]: value,
//         }));
//     };

//     // טיפול בהגשת הטופס
//     const handleSubmit = (e) => {
//         e.preventDefault();
//         console.log('Uploading..', pdfarticleFile);

//         // יצירת FormData
//         const formData = new FormData();
//         formData.append(
//             'fileARTICLE',
//             new Blob([JSON.stringify(newArticle)], { type: 'application/json' })
//         );
//         formData.append('file', pdfarticleFile);

//         console.log('FormData before dispatch:', formData);

//         dispatch(postArticle(formData));
//     };

//     return (
//         <div>
//             <h2>Request to Add an Article</h2>
//             <form onSubmit={handleSubmit}>
//                 {/* קובץ PDF */}
//                 <input
//                     type="file"
//                     name="pdfarticleFile"
//                     onChange={handleFileChange}
//                     required
//                 />

//                 {/* כותרת */}
//                 <input
//                     type="text"
//                     name="title"
//                     placeholder="Enter the Article Title"
//                     value={newArticle.title}
//                     onChange={handleChange}
//                     required
//                 />

//                 {/* מחבר */}
//                 <input
//                     type="text"
//                     name="author"
//                     placeholder="Enter the Author Name"
//                     value={newArticle.author}
//                     onChange={handleChange}
//                     required
//                 />

//                 {/* תוכן */}
//                 <textarea
//                     name="content"
//                     placeholder="Enter the Content"
//                     value={newArticle.content}
//                     onChange={handleChange}
//                     required
//                 ></textarea>

//                 {/* תיאור */}
//                 <input
//                     type="text"
//                     name="description"
//                     placeholder="Enter the Description"
//                     value={newArticle.description}
//                     onChange={handleChange}
//                     required
//                 />

//                 {/* קטגוריה */}
//                 <select
//                     name="categoryId"
//                     value={newArticle.categoryId}
//                     onChange={handleChange}
//                     required
//                 >
//                     <option value="" disabled>
//                         Select a category
//                     </option>
//                     {options.map((option) => (
//                         <option key={option.id} value={option.id}>
//                             {option.categoryName}
//                         </option>
//                     ))}
//                 </select>

//                 <button type="submit">Submit Article</button>
//             </form>
//         </div>
//     );
// }


//תיקון נסיון הקוד לא שמר מקודם את הID של הקטגוריה
// import React, { useState, useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { postArticle, getAllCategoryList } from '../../slices/ArticleSlice';

// export default function RequestToAddAnArticle() {
//     const dispatch = useDispatch();

//     // שליפת פרטי המשתמש המחובר
//     const loggedInUser = useSelector((state) => state.user.currentUser);

//     // שליפת רשימת הקטגוריות
//     useEffect(() => {
//         dispatch(getAllCategoryList());
//     }, [dispatch]);

//     const options = useSelector((state) => state.article.CategoryList);

//     const [PDFArticleFile, setPdfarticleFile] = useState(null);
//     const [newArticle, setNewArticle] = useState({
//         title: '',
//         author: '',
//         content: '',
//         description: '',
//         status:false,
//         categoryId: '', // כאן ייכנס ה-ID של הקטגוריה שנבחרה
//         PDFArticleFile:'',
//     });

//     // טיפול בשינוי הקובץ
//     const handleFileChange = (e) => {
//         const file = e.target.files[0];
//         setPdfarticleFile(file);
//     };

//     // טיפול בשינוי השדות
//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setNewArticle((prevData) => ({
//             ...prevData,
//             [name]: value,
//         }));
//     };

//     // טיפול בשינוי הקטגוריה (שמירת ה-ID של הקטגוריה שנבחרה)
//     const handleCategoryChange = (e) => {
//         const categoryId = e.target.value;
//         console.log('categoryId',categoryId);
        
//         setNewArticle((prevData) => ({
//             ...prevData,
//             categoryId, // שמירת ה-ID של הקטגוריה שנבחרה
//         }));
//     };

//     // טיפול בהגשת הטופס
//     const handleSubmit = (e) => {
//         e.preventDefault();

//         // // בדיקת קובץ
//         // if (!pdfarticleFile) {
//         //     alert('Please upload a PDF file.');
//         //     return;
//         // }

//         console.log('Uploading..', PDFArticleFile);

//         // יצירת FormData
//         const formData = new FormData();
//         formData.append(
//             'fileARTICLE',
//             new Blob([JSON.stringify(newArticle)], { type: 'application/json' })
//         );
//         formData.append('file', PDFArticleFile);

//         console.log('FormData before dispatch:', formData);

//         dispatch(postArticle(formData))
//             // .then(() => {
//             //     alert('Article submitted successfully!');
//             // })
//             // .catch((error) => {
//             //     console.error('Error submitting article:', error);
//             //     alert('Failed to submit the article.');
//             // });
//     };

//     return (
//         <div>
//             <h2>Request to Add an Article</h2>
//             <form onSubmit={handleSubmit}>
//                 {/* קובץ PDF */}
//                 <input
//                     type="file"
//                     name="PDFArticleFile"
//                     onChange={handleFileChange}
//                     required
//                 />

//                 {/* כותרת */}
//                 <input
//                     type="text"
//                     name="title"
//                     placeholder="Enter the Article Title"
//                     value={newArticle.title}
//                     onChange={handleChange}
//                     required
//                 />

//                 {/* מחבר */}
//                 <input
//                     type="text"
//                     name="author"
//                     placeholder="Enter the Author Name"
//                     value={newArticle.author}
//                     onChange={handleChange}
//                     required
//                 />

//                 {/* תוכן */}
//                 <textarea
//                     name="content"
//                     placeholder="Enter the Content"
//                     value={newArticle.content}
//                     onChange={handleChange}
//                     required
//                 ></textarea>

//                 {/* תיאור */}
//                 <input
//                     type="text"
//                     name="description"
//                     placeholder="Enter the Description"
//                     value={newArticle.description}
//                     onChange={handleChange}
//                     required
//                 />

//                 {/* קטגוריה */}
//                 <select
//                     name="categoryId"
//                     value={newArticle.categoryId}
//                     onChange={handleCategoryChange} // עדכון הערך בקטגוריה שנבחרה
//                     required
//                 >
//                     <option value="" disabled>
//                         Select a category
//                     </option>
//                     {options.map((option) => (
//                         <option key={option.id} value={option.id}>
//                             {option.categoryName}
//                         </option>
//                     ))}
//                 </select>

//                 <button type="submit">Submit Article</button>
//             </form>
//         </div>
//     );
// }


//14-12-24
//לא שלחתי בקוד הקודם אוטבהיקט
//תיקון הקוד על ידי GPT
//עובדדדדדדדדדדדדדדדדד
// import React, { useState, useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { postArticle, getAllCategoryList } from '../../slices/ArticleSlice';

// export default function RequestToAddAnArticle() {
//     const dispatch = useDispatch();

//     // שליפת רשימת הקטגוריות
//     useEffect(() => {
//         dispatch(getAllCategoryList());
//     }, [dispatch]);

//     const options = useSelector((state) => state.article.CategoryList);

//     const [PDFArticleFile, setPDFArticleFile] = useState(null);
//     const [newArticle, setNewArticle] = useState({
//         title: '',
//         author: '',
//         content: '',
//         description: '',
//         status: false,
//         categoryOfArticles: {
//             id: '', // כאן ייכנס ה-ID של הקטגוריה שנבחרה
//         },
//     });

//     // טיפול בשינוי הקובץ
//     const handleFileChange = (e) => {
//         const file = e.target.files[0];
//         setPDFArticleFile(file);
//     };

//     // טיפול בשינוי השדות
//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setNewArticle((prevData) => ({
//             ...prevData,
//             [name]: value,
//         }));
//     };

//     // טיפול בשינוי הקטגוריה
//     const handleCategoryChange = (e) => {
//         const categoryId = e.target.value;
//         setNewArticle((prevData) => ({
//             ...prevData,
//             categoryOfArticles: {
//                 id: categoryId, // שמירת ה-ID של הקטגוריה תחת categoryOfArticles
//             },
//         }));
//     };

//     // טיפול בהגשת הטופס
//     const handleSubmit = (e) => {
//         e.preventDefault();

//         // בדיקת קובץ
//         if (!PDFArticleFile) {
//             alert('Please upload a PDF file.');
//             return;
//         }

//         console.log('Uploading..', PDFArticleFile);

//         // יצירת FormData
//         const formData = new FormData();
//         formData.append(
//             'fileARTICLE',
//             new Blob([JSON.stringify(newArticle)], { type: 'application/json' })
//         );
//         formData.append('file', PDFArticleFile);

//         console.log('FormData before dispatch:', formData);

//         dispatch(postArticle(formData))
//             .then(() => {
//                 alert('Article submitted successfully!');
//             })
//             .catch((error) => {
//                 console.error('Error submitting article:', error);
//                 alert('Failed to submit the article.');
//             });
//     };

//     return (
//         <div>
//             <h2>Request to Add an Article</h2>
//             <form onSubmit={handleSubmit}>
//                 {/* קובץ PDF */}
//                 <input
//                     type="file"
//                     name="PDFArticleFile"
//                     onChange={handleFileChange}
//                     required
//                 />

//                 {/* כותרת */}
//                 <input
//                     type="text"
//                     name="title"
//                     placeholder="Enter the Article Title"
//                     value={newArticle.title}
//                     onChange={handleChange}
//                     required
//                 />

//                 {/* מחבר */}
//                 <input
//                     type="text"
//                     name="author"
//                     placeholder="Enter the Author Name"
//                     value={newArticle.author}
//                     onChange={handleChange}
//                     required
//                 />

//                 {/* תוכן */}
//                 <textarea
//                     name="content"
//                     placeholder="Enter the Content"
//                     value={newArticle.content}
//                     onChange={handleChange}
//                     required
//                 ></textarea>

//                 {/* תיאור */}
//                 <input
//                     type="text"
//                     name="description"
//                     placeholder="Enter the Description"
//                     value={newArticle.description}
//                     onChange={handleChange}
//                     required
//                 />

//                 {/* קטגוריה */}
//                 <select
//                     name="categoryOfArticles"
//                     value={newArticle.categoryOfArticles.id}
//                     onChange={handleCategoryChange}
//                     required
//                 >
//                     <option value="" disabled>
//                         Select a category
//                     </option>
//                     {options.map((option) => (
//                         <option key={option.id} value={option.id}>
//                             {option.categoryName}
//                         </option>
//                     ))}
//                 </select>

//                 <button type="submit">Submit Article</button>
//             </form>
//         </div>
//     );
// }

//עיצוב הטופס
//הטופס מעטוצלב בעיצוב של MUI
//הטופבסנמצא במרכז הדף
// import React, { useState, useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { postArticle, getAllCategoryList } from '../../slices/ArticleSlice';
// import { TextField, Button, Select, MenuItem, Grid, InputLabel, FormControl } from '@mui/material';

// export default function RequestToAddAnArticle() {
//     const dispatch = useDispatch();

//     // שליפת רשימת הקטגוריות
//     useEffect(() => {
//         dispatch(getAllCategoryList());
//     }, [dispatch]);

//     const options = useSelector((state) => state.article.CategoryList);

//     const [PDFArticleFile, setPDFArticleFile] = useState(null);
//     const [newArticle, setNewArticle] = useState({
//         title: '',
//         author: '',
//         content: '',
//         description: '',
//         status: false,
//         categoryOfArticles: {
//             id: '', // כאן ייכנס ה-ID של הקטגוריה שנבחרה
//         },
//     });

//     // טיפול בשינוי הקובץ
//     const handleFileChange = (e) => {
//         const file = e.target.files[0];
//         setPDFArticleFile(file);
//     };

//     // טיפול בשינוי השדות
//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setNewArticle((prevData) => ({
//             ...prevData,
//             [name]: value,
//         }));
//     };

//     // טיפול בשינוי הקטגוריה
//     const handleCategoryChange = (e) => {
//         const categoryId = e.target.value;
//         setNewArticle((prevData) => ({
//             ...prevData,
//             categoryOfArticles: {
//                 id: categoryId, // שמירת ה-ID של הקטגוריה תחת categoryOfArticles
//             },
//         }));
//     };

//     // טיפול בהגשת הטופס
//     const handleSubmit = (e) => {
//         e.preventDefault();

//         // בדיקת קובץ
//         if (!PDFArticleFile) {
//             alert('Please upload a PDF file.');
//             return;
//         }

//         console.log('Uploading..', PDFArticleFile);

//         // יצירת FormData
//         const formData = new FormData();
//         formData.append(
//             'fileARTICLE',
//             new Blob([JSON.stringify(newArticle)], { type: 'application/json' })
//         );
//         formData.append('file', PDFArticleFile);

//         console.log('FormData before dispatch:', formData);

//         dispatch(postArticle(formData))
//             .then(() => {
//                 alert('Article submitted successfully!');
//             })
//             .catch((error) => {
//                 console.error('Error submitting article:', error);
//                 alert('Failed to submit the article.');
//             });
//     };

//     return (
//         <div>
//             <h2>Request to Add an Article</h2>
//             <form onSubmit={handleSubmit}>
//                 <Grid container spacing={2}>
//                     {/* קובץ PDF */}
//                     <Grid item xs={12}>
//                         <TextField
//                             type="file"
//                             name="PDFArticleFile"
//                             onChange={handleFileChange}
//                             fullWidth
//                             required
//                             label="Upload PDF"
//                             InputLabelProps={{
//                                 shrink: true,
//                             }}
//                         />
//                     </Grid>

//                     {/* כותרת */}
//                     <Grid item xs={12}>
//                         <TextField
//                             type="text"
//                             name="title"
//                             label="Article Title"
//                             placeholder="Enter the Article Title"
//                             value={newArticle.title}
//                             onChange={handleChange}
//                             fullWidth
//                             required
//                         />
//                     </Grid>

//                     {/* מחבר */}
//                     <Grid item xs={12}>
//                         <TextField
//                             type="text"
//                             name="author"
//                             label="Author Name"
//                             placeholder="Enter the Author Name"
//                             value={newArticle.author}
//                             onChange={handleChange}
//                             fullWidth
//                             required
//                         />
//                     </Grid>

//                     {/* תוכן */}
//                     <Grid item xs={12}>
//                         <TextField
//                             name="content"
//                             label="Content"
//                             placeholder="Enter the Content"
//                             value={newArticle.content}
//                             onChange={handleChange}
//                             fullWidth
//                             required
//                             multiline
//                             rows={4}
//                         />
//                     </Grid>

//                     {/* תיאור */}
//                     <Grid item xs={12}>
//                         <TextField
//                             type="text"
//                             name="description"
//                             label="Description"
//                             placeholder="Enter the Description"
//                             value={newArticle.description}
//                             onChange={handleChange}
//                             fullWidth
//                             required
//                         />
//                     </Grid>

//                     {/* קטגוריה */}
//                     <Grid item xs={12}>
//                         <FormControl fullWidth required>
//                             <InputLabel>Category</InputLabel>
//                             <Select
//                                 name="categoryOfArticles"
//                                 value={newArticle.categoryOfArticles.id}
//                                 onChange={handleCategoryChange}
//                                 label="Category"
//                             >
//                                 <MenuItem value="" disabled>
//                                     Select a category
//                                 </MenuItem>
//                                 {options.map((option) => (
//                                     <MenuItem key={option.id} value={option.id}>
//                                         {option.categoryName}
//                                     </MenuItem>
//                                 ))}
//                             </Select>
//                         </FormControl>
//                     </Grid>

//                     <Grid item xs={12}>
//                         <Button
//                             type="submit"
//                             variant="contained"
//                             color="primary"
//                             fullWidth
//                         >
//                             Submit Article
//                         </Button>
//                     </Grid>
//                 </Grid>
//             </form>
//         </div>
//     );
// }


//הטופס בתוך כרטיסייה
// import React, { useState, useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { postArticle, getAllCategoryList } from '../../slices/ArticleSlice';
// import { TextField, Button, Select, MenuItem, Grid, InputLabel, FormControl, Box, Card, CardContent, Typography } from '@mui/material';

// export default function RequestToAddAnArticle() {
//     const dispatch = useDispatch();

//     // שליפת רשימת הקטגוריות
//     useEffect(() => {
//         dispatch(getAllCategoryList());
//     }, [dispatch]);

//     const options = useSelector((state) => state.article.CategoryList);

//     const [PDFArticleFile, setPDFArticleFile] = useState(null);
//     const [newArticle, setNewArticle] = useState({
//         title: '',
//         author: '',
//         content: '',
//         description: '',
//         status: false,
//         categoryOfArticles: {
//             id: '', // כאן ייכנס ה-ID של הקטגוריה שנבחרה
//         },
//     });

//     // טיפול בשינוי הקובץ
//     const handleFileChange = (e) => {
//         const file = e.target.files[0];
//         setPDFArticleFile(file);
//     };

//     // טיפול בשינוי השדות
//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setNewArticle((prevData) => ({
//             ...prevData,
//             [name]: value,
//         }));
//     };

//     // טיפול בשינוי הקטגוריה
//     const handleCategoryChange = (e) => {
//         const categoryId = e.target.value;
//         setNewArticle((prevData) => ({
//             ...prevData,
//             categoryOfArticles: {
//                 id: categoryId, // שמירת ה-ID של הקטגוריה תחת categoryOfArticles
//             },
//         }));
//     };

//     // טיפול בהגשת הטופס
//     const handleSubmit = (e) => {
//         e.preventDefault();

//         // בדיקת קובץ
//         if (!PDFArticleFile) {
//             alert('Please upload a PDF file.');
//             return;
//         }

//         console.log('Uploading..', PDFArticleFile);

//         // יצירת FormData
//         const formData = new FormData();
//         formData.append(
//             'fileARTICLE',
//             new Blob([JSON.stringify(newArticle)], { type: 'application/json' })
//         );
//         formData.append('file', PDFArticleFile);

//         console.log('FormData before dispatch:', formData);

//         dispatch(postArticle(formData))
//             .then(() => {
//                 alert('Article submitted successfully!');
//             })
//             .catch((error) => {
//                 console.error('Error submitting article:', error);
//                 alert('Failed to submit the article.');
//             });
//     };

//     return (
//         <Box sx={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'flex-start', padding: 2 }}>
//             <Card sx={{ maxWidth: 600, width: '100%' }}>
//                 <CardContent>
//                     <Typography variant="h5" component="div" gutterBottom>
//                         Request to Add an Article
//                     </Typography>
//                     <form onSubmit={handleSubmit}>
//                         <Grid container spacing={2}>
//                             {/* קובץ PDF */}
//                             <Grid item xs={12}>
//                                 <TextField
//                                     type="file"
//                                     name="PDFArticleFile"
//                                     onChange={handleFileChange}
//                                     fullWidth
//                                     required
//                                     label="Upload PDF"
//                                     InputLabelProps={{
//                                         shrink: true,
//                                     }}
//                                 />
//                             </Grid>

//                             {/* כותרת */}
//                             <Grid item xs={12}>
//                                 <TextField
//                                     type="text"
//                                     name="title"
//                                     label="Article Title"
//                                     placeholder="Enter the Article Title"
//                                     value={newArticle.title}
//                                     onChange={handleChange}
//                                     fullWidth
//                                     required
//                                 />
//                             </Grid>

//                             {/* מחבר */}
//                             <Grid item xs={12}>
//                                 <TextField
//                                     type="text"
//                                     name="author"
//                                     label="Author Name"
//                                     placeholder="Enter the Author Name"
//                                     value={newArticle.author}
//                                     onChange={handleChange}
//                                     fullWidth
//                                     required
//                                 />
//                             </Grid>

//                             {/* תוכן */}
//                             <Grid item xs={12}>
//                                 <TextField
//                                     name="content"
//                                     label="Content"
//                                     placeholder="Enter the Content"
//                                     value={newArticle.content}
//                                     onChange={handleChange}
//                                     fullWidth
//                                     required
//                                     multiline
//                                     rows={4}
//                                 />
//                             </Grid>

//                             {/* תיאור */}
//                             <Grid item xs={12}>
//                                 <TextField
//                                     type="text"
//                                     name="description"
//                                     label="Description"
//                                     placeholder="Enter the Description"
//                                     value={newArticle.description}
//                                     onChange={handleChange}
//                                     fullWidth
//                                     required
//                                 />
//                             </Grid>

//                             {/* קטגוריה */}
//                             <Grid item xs={12}>
//                                 <FormControl fullWidth required>
//                                     <InputLabel>Category</InputLabel>
//                                     <Select
//                                         name="categoryOfArticles"
//                                         value={newArticle.categoryOfArticles.id}
//                                         onChange={handleCategoryChange}
//                                         label="Category"
//                                     >
//                                         <MenuItem value="" disabled>
//                                             Select a category
//                                         </MenuItem>
//                                         {options.map((option) => (
//                                             <MenuItem key={option.id} value={option.id}>
//                                                 {option.categoryName}
//                                             </MenuItem>
//                                         ))}
//                                     </Select>
//                                 </FormControl>
//                             </Grid>

//                             <Grid item xs={12}>
//                                 <Button
//                                     type="submit"
//                                     variant="contained"
//                                     color="primary"
//                                     fullWidth
//                                 >
//                                     Submit Article
//                                 </Button>
//                             </Grid>
//                         </Grid>
//                     </form>
//                 </CardContent>
//             </Card>
//         </Box>
//     );
// }


//עיצוב 3
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { postArticle, getAllCategoryList } from '../../slices/ArticleSlice';
import { TextField, Button, Select, MenuItem, Grid, InputLabel, FormControl, Box, Card, CardContent, Typography } from '@mui/material';

export default function RequestToAddAnArticle() {
    const dispatch = useDispatch();

    // שליפת רשימת הקטגוריות
    useEffect(() => {
        dispatch(getAllCategoryList());
    }, [dispatch]);

    const options = useSelector((state) => state.article.CategoryList);

    const [PDFArticleFile, setPDFArticleFile] = useState(null);
    const [newArticle, setNewArticle] = useState({
        title: '',
        author: '',
        // content: '',
        description: '',
        status: false,
        categoryOfArticles: {
            id: '', // כאן ייכנס ה-ID של הקטגוריה שנבחרה
        },
    });

    // טיפול בשינוי הקובץ
    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setPDFArticleFile(file);
    };

    // טיפול בשינוי השדות
    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewArticle((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    // טיפול בשינוי הקטגוריה
    const handleCategoryChange = (e) => {
        const categoryId = e.target.value;
        setNewArticle((prevData) => ({
            ...prevData,
            categoryOfArticles: {
                id: categoryId, // שמירת ה-ID של הקטגוריה תחת categoryOfArticles
            },
        }));
    };

    // טיפול בהגשת הטופס
    const handleSubmit = (e) => {
        e.preventDefault();

        // בדיקת קובץ
        if (!PDFArticleFile) {
            alert('Please upload a PDF file.');
            return;
        }

        console.log('Uploading..', PDFArticleFile);

        // יצירת FormData
        const formData = new FormData();
        formData.append(
            'fileARTICLE',
            new Blob([JSON.stringify(newArticle)], { type: 'application/json' })
        );
        formData.append('file', PDFArticleFile);

        console.log('FormData before dispatch:', formData);

        dispatch(postArticle(formData))
            .then(() => {
                alert('Article submitted successfully!');
            })
            .catch((error) => {
                console.error('Error submitting article:', error);
                alert('Failed to submit the article.');
            });
    };

    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'flex-start',
                alignItems: 'flex-start',
                padding: 2,
                minHeight: '100vh', // שימו לב, הגובה כאן מתפשט
            }}
        >
            <Card sx={{ maxWidth: 600, width: '100%', position: 'relative' }}>
                <CardContent>
                    <Typography variant="h5" component="div" gutterBottom>
                        Request to Add an Article
                    </Typography>
                    <form onSubmit={handleSubmit}>
                        <Grid container spacing={2}>
                            {/* קובץ PDF */}
                            <Grid item xs={12}>
                                <TextField
                                    type="file"
                                    name="PDFArticleFile"
                                    onChange={handleFileChange}
                                    fullWidth
                                    required
                                    label="Upload PDF"
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                />
                            </Grid>

                            {/* כותרת */}
                            <Grid item xs={12}>
                                <TextField
                                    type="text"
                                    name="title"
                                    label="Article Title"
                                    placeholder="Enter the Article Title"
                                    value={newArticle.title}
                                    onChange={handleChange}
                                    fullWidth
                                    required
                                />
                            </Grid>

                            {/* מחבר */}
                            <Grid item xs={12}>
                                <TextField
                                    type="text"
                                    name="author"
                                    label="Author Name"
                                    placeholder="Enter the Author Name"
                                    value={newArticle.author}
                                    onChange={handleChange}
                                    fullWidth
                                    required
                                />
                            </Grid>

                            {/* תוכן */}
                            {/* <Grid item xs={12}>
                                <TextField
                                    name="content"
                                    label="Content"
                                    placeholder="Enter the Content"
                                    value={newArticle.content}
                                    onChange={handleChange}
                                    fullWidth
                                    required
                                    multiline
                                    rows={4}
                                />
                            </Grid> */}

                            {/* תיאור */}
                            <Grid item xs={12}>
                                <TextField
                                    type="text"
                                    name="description"
                                    label="Description"
                                    placeholder="Enter the Description"
                                    value={newArticle.description}
                                    onChange={handleChange}
                                    fullWidth
                                    required
                                />
                            </Grid>

                            {/* קטגוריה */}
                            <Grid item xs={12}>
                                <FormControl fullWidth required>
                                    <InputLabel>Category</InputLabel>
                                    <Select
                                        name="categoryOfArticles"
                                        value={newArticle.categoryOfArticles.id}
                                        onChange={handleCategoryChange}
                                        label="Category"
                                    >
                                        <MenuItem value="" disabled>
                                            Select a category
                                        </MenuItem>
                                        {options.map((option) => (
                                            <MenuItem key={option.id} value={option.id}>
                                                {option.categoryName}
                                            </MenuItem>
                                        ))}
                                    </Select>
                                </FormControl>
                            </Grid>

                            <Grid item xs={12}>
                                <Button
                                    type="submit"
                                    variant="contained"
                                    color="primary"
                                    fullWidth
                                >
                                    Submit Article
                                </Button>
                            </Grid>
                        </Grid>
                    </form>
                </CardContent>
            </Card>
        </Box>
    );
}
