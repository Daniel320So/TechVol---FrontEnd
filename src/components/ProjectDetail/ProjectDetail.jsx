import './ProjectDetail.css'

function ProjectDetail( props ) {

  const project = props.project
  return (
    <div className='project-detail'>
      <h2>{project.title}</h2>
      <h3>{project.committed_hour}</h3>
      <h4>Details</h4>
      <p>{project.description}</p>
      <button>Apply</button>
    </div>
  )
}

export default ProjectDetail
