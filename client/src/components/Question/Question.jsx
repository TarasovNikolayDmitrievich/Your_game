import React from 'react'
import { useDispatch } from 'react-redux';

function Question({ el }) {
  const dispatch = useDispatch();

  function submitHandler(e) {
    let alertPlaceholder = document.getElementById(`liveAlertPlaceholder${el.id.toString() + 1}`)
    const alert = (message) => {
      const wrapper = document.createElement('div')

      wrapper.innerHTML = [
        `<div className="alert alert-success alert-dismissible" role="alert">`,
        `   <div>${message}</div>`,
        '</div>'
      ].join('')

      alertPlaceholder.append(wrapper)
    }
    e.preventDefault()
    const answer = e.target.answer.value
    const div = e.target.closest('div')
    const but = div.firstChild
    but.disabled = true
    if (el.answer === answer) {
      alert('Верно!')
      dispatch({
        type: 'ADD_SCOPE',
        payload: el.price
      })
    } else {
      alert('Не верно')
      dispatch({
        type: 'MINUS_SCOPE',
        payload: el.price
      })
    }
  }

  return (
    <form onSubmit={submitHandler}>
      <div className="modal fade" id={`a${el.id.toString()}`} >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" >{el.question}</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <input name='answer' />
            </div>
            <div className="modal-footer">

              <div id={`liveAlertPlaceholder${el.id.toString() + 1}`}></div>
              <button type="submit" className="btn btn-primary">Отвечаю!</button>

            </div>
          </div>
        </div>
      </div>
    </form>
  )
}

export default Question
