'use strict'

const store = require('../store')
const getFormFields = require('./../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')

const onCreateAccount = (event) => {
  $('#sign-up').show()
  $('#create-account').hide()
  $('#sign-in').hide()
  $('#build-a-bug').hide()
  $('#confirm-message').text('Create an Account')
  $('#show-sign-in').show()
}

const onShowSignIn = (event) => {
  $('#sign-in').show()
  $('#create-account').show()
  $('#sign-up').hide()
}

const onShowAdviceCorner = () => {
  $('.show-advice').show()
  $('.advice-response').hide()
}

const onAdviceCorner = (event) => {
  event.preventDefault()
  $('.show-advice').hide()
  $('.advice-response').show()
}

const onSignUp = (event) => {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)
  api.signUp(data)
    .then(ui.onSignUpSuccess)
    .catch(ui.onSignUpFailure)
}

const onSignIn = (event) => {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)
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

const onShowChangePassword = (event) => {
  $('#change-password').toggle()
  $('#confirm-new-password').hide()
}

const onChangePassword = (event) => {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)

  api.changePassword(data)
    .then(ui.onChangePasswordSuccess)
    .catch(ui.onChangePasswordFailure)
}

const onShowCreateBug = (event) => {
  $('#create-bug').show()
  $('#bug-message').text('')
  $('#message').hide()
}

const onCreateBug = (event) => {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)
  $('#create-bug').trigger('reset')

  api.createBug(data)
    .then(ui.onCreateBugSuccess)
    .catch(ui.onCreateBugFailure)
}

const onChooseBugType = function (event) {
  $('#create-bug').hide()
  event.preventDefault()
  const image = event.target
  store.updateImage = image.url
  const imageSrc = $(this).attr('src')
  store.imageVal = $(this).attr('value')
  store.updateImg = imageSrc

  api.updateImg(store.updateImg)
    .then(ui.onChooseBugTypeSuccess)
    .catch(ui.onChooseBugTypeFailure)
}

const onShowBugCage = () => {
  $('#create-bug').hide()
  $('#message').hide()

  api.showBugCage()
    .then(ui.onShowBugCageSuccess)
    .catch(ui.onShowBugCageFailure)
}

const onDynamicDeleteButton = (event) => {
  event.preventDefault()
  store.bugId = $(event.target).data('id')

  api.deleteBug(store.bugId)
    .then(ui.onDeleteBugSuccess)
    .catch(ui.onDeleteBugFailure)
}

const onShowUpdateField = (event) => {
  store.updateId = $(event.target).data('id')
  $('.update-field').show()
}

const onUpdateBug = (event) => {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)
  const updateData = data.bug.name

  api.updateBug(updateData)
    .then(ui.onUpdateBugSuccess)
    .catch(ui.onUpdateBugFailure)
}

module.exports = {
  onShowAdviceCorner,
  onAdviceCorner,
  onCreateAccount,
  onShowSignIn,
  onSignUp,
  getFormFields,
  onSignIn,
  onSignOut,
  onShowChangePassword,
  onChangePassword,
  onShowCreateBug,
  onCreateBug,
  onChooseBugType,
  onShowBugCage,
  onDynamicDeleteButton,
  onUpdateBug,
  onShowUpdateField
}
