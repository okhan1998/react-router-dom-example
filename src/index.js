import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { render } from "react-dom";
import {
  HashRouter,
  Routes,
  Route,
  Outlet, 
  Link,
  NavLink,
  useParams
} from "react-router-dom";

function Home(){
  return(
    <div>
      <h2>Home</h2>
      Home...
    </div>
  )
}

function Contact(){
  return(
    <div>
      <h2>Contact</h2>
      Contact...
    </div>
  )
}

let contents = [
  {id:1, title:'HTML', description:'HTML is ...'},
  {id:2, title:'JS', description:'JS is ...'},
  {id:3, title:'REACT', description:'REACT is ...'}
]

function Topic() {
  let params = useParams();
  let topic_id = params.topic_id;
  let selected_topic = {
    title:'Sorry',
    description: 'Not Found'
  }
  for(let i = 0; i<contents.length; i++){
    if(contents[i].id === +topic_id){
      selected_topic = contents[i];
      break;
    }
  }
  console.log(params);
  return (
    <div>
      <h3>{selected_topic.title}</h3>
      {selected_topic.description}
    </div>
  )

}


function Topics(){
  let lis = [];
  for(let i = 0; i<contents.length; i++){
    lis.push(<li><NavLink to={'/topics/'+contents[i].id}>{contents[i].title}</NavLink></li>)
  }
  return(
    <div>
      <h2>Topics</h2>
      <ul>
        {lis}
      </ul>
      <Outlet/>
      
    </div>
    
  )
}


function App(){
  return (
    <div>
      <h1>React Router DOM example</h1>
      <ul>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/topics">Topics</NavLink></li>
        <li><NavLink to="/contact">Contact</NavLink></li>
      </ul>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/topics" element={<Topics />} >
          <Route path="/topics/:topic_id" element={<Topic />}/>
        </Route>
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <HashRouter><App /></HashRouter>
  </React.StrictMode>,
  document.getElementById('root')
);