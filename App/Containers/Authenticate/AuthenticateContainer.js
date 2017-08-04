import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Authenticate } from 'Components'
import * as userActionCreators from 'Redux/Modules/Users'

class AuthenticateContainer extends React.Component {
    constructor(props){
        super(props);
        this.state = {

        }
    this.handleAuth = this.handleAuth.bind(this)
    }
  handleAuth (props) {
      this.props.fetchAndHandleAuthedUser()
  }
  render () {
      console.log('Props for AuthenticateContainer', this.props);
    return (
      <Authenticate
        onAuth={this.handleAuth}
        isFetching={this.props.isFetching}
        error={this.props.error} />
    )
  }
}

function mapStateToProps(state){
    return {
        isFetching: state.isFetching,
        error: state.error
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators(userActionCreators, dispatch)
}

AuthenticateContainer.propTypes = {
    isFetching: PropTypes.bool.isRequired,
    error: PropTypes.string.isRequired,
    fetchAndHandleAuthedUser: PropTypes.func.isRequired
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
) (AuthenticateContainer)
