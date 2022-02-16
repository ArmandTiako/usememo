import React from 'react'

const Profile = ({count, profile}) => {

    console.log(profile);
    return (
        <div>
            <ul className="list-group">
                <li className="list-group-item h3">User ID : {count}</li>
                <li className="list-group-item"><strong>Name:</strong> {profile.name}</li>
                <li className="list-group-item"><strong>Pseudo:</strong> {profile.username}</li>
                <li className="list-group-item"><strong>Email:</strong> {profile.email}</li>
            </ul>
        </div>
    )
}

export default Profile
