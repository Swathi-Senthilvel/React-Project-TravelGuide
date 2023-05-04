import React, { Component } from 'react'
import {Grid, Paper, Typography,Box,Button} from '@mui/material'

export default class Food extends Component {
  render() {
    return (
      <div style={{backgroundImage:'url(../foodbg.jpg)',height:'110vh',
      marginTop:'0px',
      padding:'0px',
      fontSize:'50px',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      opacity:'01'}}>
      
      <Typography><h1 align="center" style={{color:'whitesmoke'}}>FOOD</h1></Typography>
        <Grid align="center" padding={"50px"} marginBottom="100px">
          <Paper variant='outlined' style={{width:'1200px',height:'695px', borderRadius:'20px' ,opacity:'0.8'}}>
          <Typography><h4 align="center">SELECT YOUR CUISINE</h4></Typography>
            <div style={{display: 'flex',
                  flexWrap: 'wrap',
                  padding: '0px 4px'}}>
              <div style={{flex: '10%', padding: '0 4px'}}>
                <Box 
                    component="img"
                      sx={{
                        display:'inline-block',
                        marginTop:'40px',
                        height:'200px',
                        width: '200px',
                        opacity:'1',
                        borderRadius:'50%'
                      }}
                        src="Southindian.jpg" 
                        alt="South Indian"
                />   
                <Typography style={{marginRight:'10px',marginBottom:'10px',padding:'0px'}}><Button variant="contained" size="large" color='secondary'>SOUTH INDIAN</Button></Typography>
              </div>
              <div style={{flex: '10%', padding: '0 4px'}}>
                <Box 
                    component="img"
                      sx={{
                        marginTop:'40px',
                        height:'200px',
                        width: '200px',
                        opacity:'1',
                        borderRadius:'50%'
                      }}
                        alt="North Indian"
                        src="https://media.gettyimages.com/id/1330689699/photo/chana-masala-dish.jpg?s=612x612&w=0&k=20&c=qZgHFGIjebYH0F7DwdnfTQ6oggUkpcN0300rvy_EbZ8="
                />   
                <Typography style={{marginRight:'10px',marginBottom:'10px',padding:'0px'}}><Button variant="contained" size="large" color='secondary'>NORTH INDIAN</Button></Typography>
              </div>
              <div style={{flex: '10%', padding: '0 4px'}}>
                <Box 
                    component="img"
                      sx={{
                        marginTop:'40px',
                        height:'200px',
                        width: '200px',
                        opacity:'1',
                        borderRadius:'50%'
                      }}
                        alt="Punjabi Cuisine"
                        src="https://st3.depositphotos.com/16173130/18766/i/450/depositphotos_187664618-stock-photo-rajasthani-maharaja-thaali-pune.jpg"
                />   
                <Typography style={{marginRight:'10px',marginBottom:'10px',padding:'0px'}}><Button variant="contained" size="large" color='secondary'>PUNJABI</Button></Typography>
              </div>
            </div>
            <div style={{display: 'flex',
                  flexWrap: 'wrap',
                  marginTop:'0px',
                  padding: '0px 170px'}}>
              <div style={{flex: '10%', padding: '0 4px'}}>
                <Box 
                    component="img"
                      sx={{
                        display:'inline-block',
                        marginTop:'40px',
                        height:'200px',
                        width: '200px',
                        opacity:'1',
                        borderRadius:'50%'
                        }}
                        src="https://media.istockphoto.com/id/1266090981/photo/spicy-fish-curry-popular-indian-seafood-served-with-rice.jpg?s=612x612&w=0&k=20&c=t2tbglRBio7r3-XTR9GYxVX9XuCrhLlb-wDG0h-oqWo=" 
                        alt="Bengali Cuisine"
                />   
                <Typography style={{marginRight:'10px',marginBottom:'10px',padding:'0px'}}><Button variant="contained" size="large" color='secondary'>BENGALI</Button></Typography>
              </div>
              <div style={{flex: '10%', padding: '0 4px'}}>
                <Box 
                    component="img"
                      sx={{
                        marginTop:'40px',
                        height:'200px',
                        width: '200px',
                        opacity:'1',
                        borderRadius:'50%'
                      }}
                        alt="Kerala Cuisine"
                        src="https://media.istockphoto.com/id/838927480/photo/onam-sadya-on-a-banana-leaf.jpg?s=612x612&w=0&k=20&c=gwLv5UccfysMWJn2nEPXoQfczkCTBylrmenTmHonHrc="
                />   
                <Typography style={{marginRight:'10px',marginBottom:'10px',padding:'0px'}}><Button variant="contained" size="large" color='secondary'>KERALA</Button></Typography>
              </div>
            </div>
          </Paper>
        </Grid>

      </div>
    )
  }
}