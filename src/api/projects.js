// The file handle the api interaction with backend server



const apiPath = "http://localhost/api/";

// Return an Object Array
// Object => {id, user_id, title, description, status, committed_hour, start_Date, end_date, skills}
// skills => {id, title, description} 
const fetchAllProjects = async() => {
    const response = await fetch(apiPath + "projects");
    const data = await response.json();
    return data;
}

// Return filtered projects by keywords
// filtering includes title, description and skills
const getFilteredProjects = async(keywords) => {
    const allData = await fetchAllProjects()
    if (!keywords) return allData;
    // filter projects by keywords
    let filteredProjects = allData.filter( p => {
        let skillList = p.skills.map( s => s.title);
        keywords = keywords.toLowerCase();
        return p.title.toLowerCase().includes(keywords) || p.description.toLowerCase().includes(keywords) || skillList.toString().toLowerCase().includes(keywords)
    })
    return filteredProjects? filteredProjects : allData;
}

// Return a project by id
const getProjectById = async(id) => {
    const allData = await fetchAllProjects();
    const project = allData.find( p => p.id == id);
    return project
}

// Submit application to the database
const submitApplication = async(project_id, name, email, phone, linkedin, website) => {
    console.log(project_id, name, email, phone, linkedin, website)
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          project_id,
          name,
          email,
          phone,
          linkedin,
          website
    })
    };
    let response = await fetch(apiPath + "applications/add", requestOptions);
    return response.status == 200;
}

export {
    getFilteredProjects,
    getProjectById,
    submitApplication
};