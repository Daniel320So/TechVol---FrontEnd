import { useState } from 'react'
import './Application.css'

// import components
import Header from '../Header/Header'
import SearchBar from '../SearchBar/SearchBar'

let project = {
  projectName: "Project 1",
  companyName: "Company 1",
  skills: "Js, SQL",
  hours: "30",
  date: "1/1/2021",
  description: "This is a long text"
}

function Application() {

  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({ ...values, [name]: value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(inputs);
  }

  return (
    <>
      < Header />
      <main className="sub-pages applicaction">
        < SearchBar />
        <h1>{project.projectName}</h1>
        <div className="application-container">
          <form className="application-form" onSubmit={handleSubmit}>
            <div className='application-form-container'>
              <div className="application-form-field">
                <label htmlFor='applicantName'>Name</label>
                <input
                    type="text"
                    name="applicantName"
                    value={inputs.applicantName || ""}
                    onChange={handleChange}
                  />
              </div>
              <div className="application-form-field">
                <label htmlFor='applicantEmail'>Email</label>
                <input
                    type="text"
                    name="applicantEmail"
                    value={inputs.applicantEmail || ""}
                    onChange={handleChange}
                  />
              </div>
              <div className="application-form-field">
                <label htmlFor='applicantPhone'>Phone Number</label>
                <input
                    type="text"
                    name="applicantPhone"
                    value={inputs.applicantPhone || ""}
                    onChange={handleChange}
                  />
              </div>
              <div className="application-form-field">
                <label htmlFor='portfolio'>Portfolio Url</label>
                <input
                    type="text"
                    name="portfolio"
                    value={inputs.portfolio || ""}
                    onChange={handleChange}
                  />
              </div>
            </div>
            <input className="application-submit" type="submit" />
          </form>
          <div className='application-detail'>
            <h3>{project.companyName}</h3>
            <h4>Details</h4>
            <p>{project.description}</p>
            <div className='application-description'>
              <div className='application-description-left'>
                <p>Skills required</p>
                <p>Comitted hours</p>
                <p>Date</p>
              </div>
              <div className='application-description-right'>
                <p>{project.skills}</p>
                <p>{project.hours}</p>
                <p>{project.date}</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default Application
