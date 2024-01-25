import { Button } from 'react-bootstrap';
import './index.css'
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AppContext } from '../../context';

const Header = () => {
  const { store, setStore } = useContext(AppContext);

  return (
    <nav className="nav-container">
      <Link to="/" className="brand">
        Blog
      </Link>

      <div>
        {
          store.isAuthenticated ?
            <Link to="/logout">
              <Button variant="outline-primary" size='sm'>
                Logout
              </Button>
            </Link> :
            <>
              <Link to="/login">
                <Button variant="outline-primary" size='sm'>
                  Login
                </Button>
              </Link>
              <Link to='/register'>
                <Button variant="outline-primary" size='sm'>
                  Register
                </Button>
              </Link>
            </>
        }
      </div>
    </nav>
  );
}

export default Header;