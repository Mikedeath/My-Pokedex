import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import { BrowserRouter, Route, Switch,Link } from 'react-router-dom';
import { Redirect } from 'react-router-dom'
import { withRouter } from 'react-router'
import Paper from '@material-ui/core/Paper';
import FormControl from '@material-ui/core/FormControl';
import purple from '@material-ui/core/colors/purple';
import green from '@material-ui/core/colors/green';
import Image from '../images/p2.png';
import '../App.css';
import BackgroundHeader from "../images/p3.png"


const styles = {
    paperContainer: {
        backgroundImage: `url(${Image})`,
        height: 600,
        width:600
        
        

        

    }
};
class login extends Component{
constructor(props){
    super(props);

    this.state={
        user:'',
        pass:'',
        email:'',

        users_list:[
            {userName:'Ash Ketchum', userEmail:'ash@pokemon.com', password: 'pokedex'}, 
            {userName: 'Misty', userEmail:'misty@pokemon.com', password: 'paleta'} 
        ]
    };

}


handleClick(event){
if(this.state.users_list[0].userName===this.state.user && this.state.users_list[0].userEmail===this.state.email && this.state.users_list[0].password===this.state.pass){
    this.props.history.push("/FullScreenDialog");
    

}
else if(this.state.users_list[1].userName===this.state.user && this.state.users_list[1].userEmail===this.state.email && this.state.users_list[1].password===this.state.pass){
   
    this.props.history.push("/FullScreenDialog");
}
else{
    return "Input the correct data"
}
}

handleChangeUser(event) {
    this.setState({user: event.target.value})
  }

  handleChangeEmail(event) {
    this.setState({email: event.target.value})
  }

  handleChangePass(event) {
    this.setState({pass: event.target.value})
  }

render(){
    return(
        

<header className="bkground-login" >

<Paper  

style={{
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft:200,
    paddingRight:200,
    height:500,
    width:300,
   //backgroundImage: 'url('+ BackgroundHeader+')',
    boxShadow: '0 3px 5px 2px #212121'
}}>



    <h1 style={{color: 'black',textAlign: 'Center', fontSize:50}} >POKEDEX</h1>

    <div> 

    <TextField 
      label="Username" 
      onChange = {(event) =>this.handleChangeUser(event)} 
      margin="normal"
      variant="outlined"  
     />
    <br/>
     
    <TextField  
    label="Email" 
    onChange={(event) =>this.handleChangeEmail(event)}
    margin="normal"
    variant="outlined"  
    
    />
    <br/>
   
    <TextField 
    
    label="Password" 
    onChange={(event) =>this.handleChangePass(event)}
    margin="normal"
    variant="outlined" 
    
    />
    <br/>
    <span>&nbsp;&nbsp;</span>
    </div>
    
    <Button  
    variant="contained" 
    align="right" 
    onClick={(event) => this.handleClick(event)}
    style={{
        background: 'linear-gradient(45deg, #d32f2f 30%,  #f44336 90%)',
        borderRadius: 3,
        border: 0,
        color: 'white',
        fontSize:'19px',
        height: 48,
        padding: '0 30px',
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    }}
    >
    Login
    </Button> 
    <br/>  
    <br/>  
  
  
 
    
    </Paper>
    </header>
    
    );
}


}

export default login;