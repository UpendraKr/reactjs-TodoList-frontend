// import logo from './logo.svg';
import './App.css';
import Header from './MyComponents/Header';
import {Footer} from './MyComponents/Footer';
import {Todos} from './MyComponents/Todos';
import React, {useState} from 'react';
import {About} from './MyComponents/About';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


function App() {
  const OnDelete = (todo) => {
    console.log("I am ondelete.")

    // Delete todo using State Hook
    setTodos(todos.filter((e)=>{
      return e !== todo;
    }));

  }
  const [todos, setTodos] = useState([
    {
        sno: 1,
        title: "Go to market",
        desc: "Maza aaya"
    },
    {
        sno: 2,
        title: "Go to market",
        desc: "Maza aaya"
    },
    {
        sno: 3,
        title: "Go to market",
        desc: "Maza aaya"
    }
]);
  return (
    <Router>
      <Header title="MyTodoList" searchBar={false}/>
      <Switch>
          <Route exact path="/about">
            <About />
          </Route>

          <Route exact path="/">
          <Todos todos={todos} OnDelete={OnDelete}/>
          </Route>

        </Switch>
    
      <Footer/>
    </Router>
  );

}

export default App;
