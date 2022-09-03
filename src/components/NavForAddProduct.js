import { NavLink } from 'react-router-dom'
import '../scss/addProduct.scss'

const NavForaddProduct = () => {
    return (
        <nav className="navbar">
            <h2>Product Add</h2>
            <div>
                <button type="submit" id="save-btn">Save</button>
                <NavLink to='/'><button id="cancel-btn">Cancel</button></NavLink>
            </div>
        </nav>
    )
}

export default NavForaddProduct