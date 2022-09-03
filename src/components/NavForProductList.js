import { NavLink } from 'react-router-dom'
import '../scss/addProduct.scss'

const NavForProductList = () => {
    return (
        <nav className="navbar">
            <h2>Product List</h2>
            <div>
                <NavLink to='/addproduct'><button id='add-btn'>ADD</button></NavLink>
                <button type="submit" id="delete-product-btn" form='all_products'>MASS DELETE</button>
            </div>
        </nav>
    )
}

export default NavForProductList