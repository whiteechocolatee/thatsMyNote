import React,{ useState,useEffect } from 'react'
import { useParams } from 'react-router-dom';
import fetching from '../fetch/fetchObj';
import env from '../../env.json'


function Note() {

  const [noteText,setNoteText] = useState('')
  const [listClass,setListClass] = useState('hide')
  const [formClass,setFormClass] = useState('row gy-2 gx-3 align-items-center')


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
      setFormClass('hide')
      setListClass('')
    }
  },[])

  const handleHash = (e) =>{
      e.preventDefault()
      let url = e.target.elements.hash.value
      if(url.value===0){
        alert('Введите hash')
      }
      url.trim()
      window.location.href = env.url+url
  }

  return (
    <div>
        <div className={listClass}>
          {noteText}
        </div>
        <div className={formClass}>
          <form className={formClass} onSubmit={handleHash}>
            <label htmlFor="hash">Введите хэш заметки</label>
            <input type="text" name='hash' />
            <button className='btn btn-dark'>Поиск</button>
          </form>
        </div>
        
    </div>
  )
}

export default Note