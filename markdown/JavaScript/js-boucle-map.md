# Javascript | Les boucles

## Sommaire

- [for](#for)

	- [Parcourir un tableau](#parcourir-un-tableau)

- [while](#while)

- [Do...While](#dowhile)

- [map](#map)

### for [^](#sommaire)

```javascript
for (let i = 0; i < 5; i++) {
	console.log("Turn number " + i);
}
```

#### Parcourir un tableau [^](#sommaire)

```javascript
const fruits = ["Apple", "Peach", "Banana"];

for (let i = 0; i < fruits.length; i ++) {
  console.log(fruits[i]);
}
```

### while [^](#sommaire)

```javascript
let i = 0; 

while (i < 5) {
  console.log(`turn number ${i}`);
  i++;
}
```

### Do...While [^](#sommaire)

```javascript
let i = 0; 

do{
	console.log(`turn number ${i}`);
	i++;
}while (i < 5);
```

### map [^](#sommaire)

La fonction map n'accepte que les tableaux et renvoi un nouveau tableau sans modifier celui sur lequel il itère.

Dans un projet React faire ceci dans le JSX pour intégrer un élément dynamique dans le DOM virtuel :

```javascript
{data.map((el) => {
	return (
		<Card key={el.firstname} firstname={el.firstname ...}/>
	)
})}
```
