import React, {Component} from 'react';
import PropType from 'prop-types';

class MessageList extends Compoennt{
    render(){
        return(
            <ul>
                {
                    this.props.messages.map(message => {
                        return(
                            <Message 
                            message={message}
                            key={message.id}
                            />
                        )
                    })
                }
            </ul>
        )
    }
}

MessageList.propType = {
    messages : PropType.array.isRequired
}

export default MessageList;