import iconDashboard from '../assests/images/icon-dashboard.svg'

const Header = () => {
    return (
        <div className='header'>
            <img className='header-icon' src={iconDashboard} alt="Logo Monetus"></img>
            <h1 className='header-title'>Dashboard</h1>
        </div>
    )
}

export default Header;