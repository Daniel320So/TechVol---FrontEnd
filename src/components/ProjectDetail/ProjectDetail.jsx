import './ProjectDetail.css'
import { useNavigate } from 'react-router-dom';

function ProjectDetail( props ) {
  const navigate = useNavigate();
  const project = props.project;

  const handleApply = () => {
    navigate("/Application/" + project.id);
  }

  if (project) {
    return (    
      <div className='project-detail'>
        <h2>{project.title}</h2>
        <h3>{project.committed_hour}</h3>
        <h4>Details</h4>
        <p>{project.description}</p>
        <button onClick={() => handleApply()}>Apply</button>
      </div>
    )
  } else {
    return (
      <div className='project-detail'></div>
    )
  }

}

export default ProjectDetail
