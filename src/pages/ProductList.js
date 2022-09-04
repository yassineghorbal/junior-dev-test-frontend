import axios from "axios";
import React from "react";
import Footer from "../components/Footer";
import NavForProductList from "../components/NavForProductList";
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
                <NavForProductList />
                <hr></hr>
                <div className="products-container">
                    <form action="http://localhost/junior-dev-test-backend/api/delete.php" method="POST" id="all_products">
                        <ul>
                            {
                                this.state.products
                                    .map(product =>
                                        <Product key={product.id} props={product} />
                                    )
                            }
                        </ul>
                    </form>
                </div>
                <Footer />
            </div>
        )
    }
}