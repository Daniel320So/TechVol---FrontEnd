import './ProjectList.css'

// import components
import ProjectCard from '../ProjectCard/ProjectCard'

function ProjectList(props) {
  const projects = props.projects;

  return (
    <div className='project-list'>
      { projects.map( p => {
        return <ProjectCard key={p.title} project={p} onClickHandler={props.onClickHandler} />
      })}
    </div>
  )
}

export default ProjectList
