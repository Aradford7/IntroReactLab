import React, {Component} from 'react';
//Load in Post component


//create post class..Components always captialize
class Post extends Component {
    render(){
        return(
            <div>
                <h1>{this.props.title}</h1>
                <p>By {this.props.author}</p>
                <div>
                    <p>{this.props.body}</p>
                </div>
                <h3>Comments:</h3>
                </div>

        );
    }
}
export default Post;