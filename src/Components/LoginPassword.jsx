import React, { Fragment, Component } from "react";

class LoginPassword extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            message: '',
        }
    }

    onSubmit = (e) => {
        e.preventDefault();
        if ((this.state.username === '') || (this.state.message === '')) {
            this.setState({ ...this.state, message: `Fill ${!this.state.username ? 'username' : 'password'} field` });
            return;
        } else {
            console.log('username is ', this.state.username);
            console.log('password is ', this.state.password);
        }
    }

    render() {
        return (
            <Fragment>
                <div className='container'>
                    <form className='form' id='logInForm' onSubmit={event => this.onSubmit(event)}>
                        <div className='username'>
                            <label htmlFor='login'>
                                User Name
                            </label>
                            <input type='text' id='login' value={this.state.username} onChange={event => this.setState({...this.state, username: event.target.value})} placeholder='Type your username'></input>
                        </div>
                        <div className='password'>
                            <label htmlFor='password'>
                                Password
                            </label>
                            <input type='password' id='password' value={this.state.password} onChange={event => this.setState({...this.state, password: event.target.value})} placeholder='Type your password'></input>
                        </div>
                        <button type='submit' form='logInForm'>Log In</button>
                    </form>
                    <div>{this.state.message}</div>
                </div>
            </Fragment>
        )
    }



};

export default LoginPassword;