'use strict'

const store = require('./../store')

const onSignUpSuccess = (response) => {
  $('#message').text(`Thank you for signing up ${response.user.email}`)
  console.log(response)
  $('#sign-up').trigger('reset')
  $('#sign-up').hide()
  $('#sign-in').show()
  $('#sign-out').hide()
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
  $('#create-account').hide()
  $('#sign-out').show()
  $('#change-password').show()
  $('#sign-out').show()
}

const onSignInFailure = () => {
  $('#message').text('Login attempt failed.')
  $('#sign-in').trigger('reset')
}

const onSignOutSuccess = () => {
  $('#message').text('Signed Out! See you next time.')
  $('#sign-in').show()
  $('#sign-up').hide()
  $('#create-account').show()
  $('#sign-out').hide()
  $('#change-password').hide()
}

const onSignOutFailure = () => {
  $('#message').text('Unsuccessfully signed out.')
}

const onChangePasswordSuccess = () => {
  $('#message').text('Congrats password changed successfully')
  $('#change-password').trigger('reset')
}

const onChangePasswordFailure = () => {
  $('#message').text('Hmm... try again')
}

const onNameYourBugSuccess = () => {
  $('#message').text('yay! This bug has a name!')
  // $('#bugBio').text(``)
}

const onNameYourBugFailure = (response) => {
  $('#message').text('Hmm.. this did not work')
}

module.exports = {
  onSignUpFailure,
  onSignUpSuccess,
  onSignInSuccess,
  onSignInFailure,
  onSignOutSuccess,
  onSignOutFailure,
  onChangePasswordSuccess,
  onChangePasswordFailure,
  onNameYourBugSuccess,
  onNameYourBugFailure
}
