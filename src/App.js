import React, {Component} from 'react';
//1.bring in React and Component instance from react above!
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
   
    </div>
  );
}

//2.define our Class (Post in this case) Component
class  Post extends Component{
  //3.what should the component render
  render () {
    //Make sure to return some UI
    return(
      <h1>This is Post component</h1>
    )
  }
}
//5. Now you have created template for a component, go to src/index.jsto load and 
//render the new component
//6. change 3rd import to import Hello from './App.
//4.export default App;
export default Post
