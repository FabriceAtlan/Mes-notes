# Tiptap react

## Sommaire

- [Tiptap](#tiptap-)
- [Starter-kit](#starter-kit-)
  - [Commande d'installation](#commande-dinstallation-)
  - [Exemple](#exemple-)
  - [Astuces](#astuces-)
- [Extension-placeholder](#extension-placeholder-)
  - [Commande d'installation](#commande-dinstallation--1)
  - [Exemple](#exemple--1)
  - [Exemple avec style](#exemple-avec-style-)
  - [Astuces](#astuces--1)
- [Link](#link-)
  - [Commande d'installation](#commande-dinstallation--2)
  - [Exemple](#exemple--2)
  - [TextAlign](#textalign-)
  - [Exemple](#exemple--3)
- [Underline / Strike / Highlight](#underline--strike--highlight-)
  - [Commande d'installation](#commande-dinstallation--3)
    - [Underline](#underline-)
    - [Strike](#strike-)
    - [Highlight](#highlight-)
  - [Exemple](#exemple--4)
- [History](#history-)
  - [Commande d'installation](#commande-dinstallation--4)
  - [Exemple](#exemple--5)

## Tiptap [^](#sommaire)

```bash
npm install @tiptap/react
```

## Starter-kit [^](#sommaire)

Pack de base qui inclut toutes les extensions essentielles pour un éditeur riche :

- paragraphe,
- texte en gras,
- italique,
- liste,
- blockquote,
- code,
- lien

### Commande d'installation [^](#sommaire)

```bash
npm install @tiptap/starter-kit
```

### Exemple [^](#sommaire)

```javascript
import StarterKit from '@tiptap/starter-kit'

const editor = useEditor({
  extensions: [
    StarterKit,
  ],
})
```

### Astuces [^](#sommaire)

```javascript
StarterKit.configure({
  codeBlock: false,
})
```

## Extension-placeholder [^](#sommaire)

Permet d’afficher un texte indicatif quand le contenu de l’éditeur est vide, un peu comme l’attribut `placeholder` d’un `<input>` ou `<textarea>` classique

### Commande d'installation [^](#sommaire)

```bash
npm install @tiptap/extension-placeholder
```

### Exemple [^](#sommaire)

```javascript
import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import Placeholder from '@tiptap/extension-placeholder'

export default function MyEditor() {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Placeholder.configure({
        placeholder: 'Écris quelque chose ici…',
      }),
    ],
    content: '',
  })

  return <EditorContent editor={editor} />
}
```

### Exemple avec style [^](#sommaire)

```javascript
Placeholder.configure({
  placeholder: 'Écris ton texte ici…',
  emptyNodeClass: 'is-empty',
  showOnlyWhenEditable: true,
})
```

```css
.is-empty::before {
  content: attr(data-placeholder);
  color: #999;
  pointer-events: none;
  position: absolute;
}
```

### Astuces [^](#sommaire)

```javascript
| Option                 | Description                                                                                                                       |
| ---------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| `placeholder`          | Le texte à afficher lorsque l’éditeur est vide. Peut être une string ou une fonction qui reçoit l’éditeur et retourne une string. |
| `emptyNodeClass`       | Classe CSS ajoutée aux nœuds vides pour permettre du style spécifique.                                                            |
| `showOnlyWhenEditable` | Si `true`, le placeholder n’apparaît que si l’éditeur est éditable.                                                               |
| `includeChildren`      | Si `true`, le placeholder est visible même si l’éditeur contient des enfants vides (utile pour les nodes imbriqués).              |
```

## Link [^](#sommaire)

Permet d’insérer des liens cliquables.

### Commande d'installation [^](#sommaire)

```bash
npm install @tiptap/extension-link
```

### Exemple [^](#sommaire)

```javascript
import Link from '@tiptap/extension-link'

Link.configure({
  openOnClick: true, // ouvre le lien dans un nouvel onglet
  linkOnPaste: true, // transforme automatiquement les URL collées en lien
})
```

## TextAlign [^](#sommaire)

Gérer l’alignement du texte (gauche, centre, droite, justifié).

```bash
@tiptap/extension-text-align
```

### Exemple [^](#sommaire)

```javascript
import TextAlign from '@tiptap/extension-text-align'

TextAlign.configure({
  types: ['heading', 'paragraph'], // sur quels types de nœuds appliquer l'alignement
})
```

## Underline / Strike / Highlight [^](#sommaire)

Ajouter des formats de texte supplémentaires : souligné, barré, surligné.

### Commande d'installation [^](#sommaire)

#### Underline [^](#sommaire)

```bash
npm install @tiptap/extension-underline
```

#### Strike [^](#sommaire)

```bash
npm install @tiptap/extension-strike
```

#### Highlight [^](#sommaire)

```bash
npm install @tiptap/extension-highlight
```

### Exemple [^](#sommaire)

```javascript
import Underline from '@tiptap/extension-underline'
import Strike from '@tiptap/extension-strike'
import Highlight from '@tiptap/extension-highlight'

const editor = useEditor({
  extensions: [
    StarterKit,
    Underline,
    Strike,
    Highlight,
  ],
})
```

## History [^](#sommaire)

Permet l’undo / redo.

### Commande d'installation [^](#sommaire)

```bash
npm install @tiptap/extension-history
```

### Exemple [^](#sommaire)

```javascript
import History from '@tiptap/extension-history'

const editor = useEditor({
  extensions: [
    StarterKit,
    History, // active undo/redo
  ],
})
```

[Retour au sommaire](#sommaire)
