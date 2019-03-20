import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Input from '@material-ui/core/Input';
import Dialog from '@material-ui/core/Dialog';
import { Paper,TextField } from '@material-ui/core';

const styles = theme => ({
  root: {
    width: '90%',
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
  return ['Add Pokemon basic info', 'Add Pokemon Details', 'Summary'];
}


class HorizontalLinearStepper extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      activeStep: 0,
      skipped: new Set(),
      Name: '',
      image: '',
      type: '',
      height: '',
      weight: '',
      catchrate:'',
      gender: ''
  
  
    };
  }
 getStepContent=(step)=> {
    switch (step) {
      case 0: return(
        <Paper style={{height:280}} >
            <br/>
            <TextField 
            label="Name" 
            value = {this.state.Name}
            onChange = {this.handleChangeName} 
            margin="normal"
            variant="outlined"  
           />
          <br/>
            <TextField 
            label="Image" 
            value={this.state.image}
            onChange = {this.handleChangeImage} 
            margin="normal"
            variant="outlined"  
           />
          <br/>
             <TextField 
             label="Type" 
             value={this.state.type}
             onChange = {this.handleChangeType} 
             margin="normal"
             variant="outlined"  
            />
           <br/>
          
           </Paper> 
          );
      case 1:
      return(
        <Paper style={{height:355}} >
        <br/>
             <TextField 
             label="Height" 
             value={this.state.height}
             onChange = {this.handleChangeHeight} 
             margin="normal"
             variant="outlined"  
            />
           <br/>
             <TextField 
             label="Weight" 
             value={this.state.weight}
             onChange = {this.handleChangeWeight} 
             margin="normal"
             variant="outlined"  
            />
           <br/>
              <TextField 
              label="Gender" 
              value={this.state.gender}
              onChange = {this.handleChangeGender} 
              margin="normal"
              variant="outlined"  
             />
            <br/>
            <TextField 
              label="Catch Rate" 
              value={this.state.catchrate}
              onChange = {this.handleChangeCatchRate} 
              margin="normal"
              variant="outlined"  
             />
            <br/>
            </Paper>
         );
      case 2:
      return(
        <Paper style={{height:500}}>
              <div>
              <br/>
                <h1 style={{color:"black"}}>Summary</h1>
                <h1 style={{color:"black",fontSize:15}}>Pokemon Name <br/> {this.state.Name}</h1>
                <h1 style={{color:"black",fontSize:15}}>Pokemon Image <br/><img src={this.state.image} height="70" width="70" ></img></h1> 
                <h1 style={{color:"black",fontSize:15}}>Pokemon Type <br/>{this.state.type}</h1> 
                <h1 style={{color:"black",fontSize:15}}>Pokemon Height <br/>{this.state.height}</h1> 
                <h1 style={{color:"black",fontSize:15}}>Pokemon Weight <br/>{this.state.weight}</h1> 
                <h1 style={{color:"black",fontSize:15}}>Pokemon Gender<br/> {this.state.gender}</h1> 
                <h1 style={{color:"black",fontSize:15}}>Pokemon Catch Rate <br/>{this.state.catchrate}</h1> 
              </div>
              </Paper>
          );
      default:
        return 'Unknown step';
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

  assign_fields=()=>{
    
if(this.state.activeStep===0){
  
}
else if(this.state.activeStep===1){
  
}
else{
  

}
    
  }

  render() {
    const { classes } = this.props;
    const steps = getSteps();
    const { activeStep } = this.state;
    //const Fieldcomp=this.assign_fields;

    return (
      <Dialog
    style={{position: 'relative'}}
        fullScreen
        open="true"
        >
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
                  {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
      </Dialog>
    );
  }
}

HorizontalLinearStepper.propTypes = {
  classes: PropTypes.object,
};

export default withStyles(styles)(HorizontalLinearStepper);