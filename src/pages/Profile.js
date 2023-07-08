import { useState, useEffect } from 'react';
import { Link as RouterLink} from 'react-router-dom'
import './Profile.css';
import List from '../Components/List';


function Profile({ userName }) {
    const [loading, setLoading] = useState(false);
    const [profile, setProfile] = useState({});

    const items = [
        {
            field: 'Html_url',
            value: (<RouterLink to={profile.html_url} title={profile.html_url}>
                Github Profile URL: 
            </RouterLink>),
        },
        {
            field: 'Repos_url',
            value: (<RouterLink to={`https://github.com/${userName}?tab=repositories`}title={profile.repos_url}>
                Github Repos
            </RouterLink>), 
        },
        {field: 'Name', value: profile.name},
        {field: 'Company', value: profile.company},
        {field: 'Location', value: profile.location},
        {field: 'Bio', value: profile.bio},
    ];

    useEffect(() => {
        async function fetchData() {
            const profile = await fetch(
                `https://api.github.com/users/${userName}`);
            const result = await profile.json();

            if (result) {
                setProfile(result);
                setLoading(false);
            }
        }

        fetchData();
    }, [userName]);

    return (
        <div className='Profile-container'>
            <h2>About me</h2>
            {loading ? (
                <span>loading...</span>
            ) : (
                <div>
                <img 
                  className='Prolie-avatar'
                  src ={profile.avatar_url}
                  alt ={profile.name}
                  />
                <List items={items} />
                <p>Email: BennettHammock@gmail.com</p>
                <p><RouterLink to={'https://www.linkedin.com/in/bennett-hammock'} title={'www.linkedin.com/in/bennett-hammock'} >LinkedIn</RouterLink></p>
               </div> 
            )}
        </div>
    );
}

export default Profile;