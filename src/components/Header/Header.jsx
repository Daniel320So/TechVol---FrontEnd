import './Header.css'
import { Link } from "react-router-dom";

function Header() {

  return (
    <header>
        <h2><Link to="../">TechVols</Link></h2>
        <ul>
            <li><Link to="../">Volunteers</Link></li>
            <li>Organizations</li>
        </ul>
    </header>
  )
}

export default Header
