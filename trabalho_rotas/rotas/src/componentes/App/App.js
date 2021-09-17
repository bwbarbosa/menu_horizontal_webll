import React from 'react'
import './App.css';


import Inicio from '../Inicio/Inicio.jsx'
import Menu2 from '../Menu2/Menu2.jsx'
import Menu3 from '../Menu3/Menu3.jsx'
import Menu4 from '../Menu4/Menu4.jsx'
import Parra from '../Parra/Parra.jsx'
import Pacaembu from '../Pacaembu/Pacaembu.jsx'
import Projeto from '../Projeto/Projeto.jsx'
import Perplan from '../Perplan/Perplan.jsx'
import MRV from '../MRV/MRV.jsx'





import { Route, Switch} from 'react-router'

function App() {
  return (
    <div>

      

    <main>
        <Switch>
          <Route exact path = "/" render = {(props) => <Inicio/>}></Route>
          <Route exact path = "/Pacaembu" render = {(props) => <Menu2/>}></Route>
          <Route exact path = "/VillaDiCapri" render = {(props) => <Menu3/>}></Route>
          <Route exact path = "/ProjetosModelo" render = {(props) => <Menu4/>}></Route>
          <Route exact path = "/Parra" render = {(props) => <Parra/>}></Route>
          <Route exact path = "/Pacaembu" render = {(props) => <Pacaembu/>}></Route>
          <Route exact path = "/Projeto" render = {(props) => <Projeto/>}></Route>
          <Route exact path = "/Perplan" render = {(props) => <Perplan/>}></Route>
          <Route exact path = "/MRV" render = {(props) => <MRV/>}></Route>
          <Route exact path = "/Menu2" render = {(props) => <Menu2/>}></Route>

          
          

        </Switch>

      </main>

    </div>
  );
}


export default App;
