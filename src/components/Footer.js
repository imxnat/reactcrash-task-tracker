import { Link, useLocation } from "react-router-dom"

const Footer = () => {

    const location = useLocation()

    return (
        <footer>
            <p>Nathalie Rivas &copy; 2021</p>

            {location.pathname === '/about' && <a style={{textDecoration: 'none', color: 'pink', lineHeight: '4rem'}} href='http://twitter.com/imxnat' target='_blank' rel="noreferrer" >[ Dev 🥰 ]</a>}

            {location.pathname === '/' && <Link className="link" to="/about">About</Link>}
        </footer>
    )
}

export default Footer
