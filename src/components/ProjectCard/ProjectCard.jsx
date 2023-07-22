import './ProjectCard.css'

function ProjectCard(props) {
  const project = props.project;
  const skills = project.skills.map( s => s.title).toString();


  return (
    < div className="project-card" onClick={() => props.onClickHandler(project)}>
      <h2>{project.title}</h2>
      <h3>{project.company_name}</h3>
      <div className='project-card-description'>
        <div className='project-card-description-left'>
          <p>Skills required</p>
          <p>Comitted hours</p>
          <p>Date</p>
        </div>
        <div className='project-card-description-right'>
          <p>{skills}</p>
          <p>{project.committed_hour}</p>
          <p>{project.start_date + "-" +  project.end_date}</p>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard
