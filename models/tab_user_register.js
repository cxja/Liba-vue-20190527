const mongoose = require('mongoose')
const TabUserRegisterSchema = mongoose.Schema({
    usercode :String,
    username : String,
    pwd : String,
    ssex : String,
    role : String
  }, { collection: 'TAB_USER'})
  
  const TabUserRegister = module.exports = mongoose.model('tabuser', TabUserRegisterSchema);