# Node.js | Linter

Le linting est le processus automatisé de vérification de ton code pour détecter d'éventuelles erreurs de programmation et de style.

# Sommaire

- [Utiliser Biome](#utiliser-biome)

- [Installer Biome](#installer-biome)

- [Configuration de biome](#configuration-de-biome)

- []()

- []()

- []()

- []()

- []()

### Utiliser Biome [^](#sommaire)

**ESLint** est l'un des linters les plus **populaires** disponibles pour le linting en **JavaScript**. Il est couramment utilisé avec la configuration **Airbnb** qui est l'une des plus strictes.

**Prettier** est la **référence** pour le **formatage** de code. C'est un outil avec des partis-pris forts et peu d'options pour personnaliser le style du code.

Biome réunit les 2 fonctionnalités en un outil : **linting** et **formatage**.

### Installer Biome [^](#sommaire)

La première chose à faire est de créer un dossier et d'initialiser le projet :

`npm init -y` pour générer le fichier `package.json`.

Il y a deux façons d'installer Biome, soit localement dans le projet, soit globalement dans la machine.

`npm install --save-dev --save-exact @biomejs/biome`

`--save-dev` signifie que ce paquet est installé sur les **dépendances dev**.

La différence entre **dependencies** et **dev dependencies**, est que les **dépendances dev** sont des **modules** qui ne sont nécessaires que pendant le **développement**, alors que les **dépendances** sont des **modules** qui sont également nécessaires à l'**exécution**.

### Configuration de biome [^](#sommaire)

`npx @biomejs/biome init` lancer biome et le processus de configuration.

L'installation de Biome est terminée ! Dans les fichiers du projet, nous devrions voir un fichier nommé `biome.json` avec un code similaire à celui-ci :

```powershell
{
  "$schema": "https://biomejs.dev/schemas/1.8.3/schema.json",
  "organizeImports": {
    "enabled": true
  },
  "linter": {
    "enabled": true,
    "rules": {
      "recommended": true
    }
  }
}
```

### Biome et VSCode [^](#sommaire)

Sur VSCode, tu peux avoir des pratiques de code mises en évidenceen installant l'extension Biome.

  Ensuite, utilise l'éditeur de paramètres pour modifier les paramètres de VSCode. Pour ouvrir l'éditeur de paramètres, utilise le menu Fichier > Préférences (Code > Préférences ou Code > Paramètres sur macOS) > Paramètres. Tu peux également utiliser le raccourci clavier Ctrl+,.

Lorsque tu ouvres l'éditeur de paramètres, tu peux chercher des paramètres en particulier à l'aide de la barre de recherche, Tape format comme sur cette capture d'écran :

"format" dans la barre de recherche

Assure toi que Biome est le formateur par défaut (Editor: Default Formatter) et que la case Editor: Format On Save est cochée : de cette manière, VSCode utilisera Biome pour formater ton code automatiquement à chaque sauvegarde.
