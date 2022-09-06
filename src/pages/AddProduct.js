import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import NavForaddProduct from "../components/NavForAddProduct";
import '../scss/addProduct.scss'

function AddProduct() {

    const url_create = 'http://junior-dev-test-backend.22web.org/api/create.php'
    const [data, setData] = useState({
        sku: '',
        name: '',
        price: '',
        attribute: '',
        value: '',
        unit: '',
        size: '',
        weight: '',
        height: '',
        width: '',
        length: '',
    })

    function handleChange(e) {
        const newData = { ...data }
        newData[e.target.name] = e.target.value
        setData(newData)

        if (e.target.value === "Furniture") {
            document.getElementById('dvd-input').style.display = 'none';
            document.getElementById('furniture-input').style.display = 'block';
            document.getElementById('book-input').style.display = 'none';
        }
        else if (e.target.value === "DVD") {
            document.getElementById('dvd-input').style.display = 'block';
            document.getElementById('furniture-input').style.display = 'none';
            document.getElementById('book-input').style.display = 'none';
        }
        else if (e.target.value === "Book") {
            document.getElementById('dvd-input').style.display = 'none';
            document.getElementById('furniture-input').style.display = 'none';
            document.getElementById('book-input').style.display = 'block';
        }
    }

    let navigate = useNavigate()

    function handleSubmit(e) {
        e.preventDefault()
        let product = {
            sku: data.sku,
            name: data.name,
            price: data.price,
            attribute: data.attribute,
            value: data.value,
            unit: data.unit
        }
        if (data.attribute === 'DVD') {
            product.value = data.size
            product.unit = 'MB'
            product.attribute = 'Size'
        } else if (data.attribute === 'Furniture') {
            product.value = `${data.height}x${data.width}x${data.length}`
            product.unit = ''
            product.attribute = 'Dimension'
        } else if (data.attribute === 'Book') {
            product.value = data.weight
            product.unit = 'KG'
            product.attribute = 'Weight'
        }

        // sending data using axios
        if (product.sku.length > 0 && product.name.length > 0 && product.price.length > 0 && product.attribute.length > 0 && product.value.length > 0) {
            axios.post(url_create, product)
                .then(res => {
                    console.log(res);
                    console.log(res.data);
                    return navigate('/')
                })
        } else {
            document.getElementById('error').style.display = 'block'
        }


    }
    return (
        <div className="container" >
            <NavForaddProduct />
            <hr></hr>
            <form id="product_form" onSubmit={(e) => handleSubmit(e)}>
                {/* Error Messages */}
                <p id="error">Please, submit required data</p>
                <p id="sku_error">This SKU code already exists</p>

                <label>
                    <p>SKU</p>
                    <input type="text" name="sku" id="sku" onChange={(e) => handleChange(e)} value={data.sku} />
                </label>
                <label>
                    <p>Name</p>
                    <input type="text" name="name" id="name" onChange={(e) => handleChange(e)} value={data.name} />
                </label>
                <label>
                    <p>Price</p>
                    <input type="number" name="price" id="price" onChange={(e) => handleChange(e)} value={data.price} />
                </label>
                <label>
                    <p>Type Switcher</p>
                    <select id="productType" name="attribute" onChange={(e) => handleChange(e)} >
                        <option>select</option>
                        <option id="DVD">DVD</option>
                        <option id="Furniture">Furniture</option>
                        <option id="Book">Book</option>
                    </select>
                </label>
                <div id="dvd-input">
                    <label>
                        <p>Size (MB)</p>
                        <input type="number" id="size" name="size" onChange={(e) => handleChange(e)} value={data.size} />
                    </label>
                    <p className="description">Please, provide size</p>
                </div>

                {/* Furniture Input Start */}
                <div id="furniture-input">
                    <label>
                        <p>Height (CM)</p>
                        <input type="number" id="height" name="height" onChange={(e) => handleChange(e)} value={data.height} />
                    </label>
                    <label>
                        <p>Width (CM)</p>
                        <input type="number" id="width" name="width" onChange={(e) => handleChange(e)} value={data.width} />
                    </label>
                    <label>
                        <p>Length (CM)</p>
                        <input type="number" id="length" name="length" onChange={(e) => handleChange(e)} value={data.length} />
                    </label>
                    <p className="description">Please, provide dimensions in HxWxL format</p>
                </div>
                {/* Furniture Input End */}

                <div id="book-input">
                    <label>
                        <p>Weight (KG)</p>
                        <input type="number" id="weight" name="weight" onChange={(e) => handleChange(e)} step='0.01' value={data.weight} />
                    </label>
                    <p className="description">Please, provide weight</p>
                </div>
            </form>
            <Footer />
        </div>
    )
}

export default AddProduct