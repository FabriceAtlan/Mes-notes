# Formulaire côté Front

## Sommaire

**Exemple :**

Créer un formulaire simple.
Installer react-toastify et placer le container placer ce container près de l'Outlet

```css
	.create-video-game {
		display: flex;
		justify-content: center;
		align-items: center;
		height: 100vh;
	}
	.create-video-game label {
		display: block;
		color: white;
		margin: 16px 0 8px 0;
	}
	.create-video-game input {
		font-size: 1.3rem;
	}
```

```javascript
import "./CreateVideoGame.css";
import { useNavigate} from "react-router-dom";

function CreateVideoGame() {
	const navigate = useNavigate();
	const notify = toast.success("...");
	const error = toast.error("...");

	const HandleSubmit = (e: ChangeEvent<HTMLFormElement>) = {
		e.preventDefault();
		
		const formData = new FormData(e.currentTarget);
		const data = Object.formEntries(formData.entries());

		fetch(`${import.meta.env.VITE_API_URL}/api/video-game`,
		{
			method: "POST",
			headers: { "content-type": "application/json" },
			body: JSON.stringify(data)
		}).then((response) => {
			if (reponse.ok) {
				notify();
				setTimeOut(() => {navigate("/")}, 5000)
			} else {
				error();
			}
		}
	}

	return (
		<section className="create-video-game">
			<form onSubmit={handleSubmit}>
				<label htmlFor="name">Name</label>
				<imput type="text" id="name" name="name"></imput>
				<label htmlFor="image">Image</label>
				<imput type="text" id="image" name="image"></imput>
				<button type="submit">Valider</button>
			</form>
			<ToasContainer />
		</section>
	)
}

export default CreateVideoGame;
```

[Retour au sommaire](#sommaire)