import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from './../components/Modules/Logo';

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
            {/* <NavLink className="nav-link" to="/"> Home </NavLink>
            <NavLink className="nav-link" to="/about"> About </NavLink>
            <NavLink className="nav-link" to="/profile"> Profile </NavLink> */}
            <Logo />
            <h2 className="Login-Title">Login / Sign up</h2>  
            <p>
            <div className="container-login">
                <form>
                    <label className="label-login">
                        <p>UserName</p>
                        <input type="text" name="Login" placeholder="email..." required onChange={this.handleChange} />
                        <p>Password</p>
                        <input type="text" name="Password" placeholder="password..." required onChange={this.handleChange}/>
                       <p> <button onSubmit={this.handleSubmit}>Log In</button> </p>
                    </label>
                </form>
                </div> </p>
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