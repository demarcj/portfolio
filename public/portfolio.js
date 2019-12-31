import App from './components/Portfolio.svelte';
import image from "./images/*.jpg";
import test from "./css/test.css";

console.log(test);

const app = new App({
	target: document.body,
	props: {
		img: image
	}
});

export default app;