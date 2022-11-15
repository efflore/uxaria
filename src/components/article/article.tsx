import { component$, Slot, useStyles$ } from '@builder.io/qwik';
import { JSLogo } from '../logos/js';
import styles from './article.css?inline';

export interface ArticleProps {
	variant?: string;
	datePublished?: string;
}
export const Article = component$((props: ArticleProps) => {
	useStyles$(styles);

	const getLocalDateString = (isoDateString: string) => {
		return new Date(isoDateString).toLocaleDateString();
	}

	return (
		<article
			class={`ux-article${props.variant ? ' ux-article--' + props.variant : ''}`}
			itemScope itemType="https://schema.org/Article"
		>
			<section class="ux-article__head">
				<div class="ux-article__title" itemProp="name">
					<Slot name="title" />
				</div>
				<div class="ux-article__author" itemProp="author">
					<Slot name="author" />
				</div>
				{props.datePublished && (<time
					class="ux-article__date"
					itemProp="datePublished"
					dateTime={props.datePublished}
				>
					{getLocalDateString(props.datePublished)}
				</time>)}
				<div class="ux-article__keywords" itemProp="keywords">
					<Slot name="keywords" />
				</div>
				<div class="ux-article__preview" q:slot="preview">
					<JSLogo />
				</div>
				<div class="ux-article__lead" itemProp="description">
					<Slot name="description" />
				</div>
			</section>
			<div class="ux-article__content">
				<Slot />
			</div>
		</article>
	);
});
