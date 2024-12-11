# Les bases de données

## Sommaire

- [MCD](#mcd-modèle-conceptuel-dedonnées)
- [MLD](#mld-modèle-logique-de-données)
- [MPD](#mpd-modèle-physique-de-données)

### MCD (Modèle Conceptuel deDonnées) [^](#sommaire)

- Définir les entités et leurs propriétés
- Une entité à un identifiant unique
- Définir les relations entre les entités
- Les relations ont un nom (souvent un verbe d'action) caractérisant la relation
- Pour les cardinalités, indiquer le nombre min et max de liens entre 2 entités
- 3 valeurs typiques 0, 1 et n (plusieurs)

### MLD (Modèle Logique de Données) [^](#sommaire)

- Prendre les plus grandes cardinalité
- 3 possibilités:
	- One to One (1,1)
	- Many to One (n,1)
	- Many to Many (n,n)
- Toujours ajouter une clé étrangère côté 1.
- Quand une relation est Many to Many, ces 2 tables doivent être reliées par une table de jointure
- La table de jointure doit contenir 2 clé étrangères

### MPD (Modèle Physique de Données) [^](#sommaire)

- Ajouter les type de données (VARCHAR, INT...)
- Contraintes (unique, nullable, auto-incrémentation)

[Retour au sommaire](#sommaire)