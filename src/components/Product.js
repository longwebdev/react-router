import React, { Component } from 'react';

class Product extends Component {
    render() {

        var { match } = this.props;
        
        var slug = match.params.slug;
       
        
        return (
            <div>
                <h1>
                    Đây là trang chi tiết sản phẩm {slug}
                </h1>
            </div>
        );
    }
}

export default Product;