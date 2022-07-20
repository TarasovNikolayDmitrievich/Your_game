import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

export default function Nav() {
  const state = useSelector((state) => state)

  return (
    <nav className="navbar navbar-expand-lg bg-light right">
      <div className="container-fluid">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
            <Link className="navbar-brand" to="/">
            <img src="https://urbanfonts-files.s3.amazonaws.com/samples/40028/f50abf19e11e058c603d6a0171022461.jpg" alt="logo" style={{width: "120px"}} />
          </Link>
              {/* <img src='https://urbanfonts-files.s3.amazonaws.com/samples/40028/f50abf19e11e058c603d6a0171022461.jpg' alt='logo'><Link to="/" /></img> */}
              {/* <Link className="nav-link" aria-current="page" to="/">На главную</Link> */}
            </li>
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to="main">Логин</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to="game">Играть</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="stat">Статистика</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="exit">Выйти</Link>
            </li>
            <li className="nav-item">
              <p className="nav-link disabled">Очки: {state.scope}</p>
            </li>
            <li className="nav-item">
              <p className="nav-link disabled">{state.userName}</p>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
