'use strict'

const getFormFields = require('./../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')

const onCreateAccount = (event) => {
  $('#sign-up').show()
  $('#create-account').hide()
  $('#sign-in').hide()
  $('#confirm-message').text('Create an Account')
}

const onSignUp = function (event) {
  event.preventDefault()
  console.log('hi!')
  const form = event.target
  console.log(form)
  const data = getFormFields(form)
  console.log(data)
  api.signUp(data)
    .then(ui.onSignUpSuccess)
    .catch(ui.onSignUpFailure)
}

const onSignIn = function (event) {
  event.preventDefault()
  console.log('Hello')
  const form = event.target
  const data = getFormFields(form)
  console.log(data)
  api.signIn(data)
    .then(ui.onSignInSuccess)
    .catch(ui.onSignInFailure)
}

const onSignOut = function (event) {
  event.preventDefault()

  api.signOut()
    .then(ui.onSignOutSuccess)
    .catch(ui.onSignOutFailure)
}

const onChangePassword = function (event) {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)
  console.log('In events.js/onChangePassword')

  api.changePassword(data)
    .then(ui.onChangePasswordSuccess)
    .catch(ui.onChangePasswordFailure)
}

module.exports = {
  onCreateAccount,
  onSignUp,
  getFormFields,
  onSignIn,
  onSignOut,
  onChangePassword
}
