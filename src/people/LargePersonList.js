import React from 'react'

export default function LargePersonList({ person }) {
    const { name, age, hobbies, hairColor } = person;

    return (
        <div>
            <p>Name : {name} Age : {age} </p>
            <p>Hair : {hairColor} </p>
            <ul>
                {hobbies.map(hobby => <li key={hobby}>{hobby}</li>)}
            </ul>
        </div>

    )
}
