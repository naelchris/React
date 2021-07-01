import React,{Component} from 'react';
import PropType from 'prop-types';

class Message extends Component{
    render(){

        const {message} = this.props;
        console.log(message);
        return(
            <li className="message">
                <div className="author">
                    <strong>{message.author}</strong>
                    <i>{createdAt}</i>
                </div>
                <div classname="body">{message.body}</div>
            </li>
        )
    }
}

Message.propType = {
    message : PropType.object.isRequired
}

export default Message;