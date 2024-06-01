import {Component} from 'react'
import Loader from 'react-loader-spinner'
import TeamCard from '../TeamCard'
import './index.css'

class Home extends Component {
  state = {fullData: [], isLoading: true}

  componentDidMount() {
    this.getTeamData()
  }

  getTeamData = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()
    console.log(data.teams)

    const updateData = data.teams.map(each => ({
      id: each.id,
      name: each.name,
      teamImageUrl: each.team_image_url,
    }))
    console.log(updateData)
    this.setState({fullData: updateData, isLoading: false})
  }

  render() {
    const {fullData, isLoading} = this.state
    return (
      <div className="bg-cont">
        <div className="headstyle">
          <img
            src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
            alt="ipl logo"
          />
          <h1>IPL Dashboard</h1>
        </div>

        {isLoading ? (
          <div testid="loader">
            <Loader type="Oval" color="#ffffff" height={50} width={50} />
          </div>
        ) : (
          <ul className="matcheslistcont">
            {fullData.map(each => (
              <TeamCard teamcarddetails={each} key={each.id} />
            ))}
          </ul>
        )}
      </div>
    )
  }
}
export default Home
