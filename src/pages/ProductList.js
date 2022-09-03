import axios from "axios";
import React from "react";
import Footer from "../components/Footer";
import Product from "../components/Product";
import '../scss/productsList.scss'

export default class ProductList extends React.Component {
    state = {
        products: []
    }

    componentDidMount() {
        axios.get(`http://127.0.0.1/junior-dev-test-backend/api/read.php`)
            .then(res => {
                const products = res.data.data;
                this.setState({ products });
            })
    }

    render() {
        return (
            <div className="container">
                <nav className="navbar">
                    <h2>Product List</h2>
                    <div>
                        <button type="submit" id="add-btn">ADD</button>
                        <button type="submit" id="delete-product-btn">MASS DELETE</button>
                    </div>
                </nav>
                <hr></hr>
                <div className="products-container">
                    <ul>
                        {
                            this.state.products
                                .map(product =>
                                    <Product key={product.id} props={product} />
                                )
                        }
                    </ul>
                </div>
                <Footer />
            </div>
        )
    }
}