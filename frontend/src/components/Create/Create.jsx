import React from 'react'
import { useState } from 'react'
import env from '../../env.json'
import { postNotes } from '../fetch/postNotes';
import './Create.css'


function Create() {

  const[url,setUrl] = useState('');
  const[hide,setHide] = useState('hide');
  const[hideForm,setHideForm] = useState('row gy-2 gx-3 align-items-center');

  const handleNewNote = () =>{
    window.location.reload()
  }

  const handleNote =(object)=>{
      postNotes(object)
        .then((data)=>{
          console.log('data res >>>',data.result);
          console.log('result url >>>',`${env.url}/${data.url}`);
          if(data.result){
            setUrl(`${env.url}${data.url}`)
          }
          setHideForm('hide')
          setHide('')
        })
  }

  const handleForm = (e)=>{
    e.preventDefault()
    let note = e.target.elements.note.value
    if(note.length === 0 ){
      alert('Напишите что-то!')
      return false
    }
    handleNote({'note':note})
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