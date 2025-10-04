# Tester son application

## Sommaire [^](#sommaire)

- [Pourquoi faire des test ?](#pourquoi-faire-des-test)
- [TDD Test Driven Development](#tdd-test-driven-development)
- [Qui écrit les tests ?](#qui-écrit-les-tests)
- [Les différents types detest](#les-différents-types-detest)
- [Les librairies des test unitaire](#les-librairies-des-test-unitaire)
- [Les librairies des test fonctionnels](#les-librairies-des-test-fonctionnels)
- [Les autres types de tests](#les-autres-types-de-tests)
- [Intégration continue](#intégration-continue)
- [Les outils d'intégration continue](#les-outils-dintégration-continue)
- [Outils pour tester](#outils-pour-tester)
---

**Extension** : **CodeSnap** pour réaliser des screenshots de code. Ctrl+P> cliquer sur CodeSnap

Pour le dossier, faire des screenshots sur fond blanc. Passer en lightmode sur VSCode.

---

## Pourquoi faire des test ? [^](#sommaire)

- Confirmer le **comportement attendu** de l'application
- Dégager les **cas extrêmes** ou **limites**
- Améliorer la **qualité** du développement
- Eviter le bugs
- Empêcher la **régression** de l'application

---

## TDD Test Driven Development [^](#sommaire)

Les test peuvent être écrits **avant (TDD)** ou **après**.

Coder des tests avant le dévelopement est **plus coûteux** que de les écrire après.

---

## Qui écrit les tests ? [^](#sommaire)

- C'est le dev qui rédige les test

- Les testeurs sont des personnes dédiées

- Il est préférable que les tests soient rédigées 
par les gens du métier.

---

## Les différents types de test [^](#sommaire)

1. **Tests unitaires :** bon fonctionnement d'une unité de code.
2. **Tests d'intégration :** bon fonctionnement d'unités de code ensemble (ajout de dépendances)
3. **Tests fonctionnels :** font partie des test **end to end**. Test en situation réelle du site.

## Les librairies des test unitaire [^](#sommaire)

- Jasmine
- Jest
- Mocha
- PHPUnit
- JUnit 5

## Les librairies des test fonctionnels [^](#sommaire)

- Panther
- Behat
- Playwright
- Watir
- WebDriver

## Les autres types de tests [^](#sommaire)

- Test de performances
- Test de montée en charge : dans des cas d'utilisation intensive (grand nombre d'utilisateurs simultanés)
- Tests d'intrusion/sécurité
- Tests utilisateurs : tester par de vrais utilisateurs pour l'ergonomie, la pertinence, l'UX/UI

## Intégration continue [^](#sommaire)

**Définition :** Ensemble de pratiques qui consiste à lancer des actions à chaque modification du code.

A chaque nouveau **commit**, exécution **automatique** des test pour vérifier le bon fonctionnement de l'application.

## Les outils d'intégration continue [^](#sommaire)

- CI/CD
- Travis CI
- Jenkins
- GitHub Actions
- Circle**ci**

## Outils pour tester [^](#sommaire)

### Test dans la MonoRepo :

- **Jest** et **SuperTest**

[Retour au sommaire](#sommaire)
