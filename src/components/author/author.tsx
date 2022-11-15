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
		<a class="ux-author" href={`https://${props.instance}/@${props.user}`}>
			<p class="ux-author__name" q:slot="author">
				<strong class="ux-author__display">{props.name} </strong>
				<span class="ux-author__user">@{props.user}</span><span class="ux-author__instance">@{props.instance}</span>
			</p>
			<div class="ux-author__avatar">
				&nbsp;
			</div>
		</a>
	);
});
