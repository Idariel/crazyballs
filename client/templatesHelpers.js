Template.nbJoueurs.helpers({ // affiche le nombre de joueurs

  nombreJoueurs: function () {
    return Session.get('nombreJoueurs');
  }
});

Template.body.helpers({ //Define user collection and load joueursCol from it
user: function(){
  return users.find({}, {sort: {createdAt: -1}}); //sort: -1 => ordre inverse
}
});
