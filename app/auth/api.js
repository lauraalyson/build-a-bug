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

const updateImg = () => {
  return $.ajax({
    url: config.apiUrl + '/bugs/' + store.updateId,
    method: 'PATCH',
    headers: {
      Authorization: 'Bearer ' + store.token
    },
    data: {
      bug: {
        image: store.updateImg
      }
    }
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
    headers: {
      Authorization: 'Bearer ' + store.token
    }
  })
}

const updateBug = (updateData) => {
  return $.ajax({
    url: config.apiUrl + '/bugs/' + store.updateId,
    method: 'PATCH',
    headers: {
      Authorization: 'Bearer ' + store.token
    },
    data: {
      bug: {
        name: updateData
      }
    }
  })
}

module.exports = {
  signUp,
  signIn,
  signOut,
  changePassword,
  createBug,
  updateImg,
  showBugCage,
  deleteBug,
  updateBug
}
