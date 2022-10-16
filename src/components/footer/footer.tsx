import { component$, useStylesScoped$ } from '@builder.io/qwik';
import styles from './footer.css?inline';

export default component$(() => {
	useStylesScoped$(styles);

	return (
		<footer>
			<p>My footer</p>
		</footer>
	);
});
