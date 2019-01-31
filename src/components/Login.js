import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
class Login extends Component {
    constructor(props) {
        super(props);
        this.state={
            txtUsername : '',
            txtPassword : ''
        };
    }
    onChange =  (event) => {
        var target = event.target;
        var name = target.name;
        var value = target.value === 'checkbox' ? target.checked : target.value;
        this.setState({
            [name] : value
        });   
    } 
    onLogin =  (event) => {
        var { txtUsername, txtPassword } = this.state;
        event.preventDefault(); 
        if(txtUsername === "admin" && txtPassword === "admin"){
            localStorage.setItem('login', JSON.stringify({
                username : txtUsername,
                password : txtPassword
            }));
        }  
    } 
    render() {
        var { txtUsername, txtPassword } = this.state;
        var loggedInUser = localStorage.getItem('login');
        if(loggedInUser !== null){
            var { location } = this.props;
            return <Redirect to={
                {
                    pathname : '/products',
                    state : {
                        from : location
                    }
                }
            } />;
        }
        
       
        
        return (
            <div className="container">

                <div className="row">
                    <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">

                        <form onSubmit={this.onLogin}>
                            <legend>Đăng nhập</legend>

                            <div className="form-group">
                                <label >Username : </label>
                                <input 
                                type="text" 
                                className="form-control"
                                name="txtUsername" 
                                value={txtUsername}
                                onChange={this.onChange}
                                />
                            </div>
                            <div className="form-group">
                                <label >password : </label>
                                <input 
                                type="password" 
                                className="form-control" 
                                name="txtPassword" 
                                value={txtPassword}
                                onChange={this.onChange}
                                />
                            </div>



                            <button type="submit" className="btn btn-primary">Đăng nhập</button>
                        </form>

                    </div>
                </div>

            </div>
        );
    }
}

export default Login;