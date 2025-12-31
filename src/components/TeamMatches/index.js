import {Component} from 'react'
import {ThreeDots} from 'react-loader-spinner'

import LatestMatch from '../LatestMatch'
import MatchStatsPieChart from '../MatchStatsPieChart'
import MatchCard from '../MatchCard'

import './index.css'

class TeamMatches extends Component {
  state = {
    teamData: {
      teamBannerUrl: '',
      latestMatchDetails: {},
      recentMatchDetails: [],
    },
    isLoading: true,
  }

  componentDidMount() {
    this.getTeamMatchesData()
  }

  onClickBack = () => {
    const {navigate} = this.props
    navigate('/')
  }

  getFormattedData = match => ({
    id: match.id,
    umpires: match.umpires,
    result: match.result,
    manOfTheMatch: match.man_of_the_match,
    date: match.date,
    venue: match.venue,
    competingTeam: match.competing_team,
    competingTeamLogo: match.competing_team_logo,
    firstInnings: match.first_innings,
    secondInnings: match.second_innings,
    matchStatus: match.match_status,
  })

  getTeamMatchesData = async () => {
    const {params={}} = this.props
    const {id} = params

    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()

    const formattedData = {
      teamBannerUrl: data.team_banner_url,
      latestMatchDetails: this.getFormattedData(data.latest_match_details),
      recentMatchDetails: (data.recent_matches || []).map(this.getFormattedData),
    }

    this.setState({teamData: formattedData, isLoading: false})
  }

  getMatchStats = recentMatches => {
    let won = 0
    let lost = 0
    let draw = 0

    recentMatches.forEach(match => {
      if (match.matchStatus === 'Won') won += 1
      else if (match.matchStatus === 'Lost') lost += 1
      else draw += 1
    })

    return [
      {name: 'Won', value: won},
      {name: 'Lost', value: lost},
      {name: 'Draw', value: draw},
    ]
  }

  render() {
    const {teamData, isLoading} = this.state
    const {teamBannerUrl, latestMatchDetails, recentMatchDetails} = teamData
    const {params} = this.props
    const {id} = params

    const statsData = this.getMatchStats(recentMatchDetails)

    return (
      <div className={`team-matches-container ${id}`}>
        {isLoading ? (
          <div data-testid="loader" className="loader-container">
            <ThreeDots height="50" width="50" radius="9" color="#ffffff" ariaLabel="three-dots-loading" />
          </div>
        ) : (
          <>
            <img
              src={teamBannerUrl}
              alt="team banner"
              className="team-banner-image"
            />
            <LatestMatch latestMatchDetails={latestMatchDetails} />
            <MatchStatsPieChart statsData={statsData} />
            <ul className="recent-matches-list">
              {recentMatchDetails.map(eachMatchCard => (
                <MatchCard key={eachMatchCard.id} matchCard={eachMatchCard} />
              ))}
            </ul>
            <button type="button" className="back-button" onClick={this.onClickBack}>
              Back
            </button>
          </>
        )}
      </div>
    )
  }
}

export default TeamMatches
