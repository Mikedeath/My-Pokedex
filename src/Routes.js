import React from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import login from "./components/login";
import pokemonlist from "./components/pokemonlist";
import addpokemon from "./components/addpokemon";
import FullScreenDialog from "./components/FullScreenDialog";


const Routes = () => (
<BrowserRouter>
<div>
  <Switch>
    <Route path="/" exact component={login} />
    <Route path="/pokemonlist" component={pokemonlist} />
    <Route path="/addpokemon"component={addpokemon} />
    <Route path="/FullScreenDialog"component={FullScreenDialog} />
 
  </Switch>
</div>
</BrowserRouter> );

export default Routes;