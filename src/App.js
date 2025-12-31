import {Routes, Route} from 'react-router-dom'

import Home from './components/Home'
import TeamMatchesWrapper from './components/TeamMatchesWrapper'
import NotFound from './components/NotFound'

import './App.css'

const App = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/team-matches/:id" element={<TeamMatchesWrapper />} />
    <Route path="*" element={<NotFound />} />
  </Routes>
)

export default App
