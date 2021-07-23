import logo from '../assests/images/logo_512x512.png'
import homepage from '../assests/images/homepage.svg'
const Nav = () => {
    return(
        <aside className="nav">
            <div className="logo-nav">
                <img className="logo-monetus" src={logo} alt="Logo Monetus"></img>
            </div>
            
            <img className="nav-item" src={homepage} alt="Dashboard"></img>
        </aside>
    )
}

export default Nav;