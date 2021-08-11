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
  $('#show-change-password').show()
  $('#sign-out').show()
  $('#build-a-bug').show()
  $('#show-create-bug').show()
  $('#create-bug').hide()
  $('#bug-cage').show()
  console.log('this is store.token: ' + store.token)
}

const onSignInFailure = () => {
  $('#message').text('Login attempt failed.')
  $('#sign-in').trigger('reset')
}

const onSignOutSuccess = (response) => {
  $('#message').text('Signed Out! See you next time.')
  $('#sign-in').show()
  $('#sign-up').hide()
  $('#create-account').show()
  $('#sign-out').hide()
  $('#show-change-password').hide()
  $('#change-password').hide()
  $('#build-a-bug').hide()
  $('#confirm-new-password').hide()
}

const onSignOutFailure = () => {
  $('#message').text('Unsuccessfully signed out.')
}

const onChangePasswordSuccess = () => {
  $('#message').text('Woohoo! New password!')
  $('#change-password').hide()
  $('#confirm-new-password').show()
}

const onChangePasswordFailure = () => {
  $('#message').text('Hmm... try again')
}

const onCreateBugSuccess = (response) => {
  $('#bug-message').text(`Yay! Your bug is really coming along. What kind of bug is ${response.bug.name}?`)
  $('.bug-types').show()
  $('#create-bug').hide()
  store.updateId = response.bug._id
}

const onCreateBugFailure = () => {
  $('#message').text('Hmm.. this did not work')
}

const onChooseBugTypeSuccess = (response) => {
  $('.bug-types').hide()
  $('#bug-message').text('Dang! That is one good lookin bug. Click on your bug cage to check out your swarm.')
}

const onChooseBugTypeFailure = () => {
  $('#message').text('hmmm... try')
}

const onShowBugCageSuccess = (response) => {
  console.log('This is the response.bug: ' + response.bugs)
  const bugs = response.bugs
  let bugsHtml = ''

  bugs.forEach(bug => {
    console.log(bug)
    bugsHtml += `
    <div class='bug-cards'>
      <img src=${bug.image}><br>
      <p>Hey, I'm ${bug.name}! I've been around for ${bug.age} years and I'm quite the fan of the ${bug.favErrorCode} error code. Nice to meet ya!</p>
    </div>

      <button class='dynamic-delete-bug' data-id=${bug._id}>Release</button>

      <button data-id=${bug._id} class='show-update-field'>Rename</button><br>

      <form class='update-field' style='display:none;'>
      <input name='bug[name]' type='text'>
      <input type='submit' value='submit'>
      </form>
    `
  })

  $('#bug-message').html(bugsHtml)
  // $('form').trigger('reset')
}

const onShowBugCageFailure = () => {
  console.log('no bugs found')
  $('#message').text('Cannot find bugs')
}

const onDeleteBugSuccess = () => {
  $('#message').text('Bug was deleted')
  $('form').trigger('reset')
}

const onDeleteBugFailure = () => {
  $('#message').text('Unable to delete bug')
}

const onUpdateBugSuccess = () => {
  $('#message').text('This bug has a new name!')
}

const onUpdateBugFailure = () => {
  $('#message').text('Cannot rename bug.')
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
  onCreateBugFailure,
  onCreateBugSuccess,
  onChooseBugTypeSuccess,
  onChooseBugTypeFailure,
  onShowBugCageSuccess,
  onShowBugCageFailure,
  onDeleteBugSuccess,
  onDeleteBugFailure,
  onUpdateBugSuccess,
  onUpdateBugFailure
}
