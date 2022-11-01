import { component$, useStyles$ } from '@builder.io/qwik';
import styles from './color-scale.css?inline';

export interface ColorScaleProps {
	colors: string[];
	isIcon?: boolean;
}

export const ColorScale = component$((props: ColorScaleProps) => {
	useStyles$(styles);

	return (
		<ul class={`ux-color-scale${props.isIcon ? ' ux-color-scale--icon' : ''}`}>
			{props.colors.map((color: string) => (
				<li style={`background-color: ${color}`}>
					<span>{color}</span>
				</li>
			))}
		</ul >
	);
});
