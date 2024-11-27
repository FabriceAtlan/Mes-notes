# React | useContext

## Sommaire

- [Comprendre et Utiliser le Contexte en React](#comprendre-et-utiliser-le-contexte-en-react)

- [Fournir un contexte](#fournir-un-contexte)

- [Création d'un context](#création-dun-context)

### Comprendre et Utiliser le Contexte en React [^](#sommaire)

En React, le contexte est un mécanisme qui permet de partager des données entre composants sans avoir à les transmettre explicitement à chaque niveau via les props. Il est particulièrement utile pour des données "globales" comme un thème, une langue ou un état utilisateur.

Le contexte lui-même ne **contient pas d'informations**. Il sert principalement de **conteneur** pour définir le type de données que vous pouvez **partager** ou **lire** à travers vos **composants**. En d'autres termes, il établit un cadre pour la communication.

### Fournir un contexte [^](#sommaire)

Pour **partager des données** avec le contexte, vous devez utiliser un **Provider**, qui est fourni par React lorsque vous créez un contexte. Ce Provider **englobe** les **composants** qui doivent avoir accès aux données partagées.

### Création d'un context [^](#sommaire)

Utilisez la méthode `createContext` pour créer un contexte et fournir la valeur via le `Provider`.

Le `Provider` est un **composant** spécial **attaché au contexte**. Il prend une `prop value` pour définir les données que vous souhaitez partager. TypeScript exigera que `children` et `value` soient typés :

```javascript
// ThemeProvider.tsx

import { createContext, useState } from 'react';
import { Children, ThemeProps} from '../types/context'

export const ThemeContext = createContext<ThemeProps | null>(null);

export default function ThemeProvider({ children }: Children) {
	const [ theme, setTheme ] = useState(false);

	return (
		<ThemeContext.Provider value={{ theme, setTheme }}>
			{ children }
		</ThemeContext.Provider>
	)
};
```

Création d'un fichier de typage :

```javascript
// context.d.ts
import type { ReactNode } from 'react';

export type Children = {
	children: ReactNode;
}

export type ThemeProps = {
	theme: boolean;
	setTheme: (value: boolean) => void;
}
```


Wrapper le router avec `ThemeProvider` :

```javascript
// main.tsx

// ...
import ThemeProvider from '...'

<ThemeProvider>
	<RouterProvider router={ router }>
</ThemeProvider>
```

Tous les **composants imbriqués** (enfants, petits-enfants, etc.) dans le `Provider` peuvent accéder à la valeur fournie :

```javascript
import React, { useContext } from 'react';
import ThemeContext from './ThemeContext';

const DarkModeToggle = () => {
  const { isDarkMode, toggleDarkMode } = useContext(ThemeContext);

  return (
    <button onClick={toggleDarkMode}>
      {isDarkMode ? 'le Mode Clair' : 'le Mode Sombre'}
    </button>
  );
};

export default DarkModeToggle;
```

En fonction de l'état du mode sombre, modifiez les styles globaux via une classe CSS ou en modifiant directement le DOM :

```javascript
import React, { useContext } from 'react';
import ThemeContext from './ThemeContext';

const App = () => {
  const { isDarkMode } = useContext(ThemeContext);

  return (
    <div className={isDarkMode ? 'dark-mode' : 'light-mode'}>
      <h1>Mode {isDarkMode ? 'Sombre' : 'Clair'}</h1>
      <DarkModeToggle />
    </div>
  );
};

export default App;
```

Ajoutez les styles nécessaires pour les deux modes dans votre fichier CSS :

```javascript
body {
  margin: 0;
  font-family: Arial, sans-serif;
}

.light-mode {
  background-color: white;
  color: black;
}

.dark-mode {
  background-color: black;
  color: white;
}
```

[Retour au sommaire](#sommaire)