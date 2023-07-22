import { useEffect, useState } from "react"
import './Application.css'
import { getProjectById } from '../../api/projects'
import { useNavigate } from 'react-router-dom';

// import components
import Header from '../Header/Header'
import SearchBar from '../SearchBar/SearchBar'
import { useParams } from "react-router-dom";

function Application() {

  const { id } = useParams();
  const [project, setProject] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const updateProject = async() => {
      let data = await getProjectById(id);
      setProject(data)
    }

    updateProject()
  }, [id])


  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(event.target.elements.applicantName.value)
  }

  const handleBack = () => {
    navigate(-1);
  }

  return (
    <>
      < Header />
      { project? 
        <main className="sub-pages applicaction">
        < SearchBar />
        <button className="back-button" onClick={handleBack}>back to previous page</button>
        <h1>{project.title}</h1>
        <div className="application-container">
          <form className="application-form" onSubmit={handleSubmit}>
            <div className='application-form-container'>
              <div className="application-form-field">
                <label htmlFor='applicantName'>Name</label>
                <input
                    type="text"
                    name="applicantName"
                  />
              </div>
              <div className="application-form-field">
                <label htmlFor='applicantEmail'>Email</label>
                <input
                    type="text"
                    name="applicantEmail"
                  />
              </div>
              <div className="application-form-field">
                <label htmlFor='applicantPhone'>Phone number</label>
                <input
                    type="text"
                    name="applicantPhone"
                  />
              </div>
              <div className="application-form-field">
                <label htmlFor='linkedin'>Linkedin url</label>
                <input
                    type="text"
                    name="linkedin"
                  />
              </div>
              <div className="application-form-field">
                <label htmlFor='portfolio'>Portfolio url</label>
                <input
                    type="text"
                    name="portfolio"
                  />
              </div>
            </div>
            <input className="application-submit" type="submit" />
          </form>
          <div className='application-detail'>
            <h3>{project.title}</h3>
            <h4>Details</h4>
            <p>{project.description}</p>
            <div className='application-description'>
              <div className='application-description-left'>
                <p>Skills required</p>
                <p>Comitted hours</p>
                <p>Date</p>
              </div>
              <div className='application-description-right'>
                <p>{project && project.skills? project.skills.map( s => s.title).toString() : ""}</p>
                <p>{project.committed_hour}</p>
                <p>{project.start_date + "-" + project.end_date}</p>
              </div>
            </div>
          </div>
        </div>
        </main>
      : <main></main>}
    </> 
  )
}

export default Application
