import React from 'react';
import { Home } from './src/components/Home'
import { About } from './src/components/About'
import { TopicList } from './src/components/TopicList'
import { TopicDetail } from './src/components/TopicDetail'

import { NoMatch } from './src/components/NoMatch'
import { Navbar } from './src/components/Navbar'
import { Route,Switch,Redirect } from 'react-router-dom'

export const Routes = () =>{
    return(
        <div>
            <Navbar />
            <Switch>
                <Route exact path="/Home" component={Home}/>
                <Route exact path="/">
                    <Redirect to="/Home" />
                </Route>

                <Route exact path="/About" component={About}/>
                <Route exact path="/Topics" component={TopicList}/>
                <Route path="/Topics/:topicId"  component={TopicDetail} />
                <Route component={NoMatch} />
            </Switch>
        </div>
    )
}





