import {useMemo, useState, useReducer, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';

function Childcomp(props){
  return <div>
    <p>We are using props</p>
    <p> The name is {props.name}</p>
    <p>The Occupation is {props.occ}</p>
  </div>
}
function App() {
  
  return (
    <div className="App">
{
  <Childcomp name ="Saif" occ ="Developer"/>

    </div>
  );
}

export default App;
