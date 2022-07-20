import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { stopGame } from '../../redux/actions/actions'
import Question from '../Question/Question'


export default function Game() {
  const [questions, setQuestions] = useState([])
  const dispatch = useDispatch();
  const state = useSelector((state) => state)

  useEffect(() => {
    axios.get('http://localhost:3100/game')
      .then((questions) => setQuestions(questions.data))
  }, [])


  function foo2(e) {
    e.preventDefault();
    dispatch(stopGame(state))
    const div = e.target.closest('div')
    const but = div.childNodes
    for (let i = 1; i < 4; i++) {
      const div = but[i];

      for (let j = 1; j < 6; j++) {
        const div2 = div.childNodes[j]
        div2.firstChild.disabled = false
      }

    }

  }

  return (
    <div className='container'>

      <button onClick={foo2} className="btn btn-warning" style={{ 'margin-bottom': '50px' }}>STOP</button>
      <div className="row divRow" style={{ 'justify-content': 'space-evenly' }}>
        <div className="col-3 btn btn-secondary ">География</div>

        {questions.map((el) => {
          if (el.theme === 'География')
            return (

              <div key={el.id} style={{ width: '80px' }} >
                <button className="col btn btn-secondary" data-bs-toggle="modal" data-bs-target={`#a${el.id.toString()}`}>{el.price}</button>

                <Question el={el} />
              </div>
            )
        })}
      </div>
      <div className="row divRow" style={{ 'justify-content': 'space-evenly' }} >
        <div className="col-3 btn btn-secondary ">Книги и кино</div>
        {questions.map((el) => {
          if (el.theme === 'Книги и кино')
            return (

              <div key={el.id} style={{ width: '80px' }} >
                <button className="col btn btn-secondary" data-bs-toggle="modal" data-bs-target={`#a${el.id.toString()}`}>{el.price}</button>
                <Question el={el} />
              </div>)
        })}
      </div>
      <div className="row divRow" style={{ 'justify-content': 'space-evenly' }}>
        <div className="col-3 btn btn-secondary ">История</div>
        {questions.map((el) => {
          if (el.theme === 'История')
            return (
              <div key={el.id} style={{ width: '80px' }} >
                <button className="col btn btn-secondary" data-bs-toggle="modal" data-bs-target={`#a${el.id.toString()}`}>{el.price}</button>
                <Question el={el} />
              </div>)
        })}

      </div>
      <div className="row divRow" style={{ 'justify-content': 'space-evenly' }}>
        <div className="col-3 btn btn-secondary ">Фоксики</div>
        {questions.map((el) => {
          if (el.theme === 'Фоксики')
            return (
              <div key={el.id} style={{ width: '80px' }} >
                <button className="col btn btn-secondary" data-bs-toggle="modal" data-bs-target={`#a${el.id.toString()}`}>{el.price}</button>
                <Question el={el} />
              </div>)
        })}

      </div>
    </div>
  )
}
