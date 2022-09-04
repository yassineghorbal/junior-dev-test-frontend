import axios from "axios";
import React from "react";
import Footer from "../components/Footer";
import NavForaddProduct from "../components/NavForAddProduct";
import '../scss/addProduct.scss'

export default class AddProduct extends React.Component {

    constructor() {
        super();
        this.state = {
            sku: '',
            name: '',
            price: '',
            attribute: '',
            value: '',
            unit: '',
            // h: '',
            // w: '',
            // l: '',
        };
    }


    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value });
        if (e.target.value === "Furniture") {
            this.setState({ value: `${this.h}X${this.w}X${this.l}` })
            document.getElementById('dvd-input').style.display = 'none';
            document.getElementById('furniture-input').style.display = 'block';
            document.getElementById('book-input').style.display = 'none';

            this.setState({ attribute: "Dimension" });
            this.setState({ unit: "CM" });
        }
        else if (e.target.value === "DVD") {
            document.getElementById('dvd-input').style.display = 'block';
            document.getElementById('furniture-input').style.display = 'none';
            document.getElementById('book-input').style.display = 'none';

            this.setState({ attribute: "Size" });
            this.setState({ unit: "MB" });
        }
        else if (e.target.value === "Book") {
            document.getElementById('dvd-input').style.display = 'none';
            document.getElementById('furniture-input').style.display = 'none';
            document.getElementById('book-input').style.display = 'block';

            this.setState({ attribute: "Weight" });
            this.setState({ unit: "KG" });
        }
    }

    handleSubmit = e => {
        e.preventDefault()

        const product = {
            sku: this.state.sku,
            name: this.state.name,
            price: this.state.price,
            attribute: this.state.attribute,
            value: this.state.value,
            unit: this.state.unit
        }

        axios.post('http://localhost/junior-dev-test-backend/api/create.php', { product }).then(res => {
            console.log(res);
            console.log(res.data);
        })
        console.log(product)
        console.log(this.l);
    }
    render() {
        return (
            <div className="container" >
                <NavForaddProduct />
                <hr></hr>
                <form id="product_form" onSubmit={this.handleSubmit}>
                    <label>
                        <p>SKU</p>
                        <input type="text" name="sku" id="sku" onChange={this.handleChange} />
                    </label>
                    <label>
                        <p>Name</p>
                        <input type="text" name="name" id="name" onChange={this.handleChange} />
                    </label>
                    <label>
                        <p>Price</p>
                        <input type="number" name="price" id="price" onChange={this.handleChange} />
                    </label>
                    <label>
                        <p>Type Switcher</p>
                        <select id="productType" onChange={this.handleChange} >
                            <option>select</option>
                            <option id="DVD">DVD</option>
                            <option id="Furniture">Furniture</option>
                            <option id="Book">Book</option>
                        </select>
                    </label>
                    <div id="dvd-input">
                        <label>
                            <p>Size (MB)</p>
                            <input type="number" id="size" name="value" onChange={this.handleChange} />
                        </label>
                        <p className="description">Please, provide size</p>
                    </div>

                    {/* $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$ */}
                    <div id="furniture-input">
                        <label>
                            <p>Height (CM)</p>
                            <input type="number" id="height" />
                        </label>
                        <label>
                            <p>Width (CM)</p>
                            <input type="number" id="width" />
                        </label>
                        <label>
                            <p>Length (CM)</p>
                            <input type="number" id="length" />
                        </label>
                        <p className="description">Please, provide dimensions</p>
                    </div>
                    {/* $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$ */}

                    <div id="book-input">
                        <label>
                            <p>Weight (KG)</p>
                            <input type="number" id="weight" name="value" onChange={this.handleChange} step='0.01' />
                        </label>
                        <p className="description">Please, provide weight</p>
                    </div>
                </form>
                <Footer />
            </div>
        )
    }
}