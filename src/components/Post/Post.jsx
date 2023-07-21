import './Post.css'
import { useEffect, useState } from "react"
import { getFilteredProjects } from "../../api/projects"
import { useParams } from "react-router-dom";

// import components
import Header from '../Header/Header'
import SearchBar from '../SearchBar/SearchBar'
import ProjectList from '../ProjectList/ProjectList'
import ProjectDetail from '../ProjectDetail/ProjectDetail'


function Post() {

  const [ projects, setProjects] = useState([])
  const [ selectedProject, setSelectedProject] = useState([])
  let { key } = useParams();


  useEffect(() => {
    const updateProjects = async() => {
      console.log(key)
      let data = await getFilteredProjects(key)
      setProjects(data)
      setSelectedProject(data[0])
    }

    updateProjects()
  }, [key])

  const onClickHandler = (project) => {
    setSelectedProject(project)
  }

  return (
    <>
      < Header/> 
      <main className="sub-pages post">
        < SearchBar />
        <h1> Projects </h1>
        <div className="projects"> 
            < ProjectList projects={projects} onClickHandler={onClickHandler}/>
            < ProjectDetail project={selectedProject}/>
        </div>        
      </main>
    </>
  )
}

export default Post
