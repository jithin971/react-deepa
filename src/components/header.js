import { Link } from "react-router-dom"

const Header = () => {

    const listStyle = {
        listStyle: 'none',
        display: 'flex'
    }
    const listItem = {
        marginRight: '1rem'
    }

    return (
        <div>
            <ul style={listStyle}>
                <li style={listItem}>
                    <Link to="/">Home</Link>
                </li>
                <li style={listItem}>
                    <Link to='/about'>about</Link>
                </li>
            </ul>
        </div>
    )
}

export default Header