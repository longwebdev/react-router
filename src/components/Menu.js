import React, { Component } from 'react';
import {  Route, Link } from 'react-router-dom';

const menus = [
    {
        name : 'Trang Chủ',
        to : '/',
        exact : true
    },
    {
        name : 'Giới Thiệu',
        to : '/about',
        exact : false
    },
    {
        name : 'Liên Hệ',
        to : '/contact',
        exact : false
    },
    {
        name : 'Sản Phẩm',
        to : '/products',
        exact : false
    },
    {
        name : 'Đăng Nhập',
        to : '/login',
        exact : false
    }
];


const MenuLink =  ({ label, to, activeOnlyWhenExact }) => {
    return (
        <Route 
        path={to}
        exact={activeOnlyWhenExact}
        children={
             ({ match }) => {
                 var active = match ? 'active abc' : '';
                 return (
                    <li className={active}>
                        <Link to={to}>{label}</Link>
                    </li>
                 );
             } 
        }
        />
    );
} 

class Menu extends Component {
    showMenus =  (menus) => {
        var result = null;
        if(menus.length > 0){
            result = menus.map( (item, index) => {
                return (
                    <MenuLink 
                    key={index} 
                    label={item.name}
                    to={item.to}
                    activeOnlyWhenExact={item.exact}
                    />
                );
            });
        }
        return result;
    } 
    render() {
        return (
            <nav className="navbar navbar-default">

                <ul className="nav navbar-nav">
                    {this.showMenus(menus)}
                    

                </ul>
            </nav>
        );
    }
}

export default Menu;