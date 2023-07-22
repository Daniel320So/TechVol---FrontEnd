import './Header.css'
import { Link } from "react-router-dom";
import { getRecruiterLink } from "../../api/projects"

function Header() {

  const directToRecruiter = () => {
    const recruiterLink = getRecruiterLink();
    window.open(recruiterLink, '_blank');
  }

  return (
    <header>
        <h2><Link to="../">TechVols</Link></h2>
        <ul>
            <li><Link to="../">Volunteers</Link></li>
            <li><Link onClick={()=>directToRecruiter()}>Organizations</Link></li>
        </ul>
    </header>
  )
}

export default Header
