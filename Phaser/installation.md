# Phaser | Installation

## Sommaire

- [Installation avec CLI](#installation-avec-cli)
- [Installation de Phaser à partir de NPM](#installation-de-phaser-à-partir-de-npm)
- [Clonage de Phaser depuis GitHub](#clonage-de-phaser-depuis-github)
- [Utilisation de Phaser depuis un CDN](#utilisation-de-phaser-depuis-un-cdn)
- [Définitions de Phaser TypeScript](#définitions-de-phaser-typescript)

## Installation avec CLI [^](#sommaire)

Le moyen le plus simple de démarrer rapidement avec Phaser est d'utiliser l'outil CLI :

`npm create @phaserjs/game@latest`

## Installation de Phaser à partir de NPM [^](#sommaire)

`npm install phaser`

## Clonage de Phaser depuis GitHub [^](#sommaire)

Phaser est disponible sur GitHub à l' adresse [https://github.com/phaserjs/phaser](https://github.com/phaserjs/phaser)

Cloner via git avec :

```bash
https://github.com/phaserjs/phaser.git
# or
git@github.com:phaserjs/phaser.git
```

## Utilisation de Phaser depuis un CDN [^](#sommaire)

Phaser est sur jsDelivr. Inclure l'un des éléments suivants dans le code HTML :

```bash
<script src="//cdn.jsdelivr.net/npm/phaser@3.86.0/dist/phaser.js"></script>
<script src="//cdn.jsdelivr.net/npm/phaser@3.86.0/dist/phaser.min.js"></script>
```

## Définitions de Phaser TypeScript [^](#sommaire)

Les définitions complètes de **TypeScript** se trouvent dans le dossier `types`. Elles sont également référencées dans `types` du `package.json`, ce qui signifie que les éditeurs modernes tels que VSCode les détecteront automatiquement.

Selon votre projet, vous devrez peut-être ajouter les éléments suivants à votre fichier `tsconfig.json` :

```json
"lib": ["es6", "dom", "dom.iterable", "scripthost"],
"typeRoots": ["./node_modules/phaser/types"],
"types": ["Phaser"]
```

[Retour au sommaire](#sommaire)
