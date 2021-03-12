const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/dormitory-manager')

const db = mongoose.connection

db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', function () {
  // we're connected!
  console.log('connect database success！')
})
