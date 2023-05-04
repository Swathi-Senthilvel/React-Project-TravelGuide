import React, { Component } from 'react'
import {Grid, Paper, Typography,Box, Button} from '@mui/material'


export default class Choice extends Component {
  render() {
    return (
      <div style={{backgroundImage:'url(Tbg.jpg)',height:'110vh',
      marginTop:'0px',
      padding:'0px',
      fontSize:'50px',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      opacity:'0.9'}}>
      <Typography><h1 align="center">TYPES OF TRANSPORT</h1></Typography>
        <Grid align="center" padding={"10px"} marginBottom="100px">
          <Paper variant='outlined' style={{width:'1200px',height:'710px', borderRadius:'20px' ,opacity:'0.8'}}>
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
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStEkqKerg7FIT4r4vvVK0TaKCm0C4lSYjEng&usqp=CAU"
                        alt="car"
                />   
                <Typography style={{marginRight:'10px',marginBottom:'10px',padding:'0px'}}><Button variant="contained" size="large" color='secondary'>CAR</Button></Typography>
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
                        alt="bike"
                        src="bike.jpg"
                />   
                <Typography style={{marginRight:'10px',marginBottom:'10px',padding:'0px'}}><Button variant="contained" size="large" color='secondary'>BIKE</Button></Typography>
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
                        alt="Train"
                        src="https://media.istockphoto.com/id/459595899/photo/canadian-pacific-train-on-railroad.jpg?s=612x612&w=is&k=20&c=QVqryY47Z6eQPpLNuBPHMn3BF4ZkXZPgf2zM7yTOoWM="
                />   
                <Typography style={{marginRight:'10px',marginBottom:'10px',padding:'0px'}}><Button variant="contained" size="large" color='secondary'>TRAIN</Button></Typography>
              </div>
            </div>
            <div style={{display: 'flex',
                  flexWrap: 'wrap',
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
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiYlnJdMX7IJBKoNEf9OT1kKw7lLBa99OtCRGG0YcsrVzZkEtFznYR1m3-FyfRRQiKzvI&usqp=CAU" 
                        alt="flight"
                />   
                <Typography style={{marginRight:'10px',marginBottom:'10px',padding:'0px'}}><Button variant="contained" size="large" color='secondary'>FLIGHT</Button></Typography>
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
                        alt="bus"
                        src="https://images.pexels.com/photos/1178448/pexels-photo-1178448.jpeg?auto=compress&cs=tinysrgb&w=600"
                />   
                <Typography style={{marginRight:'10px',marginBottom:'10px',padding:'0px'}}><Button variant="contained" size="large" color='secondary'>BUS</Button></Typography>
              </div>
            </div>
          </Paper>
        </Grid>
      </div>
    )
  }
}