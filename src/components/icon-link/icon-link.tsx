import { component$, Slot, useStyles$ } from '@builder.io/qwik';
import { Link } from '@builder.io/qwik-city';
import styles from './icon-link.css?inline';

export interface IconProps {
	link: string;
}

export const IconLink = component$((props: IconProps) => {
	useStyles$(styles);

	return (
		<Link href={props.link} class="uxaria-icon-link">
			<div class="uxaria-icon-link__icon">
				<Slot name="icon" />
			</div>
			<div class="uxaria-icon-link__name">
				<Slot name="name" />
			</div>
		</Link>
	);
});
