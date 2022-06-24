import React from 'react'
import { useState } from 'react'
import env from '../../env.json'
import fetching from '../fetch/fetchObj';
import './Create.css'


function Create() {
  /* Destructuring the object. */
  const {handleNotes} = fetching

  const[url,setUrl] = useState('');
  
  const[lineClass,setLineClass] = useState('hide');
  
  const[textLength,setTextLength] = useState(1000);

  const[hideForm,setHideForm] = useState('row gy-2 gx-3 align-items-center');


  const handleNewNote = () =>{
    setHideForm('row gy-2 gx-3 align-items-center')
    setLineClass('hide')
  }

  const handleNote =(obj)=>{
    handleNotes(obj)
      .then((data)=>{
        if(data.result){
          setUrl(`${env.url}${data.url}`)
        }
        setHideForm('hide')
        setLineClass('')
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
    setTextLength(1000)
  }

  const handleLength = (e) =>{
    console.log(e.target.value);
    let enteredNote = e.target.value;
    setTextLength(1000-enteredNote.length)
  }

  return (
    <div className='note-form'>
        <form onSubmit={handleForm} className={hideForm}>
          <label htmlFor="note">Введите текст заметки:</label>
          <textarea name="note" onChange={handleLength} id="note"  className="form-control shadow p-3 mb-5 bg-body rounded" cols="60" placeholder='Введите текст заметки...' rows="5"></textarea>
          <label><b>Примечание!</b> Длинна сообщения не должна привышать 1000 символов.</label>
          <label>Осталось : {textLength}</label>
          <div className="col-auto">
            <button type="submit" className="btn btn-outline-success">Создать</button>
          </div>
        </form>
        <div className={lineClass}>
          <div className='show-hash'>
            <b>{url}</b>
            <span>Скопируйте URL и отправьте адресату</span>
          </div>
          <div className='d-grid gap-2 d-md-flex justify-content-md-end'>
            <button onClick={handleNewNote} className="new-note btn btn-outline-success">Создать новую заметку</button>
          </div>
        </div>
    </div>
  )
}

export default Create