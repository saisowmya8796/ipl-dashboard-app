// Write your code here
import './index.css'

const LatestMatch = props => {
  const {latestMatchDetails} = props
  const {
    competingTeam,
    date,
    venue,
    result,
    competingTeamLogo,
    umpires,
    manOfTheMatch,
    firstInnings,
    secondInnings,
  } = latestMatchDetails

  return (
    <div className="latest-match-container">
      <h1 className="latest-match-heading">Latest Matches</h1>
      <div className="latest-match-card">
        <div className="first-half">
          <div className="match-details">
            <p className="competing-team">{competingTeam}</p>
            <p className="date">{date}</p>
            <p className="venue">{venue}</p>
            <p className="latest-result">{result}</p>
          </div>
          <div className="logo-container">
            <img
              src={competingTeamLogo}
              alt={`latest match ${competingTeam}`}
              className="competing-team-logo"
            />
          </div>
        </div>
        <div className="horizontal-line"> </div>
        <div className="innings-details">
          <p className="innings-title">First Innings</p>
          <p className="innings-value">{firstInnings}</p>
          <p className="innings-title">Second Innings</p>
          <p className="innings-value">{secondInnings}</p>
          <p className="innings-title">Man of The Match</p>
          <p className="innings-value">{manOfTheMatch}</p>
          <p className="innings-title">Umpires</p>
          <p className="innings-value">{umpires}</p>
        </div>
      </div>
    </div>
  )
}

export default LatestMatch
