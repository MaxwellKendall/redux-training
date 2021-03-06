import React from 'react'
import PropTypes from 'prop-types'
import { centeredContainer, largeHeader, errorMsg } from 'SharedStyles/styles.css'
import { FacebookAuthButton } from 'Components'


const Authenticate = ({onAuth, isFetching, error}) => {
  return (
    <div className={centeredContainer}>
      <h1 className={largeHeader}>{'Authenticate'}</h1>
      <FacebookAuthButton isFetching={isFetching} onAuth={onAuth} />
      {error ? <p className={errorMsg}>{error}</p> : null}
    </div>
  )
}

Authenticate.propTypes = {
  error: PropTypes.string.isRequired,
  isFetching: PropTypes.bool.isRequired,
  onAuth: PropTypes.func.isRequired,
}

export default Authenticate
