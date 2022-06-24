import React,{ useState,useEffect } from 'react'
import { useParams } from 'react-router-dom';
import fetching from '../fetch/fetchObj';
import env from '../../env.json'
import './Note.css'

function Note() {

  let formStyle = 'row gy-2 gx-3 align-items-center'

  const [noteText,setNoteText] = useState('')
  const [LineClass,setLineClass] = useState('hide')
  const [errorClass,setErrorClass] = useState('hide')
  const [formClass,setFormClass] = useState(formStyle)


  /* Destructuring the fetching object. */
  const {handleNotes} = fetching

  const {noteURL} = useParams()

  useEffect(()=>{
    if(noteURL !== undefined){
      handleNotes({"url":noteURL})
        .then(data=>{
          console.log('notes data >>>',data);
          if(data.result){
            setLineClass('')
            setNoteText(data.note)
          }else{
            setErrorClass('')
            setNoteText(data.text)
          }
      })
      setFormClass('hide')
    }
  },[noteURL,handleNotes])

  const backToNotes = ()=>{
    setLineClass('hide')
    setErrorClass('hide')
    setFormClass(formStyle)
  }

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
    <div className='note-form'>
        <div className={LineClass}>
          <div className="show-success">
            <h4>NOTE: {noteURL}</h4>
            <hr />
            {noteText}
            <hr />
            <span><i><b>Внимание!</b> После прочтения заметку можно будет отследить по hash.</i></span>
          </div>
          <div className="d-grid gap-2 d-md-flex justify-content-md-end">
              <button onClick={backToNotes} className='new-note btn btn-outline-success'>Вернутся на главную</button>
          </div>
        </div>
        <div className={errorClass}>
          <div className="show-error">
            <h4>{noteText}: {noteURL}</h4>
          </div>
          <div className="d-grid gap-2 d-md-flex justify-content-md-end">
              <button onClick={backToNotes} className='new-note btn btn-outline-danger'>Вернутся на главную</button>
          </div>
        </div>
        <div className={formClass}>
          <form className={formClass} onSubmit={handleHash}>
            <label htmlFor="hash">Введите хэш заметки</label>
            <input type="text" className='shadow p-1 mb-3 rounded' name='hash' />
            <div className="d-grid gap-2 d-md-flex justify-content-md-end">
              <button className='new-note btn btn-outline-success'>Поиск</button>
            </div>
          </form>
        </div>
        
    </div>
  )
}

export default Note