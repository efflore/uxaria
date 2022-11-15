import { component$, useStyles$ } from "@builder.io/qwik";
import styles from './typography-customizer.css?inline';

export default component$(() => {
	useStyles$(styles);

	const customProperties: string[] = ['small', 'base', 'large', 'xlarge', 'xxlarge', 'xxxlarge'];

	return (
		<div class="ux-typography-customizer">
			<h3>Typography</h3>
			<ul class="ux-typography-customizer__output">
				{customProperties.map((key: string) => (
					<li class="ux-typography-customizer__property" key={key} style={`font-size: var(--ux-font-size-${key})`}>
						--ux-font-size-{key}
					</li>
				))}
			</ul>
		</div>
	);
});
