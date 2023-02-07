import './index.css';

import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { router } from './router';
import PageStyle from './Components/PageStyle'
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <PageStyle>
    <RouterProvider router={router}/>
  </PageStyle>
  

);

// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import Sample from './Sample'
// import { styled } from '@mui/material/styles';
// import Box from '@mui/material/Box';
// import Paper from '@mui/material/Paper';
// import Grid from '@mui/material/Grid';

// const root = ReactDOM.createRoot(document.getElementById('root'));

// const Item = styled(Paper)(({ theme }) => ({
//   backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
//   ...theme.typography.body2,
//   padding: theme.spacing(1),
//   textAlign: 'center',
//   color: theme.palette.text.secondary,
// }));

// root.render(
//   <div id="main component">
//  <Grid container spacing={2}>
//   <Grid item xs={6} md={8}>
//     <Sample name="raymond"/>
//   </Grid>
//   <Grid item xs={6} md={4}>
//   <Sample name="jairo"/>
//   </Grid>
//   <Grid item xs={6} md={4}>
//   <Sample name="freddy"/>
//   </Grid>
//   <Grid item xs={6} md={8}>
//   <Sample name="john"/>
//   </Grid>
// </Grid>
//   </div>

// );