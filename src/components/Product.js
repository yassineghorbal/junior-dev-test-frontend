import React from "react";
import '../scss/product.scss'

const Product = ({ props }) => {
    return (
        <div className="product-container">
            <input type={"checkbox"} className={"delete-checkbox"} />
            <p>{props.sku}</p>
            <p>{props.name}</p>
            <p>{props.price} $</p>
            <p>{props.attribute}: {props.value}</p>
        </div>
    )
}

export default Product