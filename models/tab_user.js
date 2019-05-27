const mongoose = require('mongoose')
const TabUserSchema = mongoose.Schema({
    usercode :String,
    username : String,
    pwd : String,
    ssex : String,
    role : String
  }, { collection: 'TAB_USER'})
  
  const TabUser = module.exports = mongoose.model('tabuser', TabUserSchema);