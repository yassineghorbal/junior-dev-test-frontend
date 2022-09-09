import axios from "axios";
import React from "react";
import Footer from "../components/Footer";
import NavForProductList from "../components/NavForProductList";
import Product from "../components/Product";
import '../scss/productsList.scss'

export default class ProductList extends React.Component {

    state = {
        products: [],
        id: '',
        ids: []
    }

    // get products using axios
    componentDidMount() {
        axios.get("/read")
            .then(res => {
                const products = res.data.data;
                this.setState({ products });
            }).catch(e => {
                if (e.response.status === 404) {
                    document.getElementById('no_products').style.display = 'block';
                }
            })
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
    }

    handleSubmit = e => {
        e.preventDefault();
        let ids = this.state.ids
        if (ids.length > 0) {
            for (let i = 0; i < ids.length; i++) {
                axios.delete("/delete", {
                    data: {
                        "id": ids[i]
                    }
                }).catch(error => console.log(error))
            }
            axios.get("/read")
                .then(res => {
                    const products = res.data.data;
                    this.setState({ products });
                }).catch(e => {
                    if (e.response.status === 404) {
                        document.getElementById('no_products').style.display = 'block';
                    }
                })
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
                    <p id="no_products">No products</p>
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