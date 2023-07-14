import './ProjectDetail.css'


let project = {
  projectName: "",
  companyName: "",
  skills: "",
  hours: "",
  date: ""
}

function ProjectDetail() {

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

export default ProjectDetail
