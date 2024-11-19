# NPM : Node Package Manager

## Sommaire

- [Introduction](#introduction)

- [Les différents type de modules](#les-différents-type-de-modules)
  - [Modules built-in](#modules-built-in)
  - [Modules locaux](#modules-locaux)
  - [Modules externes packages](#modules-externes-packages)

### Introduction [^](#sommaire)

**NPM** est un gestionnaire de paquets pour **Node**. Cela signifie que les développeurs peuvent **partager** leur **code Javascript** en quelques étapes, simplement en utilisant un **outil en ligne de commande**.

**NPM** permet d'installer et de gérer des bouts de code réutilisables que nous pouvons importer avec `require` dans nos projets. Ces bouts de code sont appelés **packages**, **dépendances** ou encore **modules externes**.

### Les différents type de modules [^](#sommaire)

Les différents types de modules dans Node :

#### Modules built-in [^](#sommaire)

Leur code est **directement empaqueté** avec le **programme Node.js**, donc pas besoin de les installer.

#### Modules locaux [^](#sommaire)

C'est simplement le code réparti dans plusieurs fichiers au sein d'un projet. Les modules locaux sont toujours importés en utilisant un chemin relatif (ex: `./userInformation.js`).

#### Modules externes (packages) [^](#sommaire)

Ils viennent de la **communauté open source**, en d'autres termes, des **développeurs du monde entier** partageant du code via internet.
