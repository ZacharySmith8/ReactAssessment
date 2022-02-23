import React, {useState} from 'react';
import Stories from './Stories';

const MadLibForm = () => {
    //Initial Data State. Very important 
    const initialData = {
        noun : "",
        noun2: "",
        adjective: "",
        color: ""
    }
    const [formData, setData] = useState(initialData)
    const [toggleStory,setToggleStory] = useState(true);

    
    const handleChange = e => {
        const {name,value} = e.target

        setData(() => ({
            ...formData,
            [name] : value
        })) 
    }
    
    const handleToggleStory  = (e) => {
        e.preventDefault();
        if(Object.values(formData).includes('')){
           alert("fill out all the information in the form")
           return;
        }
        if(!toggleStory){
            setData(initialData)
        }
        setToggleStory(!toggleStory);
        
        
        
    }

    return (
        <>
        {toggleStory ?
        <form onSubmit={handleToggleStory}>
            <input type="text" onChange={handleChange}placeholder="noun"value={formData.noun}name='noun'></input>
            <input type="text" onChange={handleChange}placeholder="noun2"value={formData.noun2}name='noun2'></input>
            <input type="text" onChange={handleChange}placeholder="adjective"value={formData.adjective}name='adjective'></input>
            <input type="text" onChange={handleChange}placeholder="color"value={formData.color}name='color'></input>
            <input type="submit" value="Get Story"></input>
        </form> : 
        
        <div>
            <Stories formData={formData} />
            <button onClick={handleToggleStory}>Lets Make Another</button>
        </div>
        
        }
        
        </>
        )
}


export default MadLibForm;