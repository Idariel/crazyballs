Router.configure({
  layoutTemplate: 'commun'
});
// Router.route('/', function(){  // '/' est la route
//   this.render('xxx');  // xxx est le template name
// });
// Router.route('/', function(){
//   this.render('commun');
// });

// Router.route('/login', function(){
//   this.render('connexion');
// });
// Router.route('/logout', function(){
//   var that = this;
//   Meteor.logout(function(error){
//     if(!error){
//       that.redirect('/');
//     };
//   });
// });
// Router.route('/profile', function(){
//   if(Meteor.user()){
//     this.render('profil');
//   }else{
//     this.render('interdit');
//   }
// });
