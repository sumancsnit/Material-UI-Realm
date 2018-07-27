import React, {Component, Fragment} from 'react'
import './App.css'
import {Header, Footer} from './Components/Layout'
import Exercise from './Components/Exercises'

class App extends Component {
    render() {
        return <Fragment>
            <Header/>

              <Exercise />

            <Footer />
        </Fragment>

    }
}

export default App;
