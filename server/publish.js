Meteor.publish('joueurs', function() {
  return Joueurs.find();
});
