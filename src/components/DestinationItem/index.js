// Write your code here
import './index.css'

const DestinationItem = props => {
  const {destinationList} = props
  const {imgUrl, name} = destinationList
  return (
    <li className="app-container">
      <img src={imgUrl} alt={name} className="destination-icon" />
      <p className="destination">{name}</p>
    </li>
  )
}
export default DestinationItem
