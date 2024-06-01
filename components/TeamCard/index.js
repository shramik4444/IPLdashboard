// Write your code here

import './index.css'
import {Link} from 'react-router-dom'

const TeamCard = props => {
  const {teamcarddetails} = props
  const {id, name, teamImageUrl} = teamcarddetails
  return (
    <Link path to={`/team-matches/${id}`}>
    <li>
      
        <div className="card-cont-op">
          <img src={teamImageUrl} className="imgstyle-card" alt={name} />
          <p className="parastyle">{name}</p>
        </div>
      
    </li>
    </Link>
  )
}

export default TeamCard
