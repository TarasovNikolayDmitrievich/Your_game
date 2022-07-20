import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import ItemStat from '../ItemStat/ItemStat'

function Statistics() {
  const [stat, setStat] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3100/stat')
      .then((stat) => setStat(stat.data))

  }, [])

  // console.log(stat);
  return (
    <div className='container'>
      <h2>Общая статистика:</h2>
      {stat.map((el) => <ItemStat el={el} key={el.id} />)}
      
    </div>
  )
}

export default Statistics
