import './index.css'

const MatchCard = props => {
  const {matchCard} = props
  const {competingTeamLogo, competingTeam, result, matchStatus} = matchCard

  const resultStatusClass = matchStatus === 'Won' ? 'status-won' : 'status-lost'
  return (
    <li className="match-card-item">
      <img
        src={competingTeamLogo}
        alt={`competing team ${competingTeam}`}
        className="team-logo"
      />
      <p className="team-name">{competingTeam}</p>
      <p className="result">{result}</p>
      <p className={`status ${resultStatusClass}`}>{matchStatus}</p>
    </li>
  )
}

export default MatchCard
