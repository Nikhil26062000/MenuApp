import React from 'react';
import Header from './Header';
import {Switch , Route } from 'react-router-dom';
import All from './All';
import BreakFast from './BreakFast';
import Lunch from './Lunch';
import Evening from './Evening';
import Dinner from './Dinner';
import NavBar from './NavBar';


const App = () => {
    return(
        <>
            <Header />
            <NavBar />

            <Switch>
            
                <Route exact path="/breakfast" component={BreakFast} />
                <Route exact path="/lunch" component={Lunch} />
                <Route exact path="/evening" component={Evening} />
                <Route exact path="/dinner" component={Dinner} />
                <Route exact path="/" component={All} />
            </Switch>
        </>
    )
}

export default App