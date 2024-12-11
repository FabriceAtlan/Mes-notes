# React | Dark Mode

## Sommaire
- [Créer le contexte de thème](#créer-le-contexte-de-thème)
- [Configurer le fournisseur dans l'application](#configurer-le-fournisseur-dans-lapplication)
- [Utiliser le mode sombre](#utiliser-le-mode-sombre)
- [Appliquer les styles du Dark Mode](#appliquer-les-styles-du-dark-mode)
- [Créer un custom hook (facultatif)](#créer-un-custom-hook-facultatif)
- [Conclusion](#conclusion)
- [Améliorations possibles](#améliorations-possibles)

---

### Créer le contexte de thème [^](#sommaire)
Nous allons créer un fichier `ThemeContext.tsx` qui contiendra le contexte et son fournisseur.

#### Code : `ThemeContext.tsx`
```tsx
import React, { createContext, useContext, useState, ReactNode } from "react";

type ThemeContextType = {
  isDarkMode: boolean;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => setIsDarkMode((prev) => !prev);

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
```

---

### Configurer le fournisseur dans l'application [^](#sommaire)
Pour que l'application utilise le contexte, enveloppe le composant racine avec `ThemeProvider`.

#### Code : `main.tsx` ou `App.tsx`
```tsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ThemeProvider } from "./ThemeContext";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
```

---

### Utiliser le mode sombre [^](#sommaire)
Ajoute un composant permettant de basculer entre le mode clair et sombre.

#### Code : `ThemeToggle.tsx`
```tsx
import React from "react";
import { useTheme } from "./ThemeContext";

const ThemeToggle = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <button onClick={toggleTheme}>
      {isDarkMode ? "Passer en mode clair" : "Passer en mode sombre"}
    </button>
  );
};

export default ThemeToggle;
```

---

### Appliquer les styles du Dark Mode [^](#sommaire)
Utilise une classe CSS dynamique pour changer les styles en fonction du thème.

#### Code : `App.tsx`
```tsx
import React from "react";
import { useTheme } from "./ThemeContext";
import "./App.css";

const App = () => {
  const { isDarkMode } = useTheme();

  return (
    <div className={isDarkMode ? "dark" : "light"}>
      <h1>Mode {isDarkMode ? "Sombre" : "Clair"}</h1>
      <ThemeToggle />
    </div>
  );
};

export default App;
```

#### Code : `App.css`
```css
body {
  margin: 0;
  font-family: Arial, sans-serif;
  transition: background-color 0.3s, color 0.3s;
}

.light {
  background-color: #ffffff;
  color: #000000;
}

.dark {
  background-color: #000000;
  color: #ffffff;
}
```

---

### Créer un custom hook (facultatif) [^](#sommaire)
Pour simplifier encore plus, encapsule la logique du mode sombre dans un hook dédié.

#### Code : `useDarkMode.ts`
```tsx
import { useTheme } from "./ThemeContext";

export const useDarkMode = () => {
  const { isDarkMode, toggleTheme } = useTheme();
  return { isDarkMode, toggleTheme };
};
```

#### Utilisation du custom hook
```tsx
import React from "react";
import { useDarkMode } from "./useDarkMode";

const ThemeToggle = () => {
  const { isDarkMode, toggleTheme } = useDarkMode();

  return (
    <button onClick={toggleTheme}>
      {isDarkMode ? "Passer en mode clair" : "Passer en mode sombre"}
    </button>
  );
};

export default ThemeToggle;
```

---

### Conclusion [^](#sommaire)
Avec cette architecture :
1. **`ThemeContext`** gère l'état global du thème.
2. **`useTheme`** simplifie l'accès au contexte dans les composants.
3. **`useDarkMode`** permet une spécialisation pour des fonctionnalités liées au Dark Mode.
4. Les styles sont appliqués dynamiquement avec une classe CSS.

---

### Améliorations possibles [^](#sommaire)
- Ajouter la persistance du thème (ex. : sauvegarde dans `localStorage`).
- Synchroniser avec les préférences système (`prefers-color-scheme`).
- Étendre le thème à plusieurs variantes (ex. : clair, sombre, automne, etc.).

---

[Retour au sommaire](#sommaire)
