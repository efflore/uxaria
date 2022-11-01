import { component$, Slot, useStyles$ } from '@builder.io/qwik';
import styles from './section.css?inline';

export interface SectionProps {
	variant?: string;
}
export const Section = component$((props: SectionProps) => {
	useStyles$(styles);

	return (
		<section class={`ux-section${props.variant ? ' ux-section--' + props.variant : ''}`}>
			<div class="ux-section__container">
				<Slot />
			</div>
		</section>
	);
});
