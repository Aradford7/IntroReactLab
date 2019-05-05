import React from 'react';
import './App.css';
import Post from './Post';
import Comment from './Comment';



//this is a component big function that return ui
function App() {
  return(
    <div className = "App">
      <Post title = {"Harry Potter"} 
            author = {"JK Rowling"} 
            body ={["You're a wizard, Harry - Hagrid.", <br/>,"I am the best - Voldemort."]} />
      <Comment />
    </div>
  )
}

export default App;