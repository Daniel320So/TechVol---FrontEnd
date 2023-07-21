import './SearchBar.css'
import { useNavigate } from 'react-router-dom';

function SearchBar() {
  const navigate = useNavigate();

  const handleSubmit = event => {
    event.preventDefault();
    navigate("/post/" + event.target.elements.key.value);
  }

  return (
    <form className="search-bar" onSubmit={handleSubmit}>
        <input className="search-key" type="text" name="key" placeholder="keyword"></input>
        {/* <label> | </label>
        <input className="search-location" type="text" name="locations" placeholder="location"></input> */}
        <input className="search-submit" type="submit" value="Search"></input>
    </form>
  )
}

export default SearchBar
