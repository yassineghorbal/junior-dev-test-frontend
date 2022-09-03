import axios from "axios";
import React from "react";
import Footer from "../components/Footer";
import NavForaddProduct from "../components/NavForAddProduct";
import '../scss/addProduct.scss'

export default class ProductList extends React.Component {

    // form state
    state = {
        sku: '',
        name: '',
        price: '',
        attribute: '',
        value: '',
    };

    showInput(e) {
        if (e.target.value === "DVD") {
            document.getElementById('dvd-input').style.display = 'block';
            document.getElementById('furniture-input').style.display = 'none';
            document.getElementById('book-input').style.display = 'none';
        }
        if (e.target.value === "Furniture") {
            document.getElementById('dvd-input').style.display = 'none';
            document.getElementById('furniture-input').style.display = 'block';
            document.getElementById('book-input').style.display = 'none';
        }
        if (e.target.value === "Book") {
            document.getElementById('dvd-input').style.display = 'none';
            document.getElementById('furniture-input').style.display = 'none';
            document.getElementById('book-input').style.display = 'block';
        }
    }


    handleChange = e => {
        this.setState({ sku: e.target.value });
        this.setState({ name: e.target.value });
        this.setState({ price: e.target.value });
        this.setState({ attribute: e.target.value });
        this.setState({ value: e.target.value });
    }

    handleSubmit = e => {
        e.preventDefault()

        const product = {
            sku: this.state.sku,
            name: this.state.name,
            price: this.state.price,
            attribute: this.state.attribute,
            value: this.state.value
        }

        axios.post('http://localhost/junior-dev-test-backend/api/create.php', { product }).then(res => {
            console.log(res);
            console.log(res.data);
        })
    }

    render() {
        return (
            <div className="container">
                <NavForaddProduct />
                <hr></hr>
                <form id="product_form" onSubmit={this.handleSubmit}>
                    <label>
                        <p>SKU</p>
                        <input type="text" name="sku" id="sku" onChange={this.handleChange} required />
                    </label>
                    <label>
                        <p>Name</p>
                        <input type="text" name="name" id="name" onChange={this.handleChange} required />
                    </label>
                    <label>
                        <p>Price</p>
                        <input type="number" name="price" id="price" onChange={this.handleChange} required />
                    </label>
                    <label>
                        <p>Type Switcher</p>
                        <select id="productType" onChange={this.showInput}>
                            <option>select</option>
                            <option id="DVD">DVD</option>
                            <option id="Furniture">Furniture</option>
                            <option id="Book">Book</option>
                        </select>
                    </label>
                    <div id="dvd-input">
                        <label>
                            <p>Size (MB)</p>
                            <input type="number" name="size" id="size" onChange={this.handleChange} required />
                        </label>
                    </div>
                    {/* <div id="furniture-input">
                        <label>
                            <p>Height (CM)</p>
                            <input type="number" name="height" id="height" onChange={this.handleChange} required />
                        </label>
                        <label>
                            <p>Width (CM)</p>
                            <input type="number" name="width" id="width" onChange={this.handleChange} required />
                        </label>
                        <label>
                            <p>Length (CM)</p>
                            <input type="number" name="length" id="length" onChange={this.handleChange} required />
                        </label>
                    </div>
                    <div id="book-input">
                        <label>
                            <p>Weight (KG)</p>
                            <input type="number" name="weight" id="weight" onChange={this.handleChange} step='0.01' required />
                        </label>
                    </div> */}
                </form>
                <Footer />
            </div>
        )
    }
}