Joueurs = new Mongo.Collection("joueurs");

template.submit.events ({
  db.joueurs.insert()
})
