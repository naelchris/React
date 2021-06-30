import React,{Component} from 'react';
import PropType from "prop-types";

class User extends Component {
    onClick(e){
        e.preventDefault();
        // const {setUser, userName} = this.props;
        // setuser(userName);
    }

    render(){
        const {userName} = this.props;

        return(
            <li>
                <a onClick={this.onClick.bind(this)}>{userName.name}</a>
            </li>
        )
    }
}

User.propTypes = {
    userName: PropType.object.isRequired
}



export default User;