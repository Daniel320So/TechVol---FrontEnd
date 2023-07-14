import './Post.css'

// import components
import Header from '../Header/Header'
import SearchBar from '../SearchBar/SearchBar'
import ProjectList from '../ProjectList/ProjectList'
import ProjectDetail from '../ProjectDetail/ProjectDetail'


function Post() {

  return (
    <>
      < Header/> 
      <main className="sub-pages post">
        < SearchBar />
        <h1> Projects </h1>
        <div> 
            < ProjectList />
            < ProjectDetail />
        </div>        
      </main>
    </>
  )
}

export default Post
