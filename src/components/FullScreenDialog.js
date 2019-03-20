import React from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { BrowserRouter, Route, Switch,Link } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import '../App.css';
import Slide from '@material-ui/core/Slide';
import storedPokemon from '../components/storedPokemon';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import BackgroundHeader from "../images/p2.png"
import HorizontalLinearStepper from '../components/HorizontalLinearStepper'
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';


const styles2 = {
  appBar: {
    position: 'relative',
  },
  flex: {
    flex: 1,
  },
};

function Transition(props) {
  return <Slide direction="up" {...props} />;
}
//HLS

const classes = theme => ({
    root: {
      width: '90%',

    },
    root2: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      overflow: 'hidden',
      backgroundColor: theme.palette.background.paper,
    },
    gridList: {
      width: 500,
      height: 450,
    },
    button: {
      marginRight: theme.spacing.unit,
    },
    instructions: {
      marginTop: theme.spacing.unit,
      marginBottom: theme.spacing.unit,
    },
  });

function getSteps() {
    return ['Add Pokemon basic info', 'Add Pokemon Details', 'Confirm'];
  }
  

class FullScreenDialog extends React.Component {
    constructor(props){
        super(props);
        this.listItem=this.listItem.bind(storedPokemon);
       this.state={
        open: false,
      activeStep: 0,
      skipped: new Set(),
      Name: '',
      image: '',
      type: '',
      height: '',
      weight: '',
      catchrate:'',
      gender: '',
    pokelist:[  {
      photoUrl: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png',
      name: 'Bulbasaur',
      type: 'Grass',
      catch_rate:45
    },
  
    {
      photoUrl: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png',
      name: 'Charmander',
      type: 'Fire',
      catch_rate:45
    },
  
    {
      photoUrl: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png',
      name: 'Squirtle',
      type: 'Water',
      catch_rate:45
    },
  
    {
      photoUrl: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png',
      name: 'Pikachu',
      type: 'Electric',
      catch_rate:190
    },
  
    {
      photoUrl: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/152.png',
      name: 'Chikorita',
      type: 'Grass',
      catch_rate:45
    }]
       } 
        };


//HLS //Opens up The dialog and creates
handleClickOpen=()=> {
    this.setState({ open: true });
  }

  listItem=(item)=>{
            return (
            <Paper style={{ height: 200,width: 160 }}  >
            <h1 
            style={{padding:10, margin:10, fontSize:20,color:"black"}} 
            key={item.name}> 
            
            <img src={item.photoUrl} height="70" width="70"></img>
            <br/>
            {item.name}
            <br/>
            {item.type}
            <br/>
            {item.catch_rate}
            </h1>
            </Paper>
            )}

  

  handleClose = () => {
    this.setState({ open: false });
  };
  save_and_finish = () => {
    
    const newPokemon={
      photoUrl:this.state.image,
      name:this.state.Name,
      type:this.state.type,
      catch_rate:this.state.catchrate
    }
    const currentlist=this.state.pokelist;
    currentlist.push(newPokemon);

    this.setState({
    activeStep: 0,
    open: false,
    Name: '',
    image: '',
    type: '',
    height: '',
    weight: '',
    catchrate:'',
    gender: '', 
    pokelist:currentlist
    
  }
    );
  };


  getStepContent=()=> {
    
     if(this.state.activeStep===0) {return(
        <div className="bkground-addpokemon">
        <Paper style={{height:260, width:280,alignContent:"center",alignItems:"center", flexDirection:"column",display:"flex"}} >
        
            <TextField 
            label="Name" 
            value = {this.state.Name}
            onChange = {this.handleChangeName} 
            margin="normal"
            variant="outlined"  
           />
       
            <TextField 
            label="Image" 
            value={this.state.image}
            onChange = {this.handleChangeImage} 
            margin="normal"
            variant="outlined"  
           />
     
             <TextField 
             label="Type" 
             value={this.state.type}
             onChange = {this.handleChangeType} 
             margin="normal"
             variant="outlined"  
            />
            </Paper>
            </div>
          
      
          );
     }
     else if (this.state.activeStep===1){
        return(
            <div className="bkground-addpokemon">
             <Paper style={{height:330, width:280,alignContent:"center",alignItems:"center", flexDirection:"column",display:"flex"}} >
                 <TextField 
                 label="Height" 
                 value={this.state.height}
                 onChange = {this.handleChangeHeight} 
                 margin="normal"
                 variant="outlined"  
                />
              
                 <TextField 
                 label="Weight" 
                 value={this.state.weight}
                 onChange = {this.handleChangeWeight} 
                 margin="normal"
                 variant="outlined"  
                />
             
                  <TextField 
                  label="Gender" 
                  value={this.state.gender}
                  onChange = {this.handleChangeGender} 
                  margin="normal"
                  variant="outlined"  
                 />
               
                <TextField 
                  label="Catch Rate" 
                  value={this.state.catchrate}
                  onChange = {this.handleChangeCatchRate} 
                  margin="normal"
                  variant="outlined"  
                 />   
                 </Paper>
                 </div>
             );
     }
      
     
     else{
        return(
            
                  <div className="bkground-addpokemon">
                   <Paper style={{height:700, width:280,alignContent:"center",alignItems:"center", flexDirection:"column",display:"flex", textAlign:"center"}} >
                  <br/>
                    <h1 style={{color:"black"}}>Your Pokemon</h1>
                    <h1 style={{color:"black",fontSize:15}}>Name <br/> {this.state.Name}</h1>
                    <h1 style={{color:"black",fontSize:15}}>Pokemon Image <br/><img src={this.state.image} height="100" width="100" ></img></h1> 
                    <h1 style={{color:"black",fontSize:15}}>Type <br/>{this.state.type}</h1> 
                    <h1 style={{color:"black",fontSize:15}}>Height <br/>{this.state.height}</h1> 
                    <h1 style={{color:"black",fontSize:15}}>Weight <br/>{this.state.weight}</h1> 
                    <h1 style={{color:"black",fontSize:15}}>Gender<br/> {this.state.gender}</h1> 
                    <h1 style={{color:"black",fontSize:15}}>Catch Rate <br/>{this.state.catchrate}</h1> 
                    </Paper>
                  </div>
                 
              );
     }
     
    
    }
  

