import React from 'react'
import './Table.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons'

const Table = (props) => (
  <table className="table">
    <thead className="mainRow">
      <tr>
        <th onClick={props.onSort.bind(null, 'id')}>

          {props.sortField === 'id' ? (
            props.sort === 'asc' ? (
              <small>
                <FontAwesomeIcon icon={faArrowUp} />
              </small>
            ) : (
              <small>
                <FontAwesomeIcon icon={faArrowDown} />
              </small>
            )
          ) : null}
        </th>
        <th onClick={props.onSort.bind(null, 'ln')}>
          Название урока
          {props.sortField === 'ln' ? (
            props.sort === 'asc' ? (
              <small>
                <FontAwesomeIcon icon={faArrowUp} />
              </small>
            ) : (
              <small>
                <FontAwesomeIcon icon={faArrowDown} />
              </small>
            )
          ) : null}
        </th>
        <th onClick={props.onSort.bind(null, 'exInLes')}>
          Упражнений в уроке
          {props.sortField === 'exInLes' ? (
            props.sort === 'asc' ? (
              <small>
                <FontAwesomeIcon icon={faArrowUp} />
              </small>
            ) : (
              <small>
                <FontAwesomeIcon icon={faArrowDown} />
              </small>
            )
          ) : null}
        </th>
        <th onClick={props.onSort.bind(null, 'exD')}>
          Упражнений выполнено
          {props.sortField === 'exD' ? (
            props.sort === 'asc' ? (
              <small>
                <FontAwesomeIcon icon={faArrowUp} />
              </small>
            ) : (
              <small>
                <FontAwesomeIcon icon={faArrowDown} />
              </small>
            )
          ) : null}
        </th>
        <th onClick={props.onSort.bind(null, 'er')}>
          Ошибок
          {props.sortField === 'er' ? (
            props.sort === 'asc' ? (
              <small>
                <FontAwesomeIcon icon={faArrowUp} />
              </small>
            ) : (
              <small>
                <FontAwesomeIcon icon={faArrowDown} />
              </small>
            )
          ) : null}
        </th>
        <th onClick={props.onSort.bind(null, 'inac')}>
          Неточности
          {props.sortField === 'inac' ? (
            props.sort === 'asc' ? (
              <small>
                <FontAwesomeIcon icon={faArrowUp} />
              </small>
            ) : (
              <small>
                <FontAwesomeIcon icon={faArrowDown} />
              </small>
            )
          ) : null}
        </th>
        <th onClick={props.onSort.bind(null, 'timeSpend')}>
          Потраченное временя
          {props.sortField === 'timeSpend' ? (
            props.sort === 'asc' ? (
              <small>
                <FontAwesomeIcon icon={faArrowUp} />
              </small>
            ) : (
              <small>
                <FontAwesomeIcon icon={faArrowDown} />
              </small>
            )
          ) : null}
        </th>
        <th onClick={props.onSort.bind(null, 'coins')}>
          Заработано террикоинов
          {props.sortField === 'coins' ? (
            props.sort === 'asc' ? (
              <small>
                <FontAwesomeIcon icon={faArrowUp} />
              </small>
            ) : (
              <small>
                <FontAwesomeIcon icon={faArrowDown} />
              </small>
            )
          ) : null}
        </th>
      </tr>
    </thead>
    <tbody className="sameRow">
      {props.data.map((item) => (
        <tr key={item.id + item.ln}>
          <td>{item.id}</td>
          <td>{item.ln}</td>
          <td>{item.exInLes}</td>
          <td>{item.exD}</td>
          <td>{item.er}</td>
          <td>{item.inac}</td>
          <td>{item.timeSpend}</td>
          <td>{item.coins}</td>
        </tr>
      ))}
    </tbody>
  </table>
)
export default Table
