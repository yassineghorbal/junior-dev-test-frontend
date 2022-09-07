import axios from "axios";
import React from "react";
import Footer from "../components/Footer";
import NavForProductList from "../components/NavForProductList";
import Product from "../components/Product";
import '../scss/productsList.scss'

export default class ProductList extends React.Component {

    url_read = 'https://junior-dev-test-api.000webhostapp.com/api/read.php'
    url_delete = 'https://junior-dev-test-api.000webhostapp.com/api/delete.php'

    state = {
        products: [],
        id: '',
        ids: []
    }

    // create produt using axios
    componentDidMount() {
        axios.get(this.url_read)
            .then(res => {
                const products = res.data.data;
                this.setState({ products });
            }).catch(error => console.log(error))
    }

    // delete product
    handleChange = e => {
        this.setState({ id: e.target.value });
        if (!this.state.ids.includes(e.target.value)) {
            this.state.ids.push(e.target.value);
        } else {
            let i = this.state.ids.indexOf(e.target.value)
            this.state.ids.splice(i, 1);
        }
        console.log(this.state.ids);
    }

    handleSubmit = e => {
        e.preventDefault();
        let ids = this.state.ids
        if (ids.length > 0) {
            for (let i = 0; i < ids.length; i++) {
                axios.delete(this.url_delete, {
                    data: {
                        "id": ids[i]
                    },
                    headers: {
                        "Content-Type": "application/json"
                    }
                }).catch(error => console.log(error))
            }
            axios.get(this.url_read)
                .then(res => {
                    const products = res.data.data;
                    this.setState({ products });
                }).catch(error => console.log(error))
        } else {
            return
        }

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
                                this.state.products?.map(product =>
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