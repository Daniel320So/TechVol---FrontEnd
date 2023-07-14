import './Home.css'

// import components
import Header from '../Header/Header'
import SearchBar from '../SearchBar/SearchBar'

function Home() {

  return (
    <>
      < Header/> 
      <main>
        <h1>Matching Your Passion with Inspiring Projects</h1>
        < SearchBar />
      </main>
    </>
  )
}

export default Home
