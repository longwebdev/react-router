import React, { Component } from 'react';
import { NavLink, Route } from 'react-router-dom';
import Product from './Product';
class Products extends Component {
    render() {
        var products = [
            {
                id : 1,
                slug: 'iphone',
                name : 'Iphone X',
                price : 35000000
            },
            {
                id : 2,
                slug: 'samsung',
                name : 'Samsung Galaxy S7',
                price : 25000000
            },
            {
                id : 3,
                slug: 'oppo',
                name : 'Oppo F1S',
                price : 15000000
            }
        ];

        var { match } = this.props;
        var url = match.url;
        

        var result = products.map( (item, index) => {
            return (
                <NavLink to={`${url}/${item.slug}`}  key={index}>
                <li className="list-group-item">
                  {item.id} - {item.name} - {item.price}      
                </li>
                </NavLink>
            );
        });


        var { location } = this.props;
        console.log(location);
        
        return (
            <div className="container">
                <h1>
                    Danh sách sản phẩm
                </h1>
                
                <div className="row">
                    
                    <ul className="list-group">
                        {result}
                        
                    </ul>
                    
                </div>
                
                <div className="row">
                    <Route path="/products/:slug" component={Product} />
                </div>
                
            </div>
        );
    }
}

export default Products;