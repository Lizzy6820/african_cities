import React, { useState, useEffect } from 'react';
import { Container, Grid } from '@material-ui/core';
import { useDispatch } from 'react-redux';

import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';
import { getPosts } from './actions/posts';
import Navbar from './components/Navbar/Navbar';
import HeaderBlock from  './components/HeaderBlock/HeaderBlock';
import Footer from './components/Footer/Footer';



const App = () => {
  const [currentId, setCurrentId] = useState(0);
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch]);

  return (
    <>
    <Navbar />
    <HeaderBlock />
      <br/> 
        <Container>
          <Grid container justify="space-between" alignItems="stretch" spacing={3}>
            <Grid item xs={12} sm={7}>
              <Posts setCurrentId={setCurrentId} />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form currentId={currentId} setCurrentId={setCurrentId} />
            </Grid>
          </Grid>
        </Container>
    
    <Footer />
    </>
  );
};

export default App;
