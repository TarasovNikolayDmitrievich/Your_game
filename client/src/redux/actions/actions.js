import axios from "axios";

export const registration = (data) => async (dispatch) => {
  try {
    const result = await axios.post('http://localhost:3100/user/regist', data, { withCredentials: true })

    console.log(result.data);
    if (result.status === 200) {
      dispatch({
        type: 'REGIST_USER',
        payload: result.data
      })
    } else {
      alert('Что-то пошло не так')
    }
  } catch (err) {
    console.log(err);

    alert('Что-то пошло не так')
  }
}

export const login = (data) => async (dispatch) => {
  
  try {
    const result = await axios.post('http://localhost:3100/user/login', data, { withCredentials: true })
    
    if (result.status === 200) {
      dispatch({
        type: 'LOGIN_USER',
        payload: result.data
      })
    } else {
      alert('Что-то пошло не так')
    }
  } catch (err) {
    console.log(err);
    alert('Что-то пошло не так')
  }
}

export const logout = (data) => async (dispatch) => {

  try {
    const result = await axios.get('http://localhost:3100/user/logout', { withCredentials: true })
    if (result.status === 200) {
      dispatch({
        type: 'LOGOUT_USER'
      })
    } else {
      alert('Что-то пошло не так')
    }
  } catch (err) {
    console.log(err);
    alert('Что-то пошло не так')
  }
}

export const setUser = () => async (dispatch) => {
  try {
    const result = await axios.get('http://localhost:3100/user/setuser', { withCredentials: true })

    if (result.status === 200) {
      dispatch({
        type: 'SET_USER',
        payload: result.data
      })
    } else {
      alert('Что-то пошло не так')
    }
  } catch (err) {
    console.log(err);
    alert('Что-то пошло не так111')
  }
}

export const stopGame = (state) => async (dispatch) => {
  
  try {
    const result = await axios.post('http://localhost:3100/stat/stop', state , { withCredentials: true })
    
    if (result.status === 200) {
      dispatch({
        type: 'STOP_GAME'
      })
    } else {
      alert('Что-то пошло не так')
    }
  } catch (err) {
    console.log(err);
    alert('Что-то пошло не так')
  }
}
