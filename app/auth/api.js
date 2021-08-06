'use strict'

const store = require('./../store')

const signUp = function (data) {
  console.log(data)
  return $.ajax({
    url: 'https://library-express-api.herokuapp.com/sign-up',
    method: 'POST',
    data: data
  })
}

const signIn = function (data) {
  console.log(data)
  return $.ajax({
    url: 'https://library-express-api.herokuapp.com/sign-in',
    method: 'POST',
    data: data
  })
}

const signOut = function (data) {
  return $.ajax({
    url: 'https://library-express-api.herokuapp.com/sign-out',
    method: 'DELETE',
    headers: {
      Authorization: 'Bearer ' + store.token
    }
  })
}

const changePassword = function (data) {
  return $.ajax({
    url: 'https://library-express-api.herokuapp.com/change-password',
    method: 'PATCH',
    headers: {
      Authorization: 'Bearer ' + store.token
    },
    data: data
  })
}

module.exports = {
  signUp,
  signIn,
  signOut,
  changePassword
}
