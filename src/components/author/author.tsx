import { component$, useStyles$ } from '@builder.io/qwik';
import styles from './author.css?inline';

export interface AuthorProps {
	name: string;
	user: string;
	instance: string;
}
export const Author = component$((props: AuthorProps) => {
	useStyles$(styles);

	return (
		<a
			class="ux-author"
			href={`https://${props.instance}/@${props.user}`}
			itemType="https://schema.org/Person"
			itemScope
			itemProp="url"
		>
			<p class="ux-author__name">
				<strong itemProp="name">{props.name}</strong> <span itemProp="identifier">
					@{props.user}<span class="ux-author__instance">@{props.instance}</span>
				</span>
			</p>
			<div class="ux-author__avatar">
				<img src={`/img/users/@${props.user}@${props.instance}.jpg`} alt={props.name} itemProp="image" />
			</div>
		</a>
	);
});
