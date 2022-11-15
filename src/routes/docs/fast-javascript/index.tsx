import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';

import { Article } from '~/components/article/article';
import { Author } from '~/components/author/author';
import Columns from '~/components/columns/columns';
import { Section } from '~/components/section/section';

export const head: DocumentHead = {
	title: 'Fast JavaScript',
	meta: [
		{
			name: 'description',
			content: 'Opinionated user interface component framework based on Qwik. Lightweight, fast, accessibile, with sane defaults.',
		},
	],
};

export default component$(() => {
	return (
		<Article datePublished="2022-11-14">
			<h1 q:slot="title">{head.title}</h1>
			<div q:slot="author">
				<Author name="Esther Brunner" user="esthr" instance="chaos.social" />
			</div>
			<p q:slot="keywords">JavaScript, Qwik, Performance</p>
			<p q:slot="description">{head.meta?.find((m) => m.name === 'description')?.content}</p>

			<Section>
				<h2>A New Approach</h2>
				<Columns>
					<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. At ipsam exercitationem, officiis enim blanditiis,
						libero ratione aliquid porro accusantium, quia rem culpa. Minus ullam assumenda quo iste. Vel, odio voluptate.</p>
					<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores ut sequi maxime! In saepe possimus accusamus
						quis quidem quibusdam iure vel mollitia dignissimos molestias. Tempora magni nihil tempore repellendus
						excepturi!</p>
				</Columns>
			</Section>
		</Article>
	)
});
