# DOCKER

Docker a besoin :

- d'une **image**
- d'un **conteneur**

Créer les fichiers `Dockerfile` et `.dockerignore`.

Docker utilise le langage Go

Construire l'image du projet avec la commande `docker build . -t my_docker`

Lister les images créées avec la commande `docker images`

Lancer le conteneur avec la commande `docker run -p 5173:5173 283b71e84430`

# Onparle en langage GO pour Docker

```bash
FROM node:18-alpine
# on donne la version de node souhaité ici 18 - choisir la distibution (l'OS) ici linux qui est tres legere(donc ici alpine) pour notre petit projet.
# Pour un plus gros projet, on pourrait prendre quelques jours de plus lourde avec un interface comme ubuntu

WORKDIR /app

COPY package*.json ./
# on copu tous les package.json + lock grace à l'étoile, donc ce qui est local de notre orid, puis à quel endroit je place ces deux fichiers
# L'endroit est un répertoire qu'on aura crééer en amont avec WOKDIR 

RUN npm install
#On installe les dépendances et leurs version dans notre package.json

COPY . .
# copie de tout le répertoire local, placé dansle répertoire /app

EXPOSE 5173
#Exposition du port on va prendre le port natif de vite pour un cohérence

CMD ["npm", "run", "dev", "--", "--host"]
#Commande d'execution du conteneur. CMD -> ordre d'execution des commandes + arguments pour dire tu es capable d'émettre, d'avoir une action / un répondant dans le network
#"--" fait une pause avant la commande suivante```