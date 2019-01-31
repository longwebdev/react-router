import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Menu from './components/Menu';
import routes from './routes';


class App extends Component {
    showContentMenus =  (routes) => {
        var result = null;
        if(routes.length > 0 ){
            result = routes.map( (item, index) => {
                return (
                    <Route 
                    key={index}
                    path={item.path}
                    exact={item.exact}
                    component={item.main}
                    />
                );    
            })
        }
        return result;
    } 
    render() {
        return (
            <Router>
                <div className="App">
                    {/* Menu */}
                    <Menu/>
                    {/* Nội dung */}
                    <Switch>
                        {this.showContentMenus(routes)}
                    </Switch>

                    
                </div>
            </Router>
        );
    }
}

export default App;
