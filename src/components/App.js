import React from "react"
import { Provider } from "react-redux"
import store from "../redux/store"
import { useGithub} from '../redux/ducks/github'
import User from './User'
import Repos from './Repos'

function Wrap() {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  )
}

function App() {
  const { user, repos } = useGithub('LazVegas')

  return (
      <div className="container">
          <div className="headerWrapper">
            <img id="gitcat" src="../styles/gitcat.jpg" />
            <input type="text" placeholder="Search or jump to..." id="search" />
            <div id="pull">Pull requests</div>
            <div id="issues">Issues</div>
            <div id="marketplace">Marketplace</div>
            <div id="explore">Explore</div>
          </div>
        <div className="bigWrapper">
          <User {...user} />
          <Repos repos={repos} />
        </div>
      </div>
  )
}

export default Wrap
