import './ProjectDetail.css'


let project = {
  projectName: "Set up SQL Database and API Server",
  companyName: "Children Care Community",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nis Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nis"
}

function ProjectDetail() {

  return (
    <div className='project-detail'>
      <h2>{project.projectName}</h2>
      <h3>{project.companyName}</h3>
      <h4>Details</h4>
      <p>{project.description}</p>
      <button>Submit</button>
    </div>
  )
}

export default ProjectDetail
