import './ProjectCard.css'

let project = {
  projectName: "Project 1",
  companyName: "Company 1",
  skills: "Js, SQL",
  hours: "30",
  date: "1/1/2021"
}

function ProjectCard() {

  return (
    < div className="project-card">
      <h2>{project.projectName}</h2>
      <h3>{project.companyName}</h3>
      <div className='project-card-description'>
        <div className='project-card-description-left'>
          <p>Skills required</p>
          <p>Comitted hours</p>
          <p>Date</p>
        </div>
        <div className='project-card-description-right'>
          <p>{project.skills}</p>
          <p>{project.hours}</p>
          <p>{project.date}</p>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard
