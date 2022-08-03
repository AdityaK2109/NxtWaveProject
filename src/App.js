import {Switch, Route} from 'react-router-dom'
import HomeRoute from './components/HomeRoute'
import AddResourceRoute from './components/AddResourceRoute'
import LoginRoute from './components/LoginRoute'
import ProtectedRoute from './components/ProtectedRoute'

const App = () => (
  <Switch>
    <Route exact path="/login" component={LoginRoute} />
    <ProtectedRoute exact path="/" component={HomeRoute} />
    <ProtectedRoute exact path="/add-resource" component={AddResourceRoute} />
  </Switch>
)

export default App
