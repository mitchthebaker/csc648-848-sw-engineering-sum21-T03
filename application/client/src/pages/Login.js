import React from 'react';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';

// const Login = () => {

    class Login extends React.Component{
        state={
            Login:'',
            Password:''
        }
    
        handleChange = (e) =>{
            const {name,value} = e.target
            this.setState({[name]:value})
        }
    
        handleSubmit = (e) =>{
            e.preventDefault()
            this.props.isLogin(true)
        }
    render() {
    return (
        <div className="settings-wrapper">
            <NavLink className="nav-link" to="/"> Home </NavLink>
            <NavLink className="nav-link" to="/about"> About </NavLink>
            <NavLink className="nav-link" to="/profile"> Profile </NavLink>
            <h1 className="Login-Title">Login / Sign up</h1>  

            <div className="container-login">
                <form>
                    <label className="label-login">
                        <p>UserName</p>
                        <input type="text" name="Login" placeholder="email..." required onChange={this.handleChange} />
                        <p>Password</p>
                        <input type="text" name="Password" placeholder="password..." required onChange={this.handleChange}/>
                        {/* <input className="Submit-Login" type="submit" value="Submit" name="Submit-Login"/> */}
                       <p> <button onSubmit={this.handleSubmit}>Log In</button> </p>
                    </label>
                </form>
                </div>
                <div className="Sign-Up-LoginContainer">
                    <p>Don't Have an Account? Sign Up Now!  
                    <NavLink className="nav-link" to="/sign_up"> <button onSubmit={this.handleSubmit}>  Sign Up </button> </NavLink> 
                   </p>
                </div>
            
        </div>
    );
    }
}

export default Login;