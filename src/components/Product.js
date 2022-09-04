import React from "react";
import '../scss/product.scss'

const Product = ({ props }) => {
    return (
        <div className="product-container">
            <input type={"checkbox"} className={"delete-checkbox"} value={props.id} />
            <p>{props.sku}</p>
            <p>{props.name}</p>
            <p>{props.price} $</p>
            <p>{props.attribute}: {props.value} {props.unit}</p>
        </div>
    )
}

export default Product