import React, {Component} from 'react';
import ChannelSection from './channels/ChannelSection.jsx';
import UserSection from './users/UserSection.jsx';

class App extends Component{
    constructor(props){
        super(props);
        this.state = {
            channels :[],
            activeChannel: '',
            users:[],
            activeUser:'',
        }
    }

    addChannel(name){
       let {channels} = this.state;
       channels.push({id: channels.length, name});
       this.setState({channels});
        // TODO: send to server

    }

    setChannel(activeChannel){
        this.setState({activeChannel});
    }

    setUserName(userName){
        let {users}  = this.state;
        users.push({id: users.length, name: name});
        this.setState({users});
        //TODO: SEND TO SERVER
    }

    render(){
        return(

            <div className="app">
                <div className="nav">
                    <ChannelSection 
                    {...this.state}
                    addChannel={this.addChannel.bind(this)}
                    setChannel={this.setChannel.bind(this)}
                    />
                </div>
            </div>

            
        )
    }
}

export default App;