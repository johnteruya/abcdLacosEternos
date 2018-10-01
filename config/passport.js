var passport = require('passport')
  , LocalStrategy = require('passport-local').Strategy;
var findOrCreate = require('mongoose-findorcreate');
var mongoose = require('mongoose');


module.exports = function(){



    var User = mongoose.model('User');
    var Partner = mongoose.model('Parceiro');
    //1 param usuario encontrado, 2 param uma funcao que recebe a informacao do usuario que desejamos serializar na sessao
    passport.serializeUser(function (user, done) {
        /*console.log("passport.serializeUser => user:"+ user);
        console.log("passport.serializeUser => done:"+ done);*/
        done(null, user._id);
    });

    passport.deserializeUser(function (id, done) {

        User.findById(id).exec()
            .then(function (user) {
                done(null, user);
            });
    });

    //#################Strategy local###########################
   passport.use('local', new LocalStrategy(
  function(username, password, done) {

     User.findOne({ email: username }, function(err, user) {
      if (err) { return done(err); }
      if (!user) {
        console.log("message: 'Incorrect username."); 
        return done(null, false, { message: 'Incorrect username.' });
      }
     /*  var senha= user.encryptPassword(password);
       console.log(senha);*/
      if (!user.validPassword(password)) {
        console.log("message: 'Incorrect password."); 
        return done(null, false, { message: 'Incorrect password.' });
      }

      return done(null, user);
    });


  }
));

}

 
    