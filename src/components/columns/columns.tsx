import { component$, Slot, useStyles$ } from '@builder.io/qwik';
import styles from './columns.css?inline';

export default component$(() => {
	useStyles$(styles);

	return (
		<div class="ux-columns">
			<Slot />
		</div>
	);
});
