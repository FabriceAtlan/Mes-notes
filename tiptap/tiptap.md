# Tiptap react

## Sommaire

- [Tiptap](#tiptap)
- [Starter-kit](#starter-kit)
  - [Commande d'installation](#commande-dinstallation)
  - [Exemple](#exemple)
  - [Astuces](#astuces)
- [Installer extension-placeholder](#installer-extension-placeholder)
  - [Commande d'installation](#commande-dinstallation)
  - [Exemple](#exemple-1)
  - [Exemple avec style](#exemple-avec-style)
  - [Astuces](#astuces-1)

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

## Installer extension-placeholder [^](#sommaire)

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

[Retour au sommaire](#sommaire)
