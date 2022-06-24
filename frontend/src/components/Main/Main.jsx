import React from 'react'
import { Link } from 'react-router-dom';
import './Main.css'

function Main() {
  return (
    <div className='note-form'>
      <div>
        <nav>
          <ul className="note-btns">
            <li>
                <Link className='btn btn-outline-dark' to='/create'>Сделать заметку</Link>
            </li>
            <li>
                <Link className='btn btn-outline-dark' to='/note/'>Посмотреть заметку</Link>
            </li>
          </ul>
        </nav>
        <div className='note-desc'>
          <b>ShareNote</b> - просто сервис для обмена заметками с другими пользователями. Всё элементарно вы создаете заметку ,
            копируете ссылку и отправляете своему другу. После просмотра , спутся 10 минут - заметка будет удалена.
          <p className='note-p'>
            Как же сделать заметку?
            <ul className='note-instruction'>
              <li>Перейдите в раздел "Создания заметки"</li>
              <li>Напиши тело заметки</li>
              <li>Скопируйте URL</li>
              <li>Отправьте вашему другу</li>
            </ul>
            Как прочитать заметку? Перейдите по полученному адресу, либо найдите по hash.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Main