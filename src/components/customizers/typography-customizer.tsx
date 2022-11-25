import { component$, useStyles$ } from "@builder.io/qwik";
import styles from './typography-customizer.css?inline';

export default component$(() => {
	useStyles$(styles);

	const customFamilyProperties: string[] = ['body', 'heading', 'monospace'];
	const customSizeProperties: string[] = ['small', 'base', 'large', 'xlarge', 'xxlarge', 'xxxlarge'];

	return (
		<div class="ux-typography-customizer">
			<h3>Typography</h3>

			<h4>Fonts</h4>
			<ul class="ux-typography-customizer__output">
				{customFamilyProperties.map((key: string) => (
					<li class="ux-typography-customizer__property" key={key} style={`font-family: var(--ux-font-family-${key})`}>
						--ux-font-family-{key}
					</li>
				))}
			</ul>

			<h4>Sizes</h4>
			<ul class="ux-typography-customizer__output">
				{customSizeProperties.map((key: string) => (
					<li class="ux-typography-customizer__property" key={key} style={`font-size: var(--ux-font-size-${key})`}>
						--ux-font-size-{key}
					</li>
				))}
			</ul>
		</div>
	);
});
