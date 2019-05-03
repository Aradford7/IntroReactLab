import React, {Component} from 'react';
//1.bring in React and Component instance from react above!
import logo from './logo.svg';
import './App.css';

class App extends Component{
  state = {
    title: "Harry Potter",//varibles here
    author: "JK Rowling",
    body: "Something about a wizard boy who lived against an Evil Wizard and blah blah",
    comments: ["Voldemort disapprove this"]["You're a wizard Harry -Hagrid"] ["Filthy Mudblud"] }
   updateMethod = () =>
   somemethod({

   }) //method here

  render(){
    console.log('method')
    return(
      <div></div>
    );
  }
}
//2.define our Class (Post in this case) Component
class  Post extends Component{
  //3.what should the component render
  render () {
    //Make sure to return some UI
    return(
      <div>
        <h1>This is Post component {this.props.title} by:{this.props.author}</h1> 
        <h2>{this.props.body}</h2>
        <h3><Comment /></h3>
      </div>
    )
  }
}
//5. Now you have created template for a component, go to src/index.jsto load and 
//render the new component
//6. change 3rd import to import Hello from './App.
//4.export default App;
export default Post
