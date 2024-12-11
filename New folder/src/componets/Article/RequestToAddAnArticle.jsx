//ניסוי GPT נוסף
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { postArticle, getIdOfAricle } from '../../slices/ArticleSlice';
import { getAllCategoryList } from '../../slices/ArticleSlice';
import { useEffect } from 'react';

export default function RequestToAddAnArticle() {
    const [title, setTitle] = useState('');
    const [subject, setSubject] = useState('');
    const [description, setDescription] = useState('');
    const [content, setContent] = useState('');
    const [idCategory, setIdCategory] = useState(null); // ניהול מקומי ל-id

    const userName=useSelector((state)=>state.user.currentUser);

    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(getAllCategoryList());
    }, [dispatch]);
    
    // רשימת קטגוריות
    const options = useSelector((state)=>state.article.CategoryList);

    const handleForm = (e) => {
        e.preventDefault();
        const ArticleDetailToAdd = {
            title,
            author: userName.name,
            content,
            description,
            status:false,
            categoryId: subject,
        };

        console.log('Submitting article:', ArticleDetailToAdd);

        dispatch(postArticle(ArticleDetailToAdd));
        console.log('sucsess to postArticle');
        
    };
    
    return (
        <>
            <h1>Request to Add an Article</h1>
            <form onSubmit={handleForm}>
                <input
                    type="text"
                    name="title"
                    placeholder="Enter the title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                />
                {/* Select שדה ה-subject כ-dropdown */}
                <select
                    name="subject"
                    value={subject} // subject שנבחר
                    onChange={(e) => setSubject(e.target.value)}
                    required
                >
                    <option value="" disabled>
                        Select a subject
                    </option>
                    {options.map((option) => (
                        <option key={option.id} value={option.id}>
                            {option.categoryName}
                        </option>
                    ))}
                </select>
                <input
                    type="text"
                    name="description"
                    placeholder="Enter the description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    required
                />
                <input
                    type="text"
                    name="content"
                    placeholder="Enter the content"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    required
                />
                <button type="submit">Submit an Article</button>
            </form>
        </>
    );
}

//GPT+בחירת נושא מתוך רשימת קטגוריות
// import React, { useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { postArticle,getIdOfAricle } from '../../slices/ArticleSlice';

// export default function RequestToAddAnArticle() {
//     const [title, setTitle] = useState('');
//     const [subject, setSubject] = useState('');
//     const [description, setDescription] = useState('');
//     const [content, setContent] = useState('');

//     const dispatch = useDispatch();

//     const idCategory=useSelector((state) => state.article.id);
//     // רשימת קטגוריות
//     const options = [
//         { ID: 1, CATEGORY_NAME: 'Qa', value: { ID: 1, CATEGORY_NAME: 'Qa' } },
//         { ID: 2, CATEGORY_NAME: 'Dev', value: { ID: 2, CATEGORY_NAME: 'Dev' } },
//     ]

//     const handelForm = (e) => {
//         e.preventDefault();
//         const ArticleDetailToAdd = {
//             title: title,
//             author:'m',
//             content: content,
//             description: description,
//             status: false,
//             subject: idCategory,
//         };

//         console.log('succes!!');
        
//         dispatch(postArticle(ArticleDetailToAdd));
//         console.log('yess');
        
//     };

//     function getIdCategoryArticle(subject){
//         dispatch(getIdOfAricle(subject));
//     }

//     return (
//         <>
//             <h1>Request to add an article</h1>
//             <form onSubmit={handelForm}>
//                 <input
//                     type="text"
//                     name="title"
//                     placeholder="Enter the title"
//                     value={title}
//                     onChange={(e) => setTitle(e.target.value)}
//                     required
//                 />
//                 {/* הפיכת שדה ה-subject ל-dropdown */}
//                 <select
//                     name="subject"
//                     value={getIdCategoryArticle({subject})}
//                     onChange={(e) => setSubject(e.target.value)}
//                     required
//                 >
//                     <option value="" disabled>Select a subject</option>
//                     {options.map((option) => (
//                         <option key={option.ID} value={option.CATEGORY_NAME}>
//                             {option.CATEGORY_NAME}
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
//                 <button type="submit">Submit an article</button>
//             </form>
//         </>
//     );
// }

//GPT------------
// import React, { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { postArticle } from '../../slices/ArticleSlice' // השתמש ב-postArticle במקום addArticle

// export default function RequestToAddAnArticle() {
//     const [title, setTitle] = useState('');
//     const [subject, setSubject] = useState('');
//     const [description, setDescription] = useState('');
//     const [content, setContent] = useState('');
//     const dispatch = useDispatch();

//     //לעשות שיוכל לבחור רק מרשימת קטגוריות ספציפית
  

