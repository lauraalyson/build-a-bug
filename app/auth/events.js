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
}

const onAdviceCorner = (event) => {
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

const onShowChangePassword = (event) => {
  $('#change-password').toggle()
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

const onShowCreateBug = (event) => {
  $('#create-bug').show()
  $('#bug-message').text('')
}

const onCreateBug = (event) => {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)
  console.log(data)
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
  console.log(store.updateImage)
  console.log(image)
  const imageSrc = $(this).attr('src')
  console.log('this is imageSrc ' + imageSrc)
  store.updateImg = imageSrc

  api.updateImg(store.updateImg)
    .then(ui.onChooseBugTypeSuccess)
    .catch(console.log('did not work'))
}

const onShowBugCage = () => {
  api.showBugCage()
    .then(ui.onShowBugCageSuccess)
    .catch(ui.onShowBugCageFailure)
}

const onDynamicDeleteButton = (event) => {
  event.preventDefault()
  console.log($(event.target).data('id'))
  store.bugId = $(event.target).data('id')

  api.deleteBug(store.bugId)
    .then(ui.onDeleteBugSuccess)
    .catch(ui.onDeleteBugFailure)
}

const onShowUpdateField = (event) => {
  store.updateId = $(event.target).data('id')
  console.log('this is store.updateId: ' + store.updateId)
  $('.update-field').show()
}

const onUpdateBug = (event) => {
  event.preventDefault()
  const form = event.target
  console.log('this is the form: ' + form)
  const data = getFormFields(form)
  const updateData = data.bug.name
  console.log('this is updateData ' + updateData)

  api.updateBug(updateData)
    .then(ui.onUpdateBugSuccess)
    .catch(ui.onUpdateBugFailure)
}

module.exports = {
  onAdviceCorner,
  onCreateAccount,
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
