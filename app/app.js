// use require with a reference to bundle the file and use it in this file
// const example = require('./example')
const authEvents = require('./auth/events')
// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  $('#create-account').on('click', authEvents.onCreateAccount)
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#sign-out').on('click', authEvents.onSignOut)
  $('#change-password').on('submit', authEvents.onChangePassword)
  $('#create-bug').on('submit', authEvents.onCreateBug)
  $('#bug-cage').on('click', authEvents.onShowBugCage)
  $('#deleted-bug').on('click', '.dynamic-delete-bug', authEvents.onDynamicDeleteButton)
  $('#advice').on('click', authEvents.onAdviceCorner)
  $('#update-book-form').on('submit', authEvents.onUpdateBug)

  $('#deleted-bug').on('click', 'update-field', authEvents.onShowUpdateField)

  $('#deleted-bug').on('click', '.show-update-field', authEvents.onShowUpdateField)
})
