import React from 'react'
import _ from 'lodash'
import MainLayout from './MainLayour'
import { DataState } from './contex/data/DataState'

export default function App() {
  return (
    <DataState>
      <MainLayout />
    </DataState>
  )
}
