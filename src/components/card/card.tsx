import { component$, Slot, useStyles$ } from "@builder.io/qwik";
import styles from './card.css?inline';

export interface CardProps {
	link: string;
}

export const Card = component$((props: CardProps) => {
	useStyles$(styles);

	return (
		<a href={props.link} class="uxaria-card">
			<div class="uxaria-card__title">
				<Slot name="title" />
			</div>
			<div class="uxaria-card__image">
				<Slot name="image" />
			</div>
			<div class="uxaria-card__content">
				<Slot />
			</div>
		</a>
	);
});
