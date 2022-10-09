import { component$, Slot, useStyles$ } from '@builder.io/qwik';
import styles from './section.css?inline';

export interface SectionProps {
	variant?: string;
}
export const Section = component$((props: SectionProps) => {
	useStyles$(styles);

	return (
		<section class={`uxaria-section${props.variant ? ' uxaria-section--' + props.variant : ''}`}>
			<div class="uxaria-section__container">
				<Slot />
			</div>
		</section>
	);
});
