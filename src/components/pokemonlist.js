import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import { BrowserRouter, Route, Switch,Link } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import { withRouter } from 'react-router';

import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import storedPokemon from '../components/storedPokemon';


class pokemonlist extends Component{
    constructor(props){
        super(props);
        this.listItem=this.listItem.bind(storedPokemon);
        };

 
listItem(storedPokemon){
     return (

     <Paper style={{}} >
     <h1 
     style={{padding:10, margin:10, fontSize:20,color:"black"}} 
     key={storedPokemon.name}> 
     
     <img src={storedPokemon.photoUrl} height="70" width="70"></img>
     <br/>
     {storedPokemon.name}
     <br/>
     {storedPokemon.type}
     <br/>
     {storedPokemon.catch_rate}
     </h1>
     </Paper>
 
     )}

    render(){

        return(
            <div >
          {storedPokemon.map(this.listItem)}
          <Button component={Link} to='/addpokemon'  
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
    Add Pokemon </Button>
            </div>
       
        );
    }
    



}
export default pokemonlist;
  
