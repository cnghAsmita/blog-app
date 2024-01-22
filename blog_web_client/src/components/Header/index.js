import './index.css'

const Header = () =>{

    const onRegisterBtnClick = () =>{
        
    }

    return (
        <nav className="nav-container"> 
            <div className="brand">
                Blog
            </div>

            <div>
                <button className='btn' >
                    Login
                </button> 
                <button className='btn'
                    onClick={onRegisterBtnClick}
                >
                    Register
                </button>
            </div>
        </nav>
    );
}

export default Header;