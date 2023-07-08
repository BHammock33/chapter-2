import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Link as RouterLink } from 'react-router-dom';
import List from '../Components/List';
import './ProjectDetail.css';

function Project({ userName }) {
    const [loading, setLoading] = useState(false);
    const [project, setProject] = useState([]);
    const { name } = useParams();

    const items = [
        {field: 'Name', value: project.name},
        {field: 'html_url', value: (
            <RouterLink to={`https://github.com/${userName}/${project.name}`} title = {project.name} >
                Go to Project
            </RouterLink> ), },
        {field: 'Created at', value: project.created_at},
        {field: 'Languages', value: project.language}
    ]

    useEffect(() => {
        async function fetchData() {
            const data = await fetch(
                `https://api.github.com/repos/${userName}/${name}`,
            );
            const res = await data.json();

            if (res) {
                setProject(res);
                setLoading(false);
            }
        }
            if ( userName && name ) {
                fetchData();
            }
        }, [ userName, name]);

return(
    <div className ='Project-container'>
        <h2>Project: {project.name}</h2>
        {loading? <span>Loading...</span> : 
        <div>
            <List items = {items} />
        </div>}
    </div>
);
}

export default Project;