import React,{Component} from 'react';
import PropType from "prop-types";

class UserSection extends Component {

    render(){
        return(
            <div className='support panel panel-primary'>
                <div className="panel-heading">
                    <strong>Users</strong>
                </div>
                <div className='panel-body users'>
                    <UserList {...this.props} />
                    <UserForm {...this.props} />
                </div>
            </div>
        )
    }
}

UserSection.propTypes = {
    setUserName: PropType.func.isRequired,
    users: PropType.array.isRequired
}



export default UserSection;