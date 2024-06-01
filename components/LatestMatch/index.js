// Write your code here

import './index.css'

const LatestMatch = props => {
  const {latestmatchdetails} = props
  const {
    competingTeam,
    competingTeamLogo,
    date,
    venue,
    result,
    firstInnings,
    secondInnings,
    manOfTheMatch,
    umpires,
  } = latestmatchdetails

  return (
    <div className="card-cont-latest">
      <div className="date-cont">
        <p>{competingTeam}</p>
        <p>{date}</p>
        <p>{venue}</p>
        <p>{result}</p>
      </div>

      <div>
        <img
          src={competingTeamLogo}
          className="imgstyle"
          alt={`latest match ${competingTeam}`}
        />
      </div>

      <div className="manofthematch">
        <p>First Innings</p>
        <p>{firstInnings}</p>
        <p>Second Innings</p>
        <p>{secondInnings}</p>
        <p>Man Of The Match</p>
        <p>{manOfTheMatch}</p>
        <p>umpires</p>
        <p>{umpires}</p>
      </div>
    </div>
  )
}
export default LatestMatch
