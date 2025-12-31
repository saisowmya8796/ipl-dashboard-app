import {Link} from 'react-router-dom'

import './index.css'

const TeamCard = props => {
  const {cardDetails} = props
  const {id, name, teamImageUrl} = cardDetails

  return (
    <li className="team-card-list-item">
      <Link to={`/team-matches/${id}`} className="team-card-link">
        <img src={teamImageUrl} className="team-card-image" alt={name} />
        <p className="team-name">{name}</p>
      </Link>
    </li>
  )
}

export default TeamCard
