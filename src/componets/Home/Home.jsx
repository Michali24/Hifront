//הקוד ללא עיצןב MUI
// import React from 'react'
// import { useEffect } from 'react'
// import { useSelector } from 'react-redux'
// import { useDispatch } from 'react-redux'
// import { getAllArticleList } from '../../slices/ArticleSlice';

// export default function Home() {

//   const dispatch = useDispatch();
//   const articleList = useSelector((state) => state.article.ArticleList);

//   useEffect(() => {
//     dispatch(getAllArticleList());
//   }, [dispatch]);

//   return (
//     <>
//       <div>Home</div>

//       <ul>
//         {articleList.slice().reverse().slice(0, 5).map((article) => (
//           <li key={article.id}>
//            title: {article.title}
//            author: {article.author}
//            description:{article.description}
//           </li>
//         ))}
//       </ul>
//     </>
//   )
// }

//הקוד בעיצוב MUI-----------------------
//עיצוב חלקי ובסיסי לגמרי
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAllArticleList } from '../../slices/ArticleSlice';
import '@fontsource/dancing-script';
import { Box, Card, CardContent, Typography, Grid } from '@mui/material';

export default function Home() {
  const dispatch = useDispatch();
  const articleList = useSelector((state) => state.article.ArticleList);

  useEffect(() => {
    dispatch(getAllArticleList());
  }, [dispatch]);

  return (
    <Box sx={{ padding: 3 }}>
      <Typography variant="h4" align="center" gutterBottom>
        --Home--
      </Typography>

      <Typography variant="h4" align="left" gutterBottom sx={{ fontFamily: 'Dancing Script, Arial, sans-serif' }}>
         New Article On HiTechistim
      </Typography>

      <Grid container spacing={14} justifyContent="center">
        {articleList.slice().reverse().slice(0, 5).map((article) => (
          <Grid item key={article.id} xs={12} sm={6} md={4} lg={3}>
            <Card
              sx={{
                height: 180, // גובה אחיד
                width: 200, // רוחב אחיד
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                transition: 'transform 0.3s, box-shadow 0.3s',
                '&:hover': {
                  transform: 'scale(1.05)',
                  boxShadow: 6,
                },
              }}
            >
              <CardContent>
                <Typography variant="h6" component="div" gutterBottom>
                  {article.title}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ marginBottom: 1 }}
                >
                  Author: {article.author}
                </Typography>
                <Typography variant="body2">
                  description: {article.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
