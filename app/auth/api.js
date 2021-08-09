'use strict'

const config = require('./../config')
const store = require('./../store')

const signUp = (data) => {
  console.log(data)
  return $.ajax({
    url: config.apiUrl + '/sign-up',
    method: 'POST',
    data: data
  })
}

const signIn = (data) => {
  console.log(data)
  return $.ajax({
    url: config.apiUrl + '/sign-in',
    method: 'POST',
    data: data
  })
}

const signOut = () => {
  return $.ajax({
    url: config.apiUrl + '/sign-out',
    method: 'DELETE',
    headers: {
      Authorization: 'Bearer ' + store.token
    }
  })
}

const changePassword = (data) => {
  return $.ajax({
    url: config.apiUrl + '/change-password',
    method: 'PATCH',
    headers: {
      Authorization: 'Bearer ' + store.token
    },
    data: data
  })
}

const createBug = (data) => {
  return $.ajax({
    url: config.apiUrl + '/bugs',
    method: 'POST',
    headers: {
      Authorization: 'Bearer ' + store.token
    },
    data: data
  })
}

const showBugCage = () => {
  return $.ajax({
    url: config.apiUrl + '/bugs',
    method: 'GET',
    headers: {
      Authorization: 'Bearer ' + store.token
    }
  })
}

const deleteBug = () => {
  return $.ajax({
    url: config.apiUrl + '/bugs/' + store.bugId,
    method: 'DELETE',
    header: {
      Authorization: 'Bearer ' + store.token
    }
  })
}

module.exports = {
  signUp,
  signIn,
  signOut,
  changePassword,
  createBug,
  showBugCage,
  deleteBug
}
