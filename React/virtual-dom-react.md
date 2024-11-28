# Le Virtual DOM

## Sommaire

- [Qu’est-ce que le Virtual DOM ?](#quest-ce-que-le-virtual-dom-)
- [Pourquoi le Virtual DOM ?](#pourquoi-le-virtual-dom-)
- [Fonctionnement du Virtual DOM](#fonctionnement-du-virtual-dom)
- [Avantages du Virtual DOM](#avantages-du-virtual-dom)
- [Limites](#limites)
- [Exemple simplifié](#exemple-simplifié)
- [Conclusion](#conclusion)

---

### Qu’est-ce que le Virtual DOM ? [^](#sommaire)

Le **Virtual DOM** (Document Object Model virtuel) est une **représentation en mémoire** de l’arbre DOM réel du navigateur. Il permet à des bibliothèques comme **React** de gérer efficacement les mises à jour de l’interface utilisateur en limitant les manipulations directes du DOM, souvent coûteuses en termes de performances.

---

### Pourquoi le Virtual DOM ? [^](#sommaire)

Le DOM du navigateur est **lent à manipuler**. Chaque modification ou mise à jour d’un élément déclenche un recalcul des styles, un re-rendu graphique et parfois une reflow (réorganisation des éléments).  

Le Virtual DOM agit comme une **couche intermédiaire** :  
1. Il applique les changements dans un arbre en mémoire (virtuel).  
2. Une fois les modifications terminées, il compare la version mise à jour avec la précédente (**diffing**).  
3. Seules les différences sont appliquées au DOM réel, réduisant les interactions inutiles avec le navigateur.  

---

### Fonctionnement du Virtual DOM [^](#sommaire)

1. **Création du Virtual DOM**  
   Lorsqu’une interface est rendue, React crée un arbre en mémoire représentant l’arbre DOM réel, basé sur la structure de l’application.

2. **Mise à jour**  
   Lorsqu’un état ou des données changent, un nouvel arbre Virtual DOM est généré.

3. **Diffing**  
   React compare le nouvel arbre avec l’ancien pour détecter les **changements** (ajout, modification ou suppression de nœuds).

4. **Reconciliation**  
   Les différences sont traduites en un **minimum de modifications** et appliquées au DOM réel.

---

### Avantages du Virtual DOM [^](#sommaire)

1. **Performance accrue**  
   Les opérations sur le DOM réel sont minimisées, rendant les mises à jour plus rapides.

2. **Interface réactive**  
   Les modifications sont calculées efficacement, garantissant une **fluidité** dans les interactions utilisateur.

3. **Code déclaratif**  
   Les développeurs décrivent l’état final de l’interface sans se soucier des manipulations DOM sous-jacentes.

4. **Portabilité**  
   Étant abstrait du DOM réel, React peut être utilisé avec d’autres environnements (comme React Native).

---

### Limites [^](#sommaire)

- **Consommation mémoire** : Le Virtual DOM nécessite des ressources pour stocker l’arbre en mémoire et effectuer les comparaisons.
- **Non optimal pour des cas simples** : Sur des interfaces très légères, il peut être moins performant qu’un accès direct au DOM.

---

### Exemple simplifié [^](#sommaire)

```javascript
// Mise à jour classique du DOM
document.getElementById('button').innerText = 'Cliquez ici';

// Avec React et le Virtual DOM
const Button = () => <button>Cliquez ici</button>;
ReactDOM.render(<Button />, document.getElementById('root'));

Avec le Virtual DOM, la manipulation du DOM réel est gérée automatiquement, en ne mettant à jour que l’élément nécessaire (le texte du bouton).


---

Conclusion ^

Le Virtual DOM est une innovation clé dans les bibliothèques modernes comme React. Il permet de concilier performances et simplicité de développement, en déléguant la gestion complexe des mises à jour DOM au moteur de React. Il est particulièrement efficace pour des interfaces complexes avec de nombreuses interactions.


---

[Retour au sommaire](#sommaire)