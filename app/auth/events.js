'use strict'

const store = require('../store')
const getFormFields = require('./../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')

const onCreateAccount = (event) => {
  $('#sign-up').show()
  $('#create-account').hide()
  $('#sign-in').hide()
  $('#confirm-message').text('Create an Account')
}

const onAdviceCorner = (event) => {
  // $('#advice').trigger('reset')
  $('#advice-response').show()
}

const onSignUp = (event) => {
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

const onSignIn = (event) => {
  event.preventDefault()
  console.log('Hello')
  const form = event.target
  const data = getFormFields(form)
  console.log(data)
  api.signIn(data)
    .then(ui.onSignInSuccess)
    .catch(ui.onSignInFailure)
}

const onSignOut = (event) => {
  event.preventDefault()

  api.signOut()
    .then(ui.onSignOutSuccess)
    .catch(ui.onSignOutFailure)
}

const onChangePassword = (event) => {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)
  console.log('In events.js/onChangePassword')

  api.changePassword(data)
    .then(ui.onChangePasswordSuccess)
    .catch(ui.onChangePasswordFailure)
}

const onCreateBug = (event) => {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)

  api.createBug(data)
    .then(ui.onCreateBugSuccess)
    .catch(ui.onCreateBugFailure)
}

const onShowBugCage = () => {
  api.showBugCage()
    .then(ui.onShowBugCageSuccess)
    .catch(ui.onShowBugCageFailure)
}

const onDeleteBug = (event) => {
  event.preventDefault()

  const form = event.target
  const deleteBug = getFormFields(form)
  console.log('bug to delete: ', deleteBug)

  const deleteId = deleteBug.bug._id
  store.bugId = deleteId
  console.log('deletedId is: ', deleteId)

  api.deleteBug(deleteId)
    .then(ui.onDeleteBugSuccess)
    .catch(ui.onDeleteBugFailure)
}

const onDynamicDeleteBug = (event) => {
  console.log($(event.target).data('_id'))
  const bugId = $(event.target).data('_id')

  api.deleteBug(bugId)
    .then(ui.onDeleteBugSuccess)
    .catch(ui.onDeleteBugFailure)
}

module.exports = {
  onAdviceCorner,
  onCreateAccount,
  onSignUp,
  getFormFields,
  onSignIn,
  onSignOut,
  onChangePassword,
  onCreateBug,
  onShowBugCage,
  onDeleteBug,
  onDynamicDeleteBug
}
