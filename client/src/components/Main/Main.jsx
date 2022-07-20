//Register\login
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { login, logout, registration } from '../../redux/actions/actions';

export function Main() {
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const [register, setRegister] = useState({
    email: '',
    password: ''
  })
  const changeInputLogin = event => {
    setRegister(prev => {
      return {
        ...prev,
        [event.target.name]: event.target.value,
      }
    })
  }

  function submitHandler(e) {
    e.preventDefault();
    dispatch(login(register))
    navigate('/game')
  }


  return (
    <div className='container'>
      <form onSubmit={submitHandler}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
          <input value={register.email} onChange={changeInputLogin} type="email" name='email' className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
          <input value={register.password} onChange={changeInputLogin} type="password" name='password' className="form-control" id="exampleInputPassword1" />
        </div>
        <div>
          <Link to="/main/regist" className="card-link">Если нет аккаунта</Link>
        </div>
        <button type="submit" className="btn btn-primary">Login</button>
      </form>
    </div>
  )
}

export function Regist() {
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const [register, setRegister] = useState({
    name: '',
    email: '',
    password: ''
  })

  const changeInputRegister = event => {
    setRegister(prev => {
      return {
        ...prev,
        [event.target.name]: event.target.value,
      }
    })
  }

  function submitHandler(e) {
    e.preventDefault();
    dispatch(registration(register))
    navigate('/game')
  }

  return (
    <div className='container'>
      <form onSubmit={submitHandler}>
        <div className="mb-3">
          <label htmlFor="exampleInputName" className="form-label">Name</label>
          <input type="text" value={register.name} onChange={changeInputRegister} name='name' className="form-control" id="exampleInputName" />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
          <input type="email" value={register.email} onChange={changeInputRegister} name='email' className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
          <input type="password" value={register.password} onChange={changeInputRegister} name='password' className="form-control" id="exampleInputPassword1" />
        </div>
        <button type="submit" className="btn btn-primary">Registration</button>
      </form>
    </div>
  )
}

export function Logout() {
  const dispatch = useDispatch();

  dispatch(logout())
}
