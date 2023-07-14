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
    <>
      <h2>{project.projectName}</h2>
      <h3>{project.companyName}</h3>
      <div>
        <p>Skills required</p>
        <p>{project.skills}</p>
      </div>
      <div>
        <p>Comitted hours</p>
        <p>{project.hours}</p>
      </div>
      <div>
        <p>Date</p>
        <p>{project.date}</p>
      </div>
    </>
  )
}

export default ProjectCard
