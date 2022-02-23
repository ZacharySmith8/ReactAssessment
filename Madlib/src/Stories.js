import React, {useState} from 'react'


//

//change name
const Stories = ({formData}) => {
    let index = Math.floor(Math.random()*2); 
    console.log(formData)
    let madLibStories = [
        `${formData.noun2} has a favorite color, its ${formData.color}, the ${formData.adjective} ${formData.noun} guessed green`,
        `The ${formData.color} ${formData.noun} wanted to party with his friend the ${formData.adjective} ${formData.noun2}.`,
        `There was a ${formData.color} ${formData.noun} who loved a ${formData.adjective} ${formData.noun2}`
    ]
    
    const story = madLibStories[index];
    
    return (
        <div className='story'>
            <h3>{story}</h3> 
        </div>
    )
}




export default Stories;