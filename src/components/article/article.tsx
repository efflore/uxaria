import { component$, Slot, useStyles$ } from '@builder.io/qwik';
import { AuthorProps, Author } from '../author/author';
import { HashTags } from '../hash-tags/hash-tags';
import { Toolbar } from '../toolbar/toolbar';
import styles from './article.css?inline';

export interface ArticleProps {
	id: string;
	type?: string;
	author?: AuthorProps;
	datePublished?: string;
	keywords?: string[];
}
export const Article = component$((props: ArticleProps) => {
	useStyles$(styles);

	const getLocalDateString = (isoDateString: string) => {
		return new Date(isoDateString).toLocaleDateString();
	}

	return (
		<article
			id={props.id}
			class={`ux-article${props.type ? ' ux-article--' + props.type : ''}`}
			itemScope itemType="https://schema.org/Article"
		>
			<section class="ux-article__head">
				<div class="ux-article__title" itemProp="name">
					<Slot name="title" />
				</div>
				{props.keywords && (<div class="ux-article__keywords">
					<HashTags keywords={props.keywords} />
				</div>)}
				<div class="ux-article__preview">
					<Slot name="preview" />
				</div>
				<div class="ux-article__lead" itemProp="description">
					<Slot name="description" />
				</div>
				{props.author && <div
					class="ux-article__author"
					itemProp="author"
				>
					<Author {...props.author} />
				</div>}
				{props.datePublished && <time
					class="ux-article__date"
					itemProp="datePublished"
					dateTime={props.datePublished}
				>
					{getLocalDateString(props.datePublished)}
				</time>}
			</section>
			<div class="ux-article__content">
				<Slot />
			</div>
			<Toolbar ariaLabel="Article Actions" ariaControls={props.id}>
				<button type="button">Comment</button>
				<button type="button">Like</button>
				<button type="button">Share</button>
				<button type="button">More</button>
			</Toolbar>
		</article>
	);
});
