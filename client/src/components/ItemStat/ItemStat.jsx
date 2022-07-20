import React from 'react'
import dayjs from 'dayjs'

function ItemStat({ el }) {
  return (
    <div>
      <table className="table table-dark table-striped">
        <tbody>
          <tr>
            <td>{el.User.name}</td>
            <td>{el.score}</td>
            <td>{dayjs(el.createdAt).format('DD.MM.YYYY HH-MM')}</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default ItemStat
