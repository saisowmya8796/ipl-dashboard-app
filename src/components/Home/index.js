import {Component} from 'react'
import {ThreeDots} from 'react-loader-spinner'

import TeamCard from '../TeamCard'

import './index.css'

class Home extends Component {
  state = {teamCardList: [], isLoading: true}

  componentDidMount() {
    this.getTeamCards()
  }

  getTeamCards = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()
    const updatedData = data.teams.map(eachItem => ({
      id: eachItem.id,
      name: eachItem.name,
      teamImageUrl: eachItem.team_image_url,
    }))
    this.setState({teamCardList: updatedData, isLoading: false})
  }

  render() {
    const {teamCardList, isLoading} = this.state

    return (
      <div className="home-container">
        {isLoading ? (
          <div data-testid="loader" className="loader-container">
            <ThreeDots type="Oval" color="#ffffff" height={50} width={50} />
          </div>
        ) : (
          <div className="app-container">
            <div className="main-heading-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
                alt="ipl logo"
                className="ipl-logo"
              />
              <h1 className="main-heading">IPL Dashboard</h1>
            </div>
            <ul className="team-cards-list">
              {teamCardList.map(eachCard => (
                <TeamCard key={eachCard.id} cardDetails={eachCard} />
              ))}
            </ul>
          </div>
        )}
      </div>
    )
  }
}

export default Home
