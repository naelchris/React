import React,{Component} from 'react';
import PropType from 'prop-types';
import User from './User.jsx';


class UserList extends Component{
    
    
    render(){
        console.log(this.props.users);
        return(
            <ul>
                {
                    this.props.users.map(user => {
                        return (
                            <User
                                userName={user}
                                key={user.id}                                
                            />
                        )
                    })
                }
            </ul>
        )
    }
}

UserList.propType = { 
    users: PropType.array.isRequired
}

export default UserList;