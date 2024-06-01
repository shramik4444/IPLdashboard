// Write your code here
import './index.css'
const MatchCard = props => {
  const {matchdetails} = props
  const {competingTeamLogo, result, matchStatus, competingTeam, id} =
    matchdetails

  return (
    <li className="card-cont-match">
      <img
        src={competingTeamLogo}
        className="logo-style"
        alt={`competing team ${competingTeam}`}
      />
      <p>{competingTeam}</p>
      <p>{result}</p>
      <p>{matchStatus}</p>
    </li>
  )
}
export default MatchCard
