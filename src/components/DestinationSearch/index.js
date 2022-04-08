// Write your code here

import {Component} from 'react'

import DestinationItem from '../DestinationItem'

import './index.css'

class DestinationSearch extends Component {
  state = {searchInput: ''}

  onChangeSearchButton = event => {
    this.setState({searchInput: event.target.value.toLowerCase()})
  }

  render() {
    const {searchInput} = this.state
    const {destinationsList} = this.props
    const filteredDestinationList = destinationsList.filter(eachItem =>
      eachItem.name.toLowerCase().includes(searchInput.toLowerCase()),
    )
    return (
      <div className="main-container">
        <div className="tourist-container">
          <h1 className="heading">Destination Search</h1>
          <div className="search-box-container">
            <input
              type="search"
              className="search-input"
              value={searchInput}
              placeholder="Search"
              onChange={this.onChangeSearchButton}
            />
            <img
              src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
              alt="search icon"
              className="search-icon"
            />
          </div>
          <ul className="list-container">
            {filteredDestinationList.map(each => (
              <DestinationItem destinationList={each} key={each.id} />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default DestinationSearch
