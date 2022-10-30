import { component$, Slot, useStyles$ } from '@builder.io/qwik';
import { Link } from '@builder.io/qwik-city';
import styles from './card.css?inline';

export interface CardProps {
	link: string;
	previewBackground?: string;
}

export const Card = component$((props: CardProps) => {
	useStyles$(styles);

	const previewStyle = () => {
		return props.previewBackground ? `background-color: ${props.previewBackground};` : undefined;
	};

	return (
		<Link href={props.link} class="uxaria-card">
			<div class="uxaria-card__title">
				<Slot name="title" />
			</div>
			<div class="uxaria-card__preview" style={previewStyle()}>
				<Slot name="preview" />
			</div>
			<div class="uxaria-card__content">
				<Slot />
			</div>
		</Link>
	);
});
