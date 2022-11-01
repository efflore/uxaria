import { component$, useStyles$ } from "@builder.io/qwik";
import { ColorScale } from "../color-scale/color-scale";
import Columns from "../columns/columns";
import { IconLink } from "../icon-link/icon-link";
import styles from './color-customizer.css?inline';

export default component$(() => {
	useStyles$(styles);

	const colorGroups: Record<string, string[]> = {
		neutral: ['#f3f3f3', '#e5e5e5', '#d5d5d5', '#c3c3c3', '#afafaf', '#989898', '#7c7c7c', '#5c5c5c', '#333333'],
		interactive: ['#d7deee', '#adc0e8', '#85a3e8', '#6086e3', '#436bd1', '#3053ad', '#243d7c', '#1a2849', '#0c111b'],
		accent: ['#e8d8ea', '#d7b0de', '#c888d5', '#b661c8', '#9e41b3', '#802c92', '#5d236a', '#391b3f', '#170d19'],
		success: ['#daecd8', '#aedcab', '#7fca7e', '#51b557', '#2b9d3a', '#19812a', '#1c6224', '#1d411e', '#131f12'],
		warning: ['#fdf1d7', '#fee0a2', '#fbcc6b', '#f1b739', '#dea10f', '#c18b06', '#9b731c', '#6e5727', '#3a3220'],
		error: ['#fcdedd', '#ffb8b8', '#fb9293', '#ed6f73', '#d3535a', '#af4047', '#853438', '#572829', '#271616'],
	}

	return (
		<div class="uxaria-color-customizer">
			<h3>Colors</h3>
			<Columns>
				{Object.keys(colorGroups).map((key) => (
					<IconLink link={`colors/${key}`}>
						<div q:slot="icon">
							<ColorScale colors={colorGroups[key]} isIcon={true} />
						</div>
						<p q:slot="name">{key[0].toUpperCase() + key.slice(1)}</p>
					</IconLink>
				))}
			</Columns>
		</div>
	);
});
