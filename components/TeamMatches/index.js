import {Component} from 'react'

import React from 'react'

import LatestMatch from '../LatestMatch'

import MatchCard from '../MatchCard'

import Loader from 'react-loader-spinner'

import './index.css'

class TeamMatches extends Component {
  state = {
    isloading: true,
    updateddata: [],
    recentmatchesupdateddata: [],
    bannerUrl: '',
  }

  componentDidMount() {
    this.getteamdata()
  }

  getteamdata = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    console.log(this.props)

    const {updateddata, recentmatchesupdateddata, isloading} = this.state
    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()
    const latestMatch = data.latest_match_details
    console.log('[[[[[[[[[[[[[[[[[[[[[]]]]]]]]]]]]]]]]]]]]]')
    console.log(data)
    const recentmatches = data.recent_matches
    const bannerImg = data.team_banner_url

    const latestmatchdetails = {
      competingTeam: latestMatch.competing_team,
      competingTeamLogo: latestMatch.competing_team_logo,
      date: latestMatch.date,
      secondInnings: latestMatch.second_innings,
      firstInnings: latestMatch.first_innings,
      manOfTheMatch: latestMatch.man_of_the_match,
      venue: latestMatch.venue,
      result: latestMatch.result,
      umpires: latestMatch.umpires,
      id: latestMatch.id,
    }

    const recentmatchdetails = recentmatches.map(each => ({
      competingTeam: each.competing_team,
      competingTeamLogo: each.competing_team_logo,
      result: each.result,
      matchStatus: each.match_status,
      id: each.id,
    }))
    console.log(recentmatchdetails)
    this.setState({updateddata: latestmatchdetails})
    this.setState({recentmatchesupdateddata: recentmatchdetails})
    this.setState({bannerUrl: bannerImg})
    this.setState({isloading: false})
  }

  render() {
    const {updateddata, recentmatchesupdateddata, bannerUrl, isloading} =
      this.state
    return (
      <>
        {isloading ? (
          <div testid="loader">
            <Loader type="Oval" color="#ffffff" height={50} width={50} />
          </div>
        ) : (
          <div className="background-style">
            <img src={bannerUrl} className="bannerstyle" alt="team banner" />
            <LatestMatch
              latestmatchdetails={updateddata}
              key={updateddata.id}
            />
            <ul className="listofmatches">
              {recentmatchesupdateddata.map(each => (
                <MatchCard matchdetails={each} key={each.id} />
              ))}
            </ul>
          </div>
        )}
      </>
    )
  }
}
export default TeamMatches
