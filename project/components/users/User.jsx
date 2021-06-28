import React,{Component} from 'react';
import PropType from "prop-types";

class User extends Component {
    onClick(e){
        e.preventDefault();
        const {setUser, userName} = this.props;
        setuser(userName);
    }

    render(){
        return(
            <li>
                <a onClick={this.onClick.bind(this)}>{this.props.userName}</a>
            </li>
        )
    }
}

User.propTypes = {
    userName: PropType.object.isRequired,
    setUser: PropType.func.isRequired
}



export default User;