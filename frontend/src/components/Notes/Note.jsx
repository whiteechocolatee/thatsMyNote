import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Create from '../Create/Create';
import fetching from '../fetch/fetchObj';

function Note() {

  const [noteText,setNoteText] = useState('')

  /* Destructuring the fetching object. */
  const {handleNotes} = fetching

  const {noteURL} = useParams()

  useEffect(()=>{
    if(noteURL != undefined){
      handleNotes({"url":noteURL})
        .then(data=>{
          console.log('notes data >>>',data);
          if(data.result){
            setNoteText(data.note)
          }
      })
    }
  },[])

  return (
    <div>
        <div>
          {noteText}
        </div>
        
    </div>
  )
}

export default Note