import {useNavigate, useParams} from 'react-router-dom'
import TeamMatches from '../TeamMatches'

const TeamMatchesWrapper = () => {
  const navigate = useNavigate()
  const params = useParams()

  return <TeamMatches navigate={navigate} params={params} />
}

export default TeamMatchesWrapper
