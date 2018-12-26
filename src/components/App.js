import React,{Component}  from 'react'
import Navbar from '../components/Navbar'
import { Route,Switch,Redirect } from 'react-router-dom'
import Home from './Home'
import NoMatch from './NoMatch'
import About from './About'
import Categories from './Categories'
import Login from './Login'
export default class App extends Component{
    render(){
        return(
            <div>
                <Navbar />

                <main>
                <Switch>
                <Route exact path="/Home" component={Home}/>
                <Route exact path="/About" component={About}/>
                <Route exact path="/Categories" component={Categories}/>
                <Route exact path="/Login" component={Login}/>

                <Route exact path="/">
                    <Redirect to="/Home" />
                </Route>
                <Route component={NoMatch} />
            </Switch>
                </main>
            </div>
        )
    }
}