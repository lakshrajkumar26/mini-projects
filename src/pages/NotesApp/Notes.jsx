import { useState } from 'react';
import './Notes.css'

const Notes = () =>{
     
   const [notes , setNotes]  = useState(["jss","typeScript","learning"]);
  const [newNotes , setNewNotes]  = useState("");

  const handleOnChange = (event) => { 
    setNewNotes( event.target.value )

  }
  const addNotes = () => {

    if( newNotes.trim() !== ""){
        const updatedNotes = [...notes , newNotes];
    setNotes(updatedNotes);
    setNewNotes("");
    }  

  }
  const deleteNotes = ( index) => {
    console.log(index)

    const updatedNotes = notes.filter( (notes , element) => element !== index);

   
    setNotes(updatedNotes)

  }

  const  moveUp = (index) => {
     if(index >0){
    const updatedNotes = [...notes];

    [updatedNotes[index] ,updatedNotes[index-1]] 
  = [updatedNotes[index-1], updatedNotes[index]];
  setNotes(updatedNotes);
}
};



const edit = (index) => {
console.log(index)
}
  

  const moveDown = ( ) => {

  };

   



    return  (
        <>
         <div className="container-Notes">
            <h1>Your Notes</h1>
            <div>
            <input type="text" value={newNotes} onChange={handleOnChange} placeholder='Enter your Notes...' />
            <button onClick={addNotes} className='add-button'>Add Notes</button>
         </div>
             {/* destr */}
           <ol> { notes.map( (element ,index) => {
             return (
                <li key={index}> 
                <span>
                    {element}</span>
                    <button className='delete-button' onClick={ ()=>deleteNotes(index) }>Delete</button> 
                    <button className='edit-button' onClick={() => edit(index)}>Edit</button>
                    <button onClick={() => moveUp(index)}>MOVE UP</button></li>
             )
           })}

           </ol>
           </div>
        </>
    )
}
export default Notes