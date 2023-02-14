import {BrowserRouter as Router, Route} from 'react-router-dom'
import Share from './components/BlogsList'

function App() {
  return (
    <Router>
      <Route path="/" exact component={Share} />
    </Router>
  )
}

export default App
