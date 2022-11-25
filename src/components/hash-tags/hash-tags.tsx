import { component$, useStyles$ } from '@builder.io/qwik';
import styles from './hash-tags.css?inline';

interface hashTagsProps {
	keywords: string[];
}

export const HashTags = component$((props: hashTagsProps) => {
	useStyles$(styles);

	return (
		<ul class="ux-hash-tags">
			{props.keywords.map((hashtag) =>
				<li>
					<a href={`/keyword/${hashtag}`}>
						<span class="ux-hash-tags__hash">#</span>
						<span itemProp="keywords">{hashtag}</span>
					</a>
				</li>
			)}
		</ul>
	);
});
