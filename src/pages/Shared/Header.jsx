import { Link } from 'react-router-dom';
import cart from '../../../public/cart.png';

const Header = () => {
    return (
        <div className="navbar bg-base-300 rounded-xl mb-4">
            <div className="navbar-start">
                <a className="btn btn-ghost normal-case text-xl">E-Commerce</a>

            </div>
            <div className="navbar-center">


            </div>
            <div className="navbar-end">
                <Link to="/" className='btn btn-success mx-2'>Home</Link>
                {/* <Link to="/about" className='btn btn-success mx-2'>About</Link> */}
                <Link to="/toprated" className='btn btn-success mx-2'>Top Rated</Link>
                <Link to="/dashboard" className='btn btn-success mx-2'>Dashboard</Link>
                <Link to="/carts" className="btn btn-ghost btn-circle mx-2">
                    <div className="indicator">
                        <img src={cart} alt="cart" />
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default Header;