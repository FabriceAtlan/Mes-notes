Ce dernier permet d'initialiser des **applications monopage** (**Single Page Application ou SPA**), d'avoir un **serveur de développement** (permettant notamment de reconstruire l'application lors de la modification des fichiers), de **construire** (**build**) l'application afin de la mettre en production, et tout un tas d'autres choses que tu trouveras sur la documentation officielle.

Le **DOM virtuel** est une représentation légère du **DOM réel**, qui permet à **React** de comparer efficacement les changements et d'appliquer uniquement les mise à jour nécessaires. Tout est géré par **React**, si bien que nous n'avons pas vraiment besoin de savoir comment cela fonctionne pour bien développer.

L'**approche déclarative** en **React** se réfère à la manière dont les développeurs écrivent du code pour décrire ce qu'ils veulent voir à l'écran, plutôt que d'écrire comment l'interface doit se construire étape par étape.

Dans une **approche impérative**, comme celle utilisée dans le **DOM natif** avec **JavaScript**, vous devez spécifier chaque étape pour manipuler et mettre à jour le **DOM**. Par exemple, vous devez trouver un élément dans le **DOM**, le modifier, ajouter des événements, etc.

En revanche, avec une **approche déclarative** comme celle de **React**, vous définissez simplement l'**état final** que vous souhaitez, et React s'occupe de **mettre à jour le DOM** en conséquence. L'interface utilisateur est synchronisée avec l'état de l'application. Chaque fois que cet état change, React réévalue le rendu de manière efficace.

L'installation de base intègre `eslint`.