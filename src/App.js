import React, { Component } from 'react'
import Loader from './Loader/Loader'
import Table from './Table/Table'
import _ from 'lodash'

export default class App extends Component {
  state = {
    isLoading: true,
    data: [],
    sort: 'asc',
    sortField: '#',
  }

  async componentDidMount() {
    const response = await fetch('/api/inf').then((res) => res.json())
    const data = response.inf
    this.setState({
      isLoading: false,
      data: _.orderBy(data, this.state.sortField, this.state.sort),
    })
  }

  onSort = (sortField) => {
    const cloneData = this.state.data.concat()
    const sortType = this.state.sort === 'asc' ? 'desc' : 'asc'
    const orderedData = _.orderBy(cloneData, sortField, sortType)
    this.setState({
      data: orderedData,
      sort: sortType,
      sortField,
    })
  }
  render() {
    return (
      <div className="container">
        {this.state.isLoading ? (
          <Loader />
        ) : (
          <Table
            data={this.state.data}
            onSort={this.onSort}
            sort={this.state.sort}
            sortField={this.state.sortField}
          />
        )}
      </div>
    )
  }
}