//     const handelForm = (e) => {
//         e.preventDefault();
//         const ArticleDetailToAdd = {
//             title: title,
//             subject: subject,
//             description: description,
//             content: content,
//             status: false
//         };

//         dispatch(postArticle(ArticleDetailToAdd)); // קרא ל-postArticle
//     };

//     return (
//         <>
//             <h1>Request to add an article</h1>
//             <form onSubmit={handelForm}>
//                 <input
//                     type="text"
//                     name="title"
//                     placeholder="Enter the title"
//                     value={title}
//                     onChange={(e) => setTitle(e.target.value)}
//                     required
//                 />
//                 {/* לראות אם ככה עושים שניפתח לי רשימה של הצעות והוא צריך להחור מתוך זה .. */}
//                 <input
//                     type="text"
//                     name="name"
//                     placeholder="Enter the subject"
//                     value={subject}
//                     onChange={(e) => setSubject(e.target.value)}
//                     required
//                 />
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
//                 <button type="submit">Submit an article</button>
//             </form>
//         </>
//     );
// }

// לפני שינוי________________________________________________________________________________________________________________
// import React, { useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { postArticle } from '../../slices/AddArticleSlice'; // השתמש ב-postArticle במקום addArticle

// export default function RequestToAddAnArticle() {
//     const [articleName, setArticleName] = useState('');
//     const [subject, setSubject] = useState('');
//     const [description, setDescription] = useState('');
//     const [arical_text, setArical_text] = useState('');
//     const dispatch = useDispatch();

//     const handelForm = (e) => {
//         e.preventDefault();
//         const ArticleDetailToAdd = {
//             artical_name: articleName,
//             subject: subject,
//             description: description,
//             arical_text: arical_text,
//         };

//         dispatch(postArticle(ArticleDetailToAdd)); // קרא ל-postArticle
//     };

//     return (
//         <>
//             <h1>Request to add an article</h1>
//             <form onSubmit={handelForm}>
//                 <input
//                     type="text"
//                     name="artical_name"
//                     placeholder="Enter the artical_name"
//                     value={articleName}
//                     onChange={(e) => setArticleName(e.target.value)}
//                     required
//                 />
//                 <input
//                     type="text"
//                     name="subject"
//                     placeholder="Enter the subject"
//                     value={subject}
//                     onChange={(e) => setSubject(e.target.value)}
//                     required
//                 />
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
//                     name="arical_text"
//                     placeholder="Enter the arical_text"
//                     value={arical_text}
//                     onChange={(e) => setArical_text(e.target.value)}
//                     required
//                 />
//                 <button type="submit">Submit an article</button>
//             </form>
//         </>
//     );
// }
//שלי...
// import React, { useState } from 'react'
// import { useSelector, useDispatch } from 'react-redux';
// import { addArticle } from '../../services/AddArticleService';

// export default function RequestToAddAnArticle() {
//     const [articleName, setArticleName] = useState('');
//     const [subject, setSubject] = useState('');
//     const [description, setDescription] = useState('');
//     const [arical_text, setArical_text] = useState('');
//     //זה צריך להישלף מתוך הUSER
//     const[userName,setUserName]=useState('');

//     const dispatch = useDispatch();

//     // פעולה לטיפול בשינוי השדות ושמירת הנתונים ב-localStorage
//     const updateField = (setter, fieldName, value) => {
//         setter(value);
//         // שמירת השדה העדכני ב-localStorage
//         // const currentData = JSON.parse(localStorage.getItem('ArticleDetailTOAdd')) || {};
//         // localStorage.setItem('ArticleDetailTOAdd', JSON.stringify({ ...currentData, [fieldName]: value }));
//     };

//     function handelForm(e) {
//         e.preventDefault();
//         const ArticleDetailToAdd = {
//             artical_name: articleName,
//             subject: subject,
//             description: description,
//             arical_text: arical_text,
//         };
//         console.log('readux');
//         dispatch(postArticle(ArticleDetailToAdd))
//     }

//     return (
//         <>
//             <h1>Request to add an article</h1>
//             <form onSubmit={handelForm}>
//                 <input type='text' name='artical_name' placeholder='Enter the artical_name' value={articleName} onChange={(e) => updateField(setArticleName, 'artical_name', e.target.value)} required></input>
//                 <input type='text' name='subject' placeholder='Enter the subject' value={subject} onChange={(e) => updateField(setSubject, 'subject', e.target.value)} required></input>
//                 <input type='text' name='description' placeholder='Enter the description' value={description} onChange={(e) => updateField(setDescription, 'description', e.target.value)} required></input>
//                 <input type='text' name='arical_text' placeholder='Enter the arical_text' value={arical_text} onChange={(e) => updateField(setArical_text, 'arical_text', e.target.value)} required></input>
//                 <button type="submit">Submitting an article</button>
//             </form>
//         </>
//     )
// }

