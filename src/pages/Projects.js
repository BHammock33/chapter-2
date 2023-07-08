import { useState, useEffect } from 'react';
import { Link as RouterLink} from 'react-router-dom';
import List from '../Components/List';
import './Projects.css';


function Projects({ userName }) {
    const [loading, setLoading] = useState(true);
    const [projects, setProjects] = useState({});
    useEffect(() => {
        async function fetchData() {
            const data = await fetch(
                `https://api.github.com/users/${userName}/repos`,
            );
            const res = await data.json();
            if (res) {
                setProjects(res);
                setLoading(false);
            }
        }
        fetchData();
    }, [userName]);

    return (
        <div className='Projects-container'>
            <h2>Projects</h2>
            {loading ? (
                <span>Loading....</span>
            ) : (
                <div>
                    
                    <List items={projects.map((project) => ({
                        field: project.name,
                        value: (
                        <RouterLink to={`/projects/${project.name}`} title={project.html_url} >
                        Open Project
                        </RouterLink>
                        ),
                    }))} 
                    /> 
                </div>
            )}
        </div>
    );
}
export default Projects;