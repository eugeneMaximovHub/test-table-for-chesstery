import React, { useReducer } from 'react'
import { DataContext } from './dataContext'
import { dataReducer } from './dataReducer'

export const DataState = ({ children }) => {
    const initialState = {
        data: []
    }
const [state, dispatch] = useReducer(dataReducer, initialState)

  return <DataContext.Provider value={{
      data: state.data
  }}>{children}</DataContext.Provider>
}