    handleChangeName=(event)=>{
        this.setState({Name: event.target.value});
      }
      handleChangeImage=(event)=>{
        this.setState({image: event.target.value});
      }
      handleChangeType=(event)=>{
        this.setState({type: event.target.value});
      }
      handleChangeHeight=(event)=>{
        this.setState({height: event.target.value});
      }
      handleChangeWeight=(event)=>{
        this.setState({weight: event.target.value});
      }
      handleChangeCatchRate=(event)=>{
        this.setState({catchrate: event.target.value});
      }
      handleChangeGender=(event)=>{
        this.setState({gender: event.target.value});
      }
      
      
        isStepOptional = step => step === 1;
      
        handleNext = () => {
          const { activeStep } = this.state;
          let { skipped } = this.state;
          if (this.isStepSkipped(activeStep)) {
            skipped = new Set(skipped.values());
            skipped.delete(activeStep);
          }
          this.setState({
            activeStep: activeStep + 1,
            skipped,
          });
        };
      
        handleBack = () => {
          this.setState(state => ({
            activeStep: state.activeStep - 1,
          }));
        };
      
        handleSkip = () => {
          const { activeStep } = this.state;
          if (!this.isStepOptional(activeStep)) {
            // You probably want to guard against something like this,
            // it should never occur unless someone's actively trying to break something.
            throw new Error("You can't skip a step that isn't optional.");
          }
      
          this.setState(state => {
            const skipped = new Set(state.skipped.values());
            skipped.add(activeStep);
            return {
              activeStep: state.activeStep + 1,
              skipped,
            };
          });
        };
      
        handleReset = () => {
          this.setState({
            activeStep: 0,
          });
        };
      
        isStepSkipped(step) {
          return this.state.skipped.has(step);
        }
  render() {

    const steps = getSteps();
    const { activeStep } = this.state;
    return (
        <div > 
      <GridList cellHeight={160} className={classes.gridList} cols={3}>
        <GridListTile key="Subheader" cols={3} style={{ height: 'auto' }}>
          <ListSubheader component="div" >Pokemons</ListSubheader>
          </GridListTile>
          {this.state.pokelist.map(this.listItem)}

          </GridList>

        <Button //component={Link} to='/addpokemon'  
        variant="contained" 
        align="right" 
        onClick={this.handleClickOpen}
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

  <Dialog
        fullScreen
        open={this.state.open}
        onClose={this.handleClose}
        TransitionComponent={Transition}
      
        > 

        <AppBar  style={{position: 'relative'}}>
        <Toolbar>
          <Button color="inherit" onClick={this.handleClose} aria-label="Close">
          Close
          </Button>
        </Toolbar>
      </AppBar>

      <div className={classes.root}>
        <Stepper activeStep={activeStep}>
          {steps.map((label, index) => {
            const props = {};
            const labelProps = {};
            if (this.isStepOptional(index)) {
              labelProps.optional = <Typography variant="caption">Optional</Typography>;
            }
            if (this.isStepSkipped(index)) {
              props.completed = false;
            }
            return (
              <Step key={label} {...props}>
                <StepLabel {...labelProps}>{label}</StepLabel>
              </Step>
            );
          })}
        </Stepper>
        <div>
          {activeStep === steps.length ? (
            <div>
              <Typography className={classes.instructions}>
                All steps completed - you&apos;re finished
                
              </Typography>
             


              <Button onClick={this.handleReset} className={classes.button}>
                Reset
              </Button>
              <Button onClick={this.save_and_finish} >
              Save & Finish
              </Button>
            </div>
          ) : (
            <div>
              <Typography className={classes.instructions}>{this.getStepContent(activeStep)}</Typography>
              <div>
             
                <br/>
                <Button
                  disabled={activeStep === 0}
                  onClick={this.handleBack}
                  className={classes.button}
                >
                  Back
                </Button>
                {this.isStepOptional(activeStep) && (
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={this.handleSkip}
                    className={classes.button}
                  >
                    Skip
                  </Button>
                )}
                <Button
                  variant="contained"
                  color="primary"
                  onClick={this.handleNext}
                  className={classes.button}
                >
                  {activeStep === steps.length - 1 ? 'Continue' : 'Next'}
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    
      </Dialog>
          </div>
     
    );
  }
}

FullScreenDialog.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(classes)(FullScreenDialog);