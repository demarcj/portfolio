import App from './components/Portfolio.svelte';
import image from "./images/*.jpg";

const app = new App({
	target: document.body,
	props: {
		img: image
	}
});

export default app;