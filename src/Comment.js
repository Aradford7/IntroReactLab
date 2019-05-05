import React, {Component} from 'react'

class Comment extends Component{
    render (){
        return (
            <div><h3>Comments:</h3>
          
                <p>{this.props.body}</p>
            </div>
        )
    }
}

export default Comment;