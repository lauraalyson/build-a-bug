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
  $('#build-a-bug').show()
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

const onCreateBugSuccess = (response) => {
  console.log('This is the response.bug: ' + response.bug.name)
  console.log('This is the response.bug: ' + response.bug.age)
  console.log('This is the response.bug: ' + response.bug.favErrorCode)
  // $('#message').text(`yay! Now ${response.bug.name} really has autonomy. This bug is really coming along!`)
  $('#message').text(`Hi! I am ${response.bug.name}, I am ${response.bug.age} years old and i am quite partial to the ${response.bug.favErrorCode} error code.`)
}

const onCreateBugFailure = () => {
  $('#message').text('Hmm.. this did not work')
}

const onShowBugCageSuccess = (response) => {
  console.log('This is the response.bug: ' + response.bugs)
  const bugs = response.bugs
  let bugsHtml = ''

  bugs.forEach(bug => {
    console.log(bug)
    bugsHtml += `
      <img src=${bug.image}>
      <h4>Name: ${bug.name}</h4>
      <p>Age: ${bug.age}</p>
      <p>Favorite Error Code: ${bug.favErrorCode}</p>
      <p>Bug Id: ${bug._id}</p>
      <button class='dynamic-delete-bug' data-id=${bug._id}>Delete</button>

      <button data-id=${bug._id} class='show-update-field'>Update</button>

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
  $('#message').text('Bug was updated')
  $('#bug-message').trigger('reset')
}

const onUpdateBugFailure = (error) => {
  $('#message').text('Cannot update bug.')
  console.error(error)
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
  onShowBugCageSuccess,
  onShowBugCageFailure,
  onDeleteBugSuccess,
  onDeleteBugFailure,
  onUpdateBugSuccess,
  onUpdateBugFailure
}
