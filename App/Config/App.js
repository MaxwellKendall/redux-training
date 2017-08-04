import React from 'react'
import { Router, Route, Switch } from 'react-router-dom'
import createHashHistory from 'history/createHashHistory'
import { connect } from 'react-redux'
import { HomeContainer } from 'Containers'
import { AuthenticateContainer } from 'Containers'
import { Navigation } from 'Components'

class App extends React.Component {
    render(){
        const history = createHashHistory();
        console.log('props for App component', this.props);
        return (
            <Router history={history} >
                <div>
                    <Navigation isAuthed={this.props.isAuthed} />
                    <Switch>
                        <Route exact
                            path='/'
                            component={HomeContainer}
                        />
                        <Route exact
                            path='/auth'
                            component={AuthenticateContainer}
                        />
                    </Switch>
                </div>
            </Router>
        )
    }
}

App.propTypes = {
    isAuthed : PropTypes.bool.isRequired
}

export default connect(
    (state) => (
        {isAuthed: state.isAuthed}
    )
) (App)
