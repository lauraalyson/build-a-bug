'use strict'

const store = require('./../store')

const onSignUpSuccess = (response) => {
  $('#message').text(`Thank you for signing up ${response.user.email}`)
  console.log(response)
  $('#sign-up').trigger('reset')
  $('#sign-up').hide()
  $('#sign-in').show()
  $('#sign-out').show()
}

const onSignUpFailure = () => {
  $('#message').text('Sign up failure')
  $('#sign-up').trigger('reset')
}

const onSignInSuccess = (response) => {
  $('#message').text(`Hey, ${response.user.email}! You're logged in.`)
  store.token = response.user.token
  $('#sign-in').trigger('reset')
  $('#sign-in').hide()
  $('#sign-up').hide()
  $('#sign-out').show()
}

const onSignInFailure = () => {
  $('#message').text('Login attempt failed.')
  $('#sign-in').trigger('reset')
}

const onSignOutSuccess = () => {
  $('#message').text('Signed Out! See you next time.')
  $('#sign-in').show()
  $('#sign-up').show()
  $('#sign-out').hide()
}

const onSignOutFailure = () => {
  $('#message').text('Unsuccessfully signed out.')
}

module.exports = {
  onSignUpFailure,
  onSignUpSuccess,
  onSignInSuccess,
  onSignInFailure,
  onSignOutSuccess,
  onSignOutFailure
}
