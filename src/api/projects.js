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
        return p.title.includes(keywords) || p.description.includes(keywords) || skillList.includes(keywords)
    })
    return filteredProjects;

}

export {
    getFilteredProjects
};