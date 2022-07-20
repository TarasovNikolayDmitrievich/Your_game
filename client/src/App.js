import './App.css';
import { Route, Routes } from 'react-router-dom'
import Nav from './components/Nav/Nav';
import Game from './components/Game/Game';
import Statistics from './components/Statistics/Statistics';
import { Logout, Main, Regist } from './components/Main/Main';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setUser } from './redux/actions/actions';
import Start from './components/Start/Start';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    //делаем запрос на сервер для получения юзера
    // ответ: данные моего юзера и кладу их в редакс
    dispatch(setUser())
  }, [])
  

  return (
    <div className="App">
      <header><Nav /></header>
      <main>
        <Routes>
          <Route path='/' element={<Start />}/>
          <Route path='game'>
            <Route path='' element={<Game />} />
          </Route>
          <Route path='main'>
            <Route path='' element={<Main />} />
            <Route path='regist' element={<Regist />} />
          </Route>
          <Route path='stat' element={<Statistics />} />
          <Route path='exit'>
            <Route path='' element={<Logout />} />
          </Route>
        </Routes>
      </main>
      <footer></footer>
    </div>
  );
}

export default App;
