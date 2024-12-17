//עובד פגזזז
//15-12-24
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteAricle, getarticleWithStatusFalse, putAricle } from '../../slices/ArticleSlice';
import { useNavigate } from 'react-router-dom';
import {
    Card,
    CardContent,
    Typography,
    Button,
    Box,
    IconButton,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete'; // ייבוא אייקון המחיקה

export default function RequestToAddArticleList() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    // מצב מקומי להחזיק את רשימת המאמרים
    const [articleList, setArticleList] = useState([]);

    // בחירת רשימת המאמרים עם סטטוס false מחנות Redux
    const registerArticleList = useSelector((state) => state.article.ArticleList);

    // מצב עבור הדיאלוג (פופאפ)
    const [openDialog, setOpenDialog] = useState(false);

    // שליפה של מאמרים עם סטטוס false בעת טעינת הקומפוננטה
    useEffect(() => {
        dispatch(getarticleWithStatusFalse());
    }, [dispatch]);

    // עדכון מצב מקומי כאשר רשימת המאמרים משתנה
    useEffect(() => {
        setArticleList(registerArticleList);
    }, [registerArticleList]);

    // פונקציה לסגירת הדיאלוג
    const handleCloseDialog = () => {
        setOpenDialog(false);
    };

    // פונקציה למחיקת בקשת מאמר
    const deleteRequestArticle = (id) => {
        dispatch(deleteAricle(id))
            .then(() => {
                // עדכון מצב מקומי להסרת המאמר מהרשימה
                setArticleList((prevList) => prevList.filter((article) => article.id !== id));
            })
            .catch((error) => {
                console.error('שגיאה במחיקת המאמר:', error);
                // ניתן להוסיף טיפול בשגיאה כאן, כמו הצגת הודעת שגיאה
            });
    };

    // פונקציה לאישור מאמר
    const approveArticle = (article) => {
        if (!article) {
            console.error('פרטי המאמר אינם זמינים.');
            return;
        }

        // יצירת אובייקט מאמר חדש עם סטטוס מעודכן
        const updatedArticle = {
            ...article,
            status: true, // שינוי סטטוס לאושר
        };

        console.log('מאמר מעודכן:', updatedArticle);
        console.log('ID קטגוריה:', updatedArticle.categoryId);

        // שליחת העדכון ל-Redux
        dispatch(putAricle(updatedArticle))
            .then(() => {
                console.log('המאמר אושר ונשלח בהצלחה!');
                setOpenDialog(true); // פתיחת הדיאלוג
                // עדכון מצב מקומי להסרת המאמר מהרשימה
                setArticleList((prevList) => prevList.filter((a) => a.id !== article.id));
            })
            .catch((error) => {
                console.error('שגיאה באישור המאמר:', error);
                // ניתן להוסיף טיפול בשגיאה כאן, כמו הצגת הודעת שגיאה
            });
    };

    // פונקציה לפתיחת ה-PDF בטאב חדש
    const handleOpenInNewTab = (article) => {
        if (!article || !article.pdfarticleFile) {
            alert("לא ניתן לפתוח את המאמר כעת.");
            return;
        }

        let byteArray;

        // בדיקה אם הנתונים הם מחרוזת Base64
        if (typeof article.pdfarticleFile === 'string') {
            try {
                byteArray = Uint8Array.from(atob(article.pdfarticleFile), (c) => c.charCodeAt(0));
            } catch (error) {
                console.error('מחרוזת Base64 לא חוקית:', error);
                alert("נתוני ה-PDF אינם תקינים.");
                return;
            }
        } else {
            // הנחה שזהו מערך בתים
            byteArray = new Uint8Array(article.pdfarticleFile);
        }

        // יצירת Blob מהמערך בתים
        const blob = new Blob([byteArray], { type: 'application/pdf' });
        const url = URL.createObjectURL(blob);

        const newTab = window.open();
        if (newTab) {
            newTab.document.write(
                `<html>
                    <head><title>המאמר</title></head>
                    <body style="margin:0;">
                        <iframe src="${url}" style="border: none; width: 100%; height: 100vh;" allowfullscreen></iframe>
                    </body>
                </html>`
            );
            newTab.document.close();
        } else {
            alert("לא ניתן לפתוח טאב חדש. אנא בדוק את הגדרות הדפדפן שלך.");
        }
    };

    // פונקציה להורדת ה-PDF
    const handleDownload = (article) => {
        if (!article || !article.pdfarticleFile) {
            alert("לא ניתן להוריד את המאמר כעת.");
            return;
        }

        let byteArray;

        // בדיקה אם הנתונים הם מחרוזת Base64
        if (typeof article.pdfarticleFile === 'string') {
            try {
                byteArray = Uint8Array.from(atob(article.pdfarticleFile), (c) => c.charCodeAt(0));
            } catch (error) {
                console.error('מחרוזת Base64 לא חוקית:', error);
                alert("נתוני ה-PDF אינם תקינים.");
                return;
            }
        } else {
            // הנחה שזהו מערך בתים
            byteArray = new Uint8Array(article.pdfarticleFile);
        }

        // יצירת Blob מהמערך בתים להורדה
        const blob = new Blob([byteArray], { type: 'application/pdf' });
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = `${article.title}.pdf`; // שם הקובץ להורדה

        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <Box
            sx={{
                padding: 10,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start', // יישור לשמאל
                position: 'relative', // מיקום לתצוגת הפק覆 (overlay) נכון
                // הגדרות תמונת הרקע
                backgroundImage: 'url(/images/artical1.jpg)', // החלף עם כתובת התמונה שלך
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                minHeight: '100vh',
            }}
        >
            {/* אופציונלי: הוספת שכבה חצי שקופה לקריאה טובה יותר */}
            <Box
                sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    backgroundColor: 'rgba(255, 255, 255, 0.8)', // כיוון צבע ושקיפות לפי הצורך
                    zIndex: 0, // ודא שהיא מאחורי התוכן
                }}
            />

            <Box
                sx={{
                    position: 'relative', // לוודא שהתוכן מעל השכבה החצי שקופה
                    zIndex: 1,
                    width: '100%',
                    maxWidth: '1200px', // אופציונלי: הגבלת רוחב מקסימלי
                }}
            >
                <Typography variant="h4" gutterBottom sx={{ color: 'text.primary', textAlign: 'center' }}>
                    בקשות להוספת מאמרים
                </Typography>

                {articleList && articleList.length === 0 ? (
                    <Typography variant="body1" color="text.secondary" sx={{ textAlign: 'center' }}>
                        - אין בקשות להוספת מאמרים - 404 - אין נתונים להציג
                    </Typography>
                ) : (
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column', // פריסה בעמודה
                            gap: '18px',
                            width: '100%', // מיכל ברוחב מלא
                            alignItems: 'center', // מרכז את הכרטיסים
                            padding: 2, // התאמת ריפוד לפי הצורך
                        }}
                    >
                        {articleList
                            ?.filter((articleRegister) => articleRegister.status === false)
                            .map((articleRegister) => (
                                <Card
                                    key={articleRegister.id}
                                    sx={{
                                        width: '100%', // רוחב מלא
                                        maxWidth: '800px', // רוחב מקסימלי
                                        display: 'flex',
                                        flexDirection: 'column',
                                        justifyContent: 'space-between',
                                        padding: '16px',
                                        minHeight: '250px',
                                        overflow: 'hidden',
                                        border: '1px solid #ccc',
                                        borderRadius: '8px',
                                        boxShadow: '0 4px 8px rgba(228, 53, 199, 0.1)',
                                        backgroundColor: '#fff',
                                        position: 'relative',
                                    }}
                                >
                                    <CardContent>
                                        <Typography variant="h6" component="div" gutterBottom>
                                            <strong>כותרת:</strong> {articleRegister.title}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary" paragraph>
                                            <strong>מחבר:</strong> {articleRegister.author}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary" paragraph>
                                            <strong>נושא:</strong> {articleRegister.subject}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary" paragraph>
                                            <strong>תיאור:</strong> {articleRegister.description}
                                        </Typography>
                                    </CardContent>
                                    <Box
                                        sx={{
                                            display: 'flex',
                                            justifyContent: 'space-between',
                                            alignItems: 'center',
                                            flexWrap: 'wrap',
                                            gap: '10px',
                                        }}
                                    >
                                        {articleRegister?.pdfarticleFile ? (
                                            <>
                                                {/* כפתור לפתיחת ה-PDF בטאב חדש */}
                                                <Button
                                                    onClick={() => handleOpenInNewTab(articleRegister)}
                                                    variant="contained"
                                                    color="primary"
                                                >
                                                    פתח בטאב חדש
                                                </Button>

                                                {/* כפתור להורדת ה-PDF */}
                                                <Button
                                                    onClick={() => handleDownload(articleRegister)}
                                                    variant="contained"
                                                    color="secondary"
                                                >
                                                    הורד את המאמר
                                                </Button>
                                            </>
                                        ) : (
                                            <Typography variant="body2" color="text.secondary">
                                                לא נמצאו פרטי המאמר.
                                            </Typography>
                                        )}
                                        <Box
                                            sx={{
                                                display: 'flex',
                                                alignItems: 'center',
                                                gap: '10px',
                                            }}
                                        >
                                            {/* כפתור אישור מאמר */}
                                            <Button
                                                onClick={() => approveArticle(articleRegister)}
                                                variant="contained"
                                                color="success"
                                            >
                                                אשר מאמר
                                            </Button>

                                            {/* כפתור מחיקת מאמר */}
                                            <IconButton
                                                onClick={() => deleteRequestArticle(articleRegister.id)}
                                                color="error"
                                                aria-label="delete"
                                            >
                                                <DeleteIcon />
                                            </IconButton>
                                        </Box>
                                    </Box>
                                </Card>
                            ))}
                    </Box>
                )}

                {/* הוספת רכיב ה-Dialog כאן במיקום מרכז המסך */}
                <Dialog
                    open={openDialog}
                    onClose={handleCloseDialog}
                    aria-labelledby="success-dialog-title"
                    aria-describedby="success-dialog-description"
                >
                    <DialogTitle id="success-dialog-title">הצלחה</DialogTitle>
                    <DialogContent>
                        <Typography id="success-dialog-description">
                            מאמר התווסף בהצלחה!
                        </Typography>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleCloseDialog} color="primary" autoFocus>
                            סגור
                        </Button>
                    </DialogActions>
                </Dialog>
            </Box>
        </Box>
    );
}
