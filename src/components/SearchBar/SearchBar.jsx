import './SearchBar.css'

function SearchBar() {

  return (
    <form className="search-bar">
        <input className="search-key" type="text" name="key" placeholder="keyword"></input>
        <label> | </label>
        <input className="search-location" type="text" name="locations" placeholder="location"></input>
        <input className="search-submit" type="submit" value="Search"></input>
    </form>
  )
}

export default SearchBar
