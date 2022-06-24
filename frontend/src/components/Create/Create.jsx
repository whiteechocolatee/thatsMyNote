import React from 'react'
import { useState } from 'react'
import env from '../../env.json'
import fetching from '../fetch/fetchObj';
import './Create.css'


function Create() {
  /* Destructuring the object. */
  const {handleNotes} = fetching

  const[url,setUrl] = useState('');
  const[hide,setHide] = useState('hide');
  const[hideForm,setHideForm] = useState('row gy-2 gx-3 align-items-center');


  const handleNewNote = () =>{
    setHideForm('row gy-2 gx-3 align-items-center')
    setHide('hide')
  }

  const handleNote =(obj)=>{
    handleNotes(obj)
      .then((data)=>{
        if(data.result){
          setUrl(`${env.url}${data.url}`)
        }
        setHideForm('hide')
        setHide('')
      })
  }

  const handleForm = (e)=>{
    e.preventDefault()
    let note = e.target.elements.note
    if(note.value.length === 0 ){
      alert('Напишите что-то!')
      return false
    }
    note.value.trim()
    handleNote({'note':note.value})
    note.value = ''
  }

  return (
    <div className='note-form'>
        <form onSubmit={handleForm} className={hideForm}>
          <label htmlFor="note">Введите текст заметки:</label>
          <textarea name="note" id="note" className="form-control" cols="60" placeholder='Введите текст заметки...' rows="3"></textarea>
          <div className="col-auto">
            <button type="submit" className="btn btn-primary">Создать</button>
          </div>
        </form>
        <div className={hide}>
          <div>
            {url}
          </div>
          <div className="">
            <button onClick={handleNewNote} className="btn btn-primary">Создать новую заметку</button>
          </div>
        </div>
    </div>
  )
}

export default Create