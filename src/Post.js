import React, {Component} from 'react';
//Load in Post component


//create post class..Components always captialize
class Post extends Component {
    render(){
        console.log(this.props,'this.props <====')
        return(
            <div>
                <h1>{this.props.title}</h1>
                <p>By {this.props.author}</p>
                <div>
                    <p>{this.props.body}</p>
                </div>
                
            </div>

        );
    }
}
export default Post;