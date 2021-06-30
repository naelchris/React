import React,{Component} from 'react';
import PropType from "prop-types";

class UserForm extends Component {
    
    onSubmit(e){
        console.log("hello")
        e.preventDefault();
        const node = this.refs.userName;
        const userName = node.value;
        this.props.setUserName(userName);
        node.value = '';
    }

    render(){
        return(
            <form onSubmit={this.onSubmit.bind(this)}>
                <div className="form-group">
                    <input 
                    type="text"
                    ref="userName"
                    className="form-control"
                    placeholder="Set Your Name..."
                    />
                </div>
            </form>
        )
    }
}

UserForm.propTypes = {
    setUserName: PropType.func.isRequired
}



export default UserForm;