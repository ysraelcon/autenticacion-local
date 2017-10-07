var Mng=require('mongoose'),
 bcrypt=require('bcrypt-nodejs'),
 ussch=Mng.Schema({
email:{type:String,unique:true},
password:{type:String}
});

ussch.methods.generateHash=function(password){
 return bcrypt.hashSync(password,bcrypt.genSaltSync(8),null);
};

ussch.methods.validPassword=function(password){
 return bcrypt.compareSync(password,this.password);
};

module.exports=Mng.model('User',ussch);



