import * as React from 'react';
import { styled } from '@mui/material/styles';
import image from "../image/store.jpeg"
import { Container,ButtonBase,Typography,Paper,Grid,Button } from '@mui/material';
import LocalMallIcon from "@mui/icons-material/LocalMall";
import BtnVariant from './btnVariant';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const Img = styled('img')({
  
  display: 'block',
  maxWidth: '100%',
maxHeight:"100%"
});

export default function ComplexGrid() {
const pram=useParams()
const productList=useSelector((state)=> state.Products.data)


  return (
      <Container >
              <Paper
      sx={{
        p: 2,
          marginTop:"15px",
        maxWidth: 1000,
              flexGrow: 1,
        border:"solid black 1px",
        backgroundColor: (theme) =>
          theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
      }}
    >
      <Grid container spacing={2}>
        <Grid item>
          <ButtonBase sx={{ width: 300, height: 200 }} md={{ width: 240, height: 128 }}>
            <Img alt="complex" src={image}/>
          </ButtonBase>
        </Grid>
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={2} style={{textAlign:"center"}}>
            <Grid item xs>
              <Typography gutterBottom variant="subtitle1" component="div" fontSize={"30px"} fontWeight={700}>
                {productList[pram.id].category}
              </Typography>
              <Typography variant="body2" gutterBottom fontSize={"20px"} fontWeight={700} >
                {productList[pram.id].title}
              </Typography>
              <Typography variant="body2"  fontSize={"20px"} fontWeight={700}>
              {productList[pram.id].price}
              </Typography>
            </Grid>
            <Grid item>
              <Typography sx={{ cursor: 'pointer' }} variant="body2">
                  <BtnVariant productList={productList[pram.id] } />
              </Typography>
            </Grid>
          </Grid>
          <Grid item>
            <Button variant="subtitle1" component="div">
                 ADD <LocalMallIcon style={{ color: "#1976d2" }} />
            </Button>
           
          </Grid>
        </Grid>
      </Grid>
    </Paper>
</Container>
  );
}