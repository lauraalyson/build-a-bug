// use require with a reference to bundle the file and use it in this file
// const example = require('./example')
const authEvents = require('./auth/events')
// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  $('#create-account').on('click', authEvents.onCreateAccount)
  $('#show-sign-in').on('click', authEvents.onShowSignIn)
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#sign-out').on('click', authEvents.onSignOut)
  $('#show-change-password').on('click', authEvents.onShowChangePassword)
  $('#change-password').on('submit', authEvents.onChangePassword)
  $('#show-create-bug').on('click', authEvents.onShowCreateBug)
  $('#create-bug').on('submit', authEvents.onCreateBug)
  $('#bug-cage').on('click', authEvents.onShowBugCage)
  $('#bug-message').on('click', '.dynamic-delete-bug', authEvents.onDynamicDeleteButton)
  $('#update-book-form').on('submit', authEvents.onUpdateBug)
  $('#bug-message').on('submit', '.update-field', authEvents.onUpdateBug)

  $('#bug-message').on('click', '.show-update-field', authEvents.onShowUpdateField)

  $('#bug-type-1').on('click', authEvents.onChooseBugType)
  $('#bug-type-2').on('click', authEvents.onChooseBugType)
  $('#bug-type-3').on('click', authEvents.onChooseBugType)
  $('#bug-type-4').on('click', authEvents.onChooseBugType)

  $('#bug-message').on('click', '.advice', authEvents.onShowAdviceCorner)
  $('#bug-message').on('submit', '.show-advice', authEvents.onAdviceCorner)
})
