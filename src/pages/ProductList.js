import axios from "axios";
import React from "react";
import Footer from "../components/Footer";
import NavForProductList from "../components/NavForProductList";
import Product from "../components/Product";
import '../scss/productsList.scss'

export default class ProductList extends React.Component {
    state = {
        products: [],
        id: ''
    }

    // create produt using axios
    componentDidMount() {
        axios.get(`http://127.0.0.1/junior-dev-test-backend/api/read.php`)
            .then(res => {
                const products = res.data.data;
                this.setState({ products });
            })
    }

    // delete product
    handleChange = e => {
        this.setState({ id: e.target.value });
        console.log(e.target.value);
    }

    handleSubmit = e => {
        e.preventDefault();

        axios.delete(`http://localhost/junior-dev-test-backend/api/delete.php`, {
            data: {
                "id": this.state.id
            }
        })
            .then((res) => {
                console.log(res);
                console.log(res.data);
                console.log(this.state.id);
                window.location.reload(false);
            })
    }

    render() {
        return (
            <div className="container">
                <NavForProductList />
                <hr></hr>
                <div className="products-container">
                    <form id="all_products" onSubmit={this.handleSubmit}>
                        <ul>
                            {
                                this.state.products
                                    .map(product =>
                                        <Product key={product.id} props={product} handleChange={this.handleChange} />
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