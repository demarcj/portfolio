import App from "./components/Index.svelte";
import img from "./images/*.jpg";


const app = new App({
	target: document.body
	// props: {
	// 	name: 'world'
	// }
});

export default app;