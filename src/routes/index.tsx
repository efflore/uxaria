import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';

import Columns from '~/components/columns/columns';
import { Section } from '~/components/section/section';
import { Card } from '~/components/card/card';

import { HTML5Logo } from '~/components/logos/html5';
import { CSS3Logo } from '~/components/logos/css3';
import { JSLogo } from '~/components/logos/js';
import { MDXLogo } from '~/components/logos/mdx';
import { ColorScale } from '~/components/color-scale/color-scale';
import { QwikLogo } from '~/components/logos/qwik';

import SpacingCustomizer from '~/components/customizers/spacing-customizer';
import ColorCustomizer from '~/components/customizers/color-customizer';
import TypographyCustomizer from '~/components/customizers/typography-customizer';
import { Article } from '~/components/article/article';
import { AuthorProps } from '~/components/author/author';

export const head: DocumentHead = {
	title: 'Uxaria',
	meta: [
		{
			name: 'description',
			content: 'Opinionated user interface component framework based on Qwik. Lightweight, fast, accessibile, with sane defaults.',
		},
	],
};

export default component$(() => {
	const author: AuthorProps = {
		name: 'Esther Brunner',
		user: 'esthr',
		instance: 'chaos.social',
	};

	return (
		<Article id="article__uxaria" author={author} datePublished="2022-11-15">
			<h1 q:slot="title">{head.title}</h1>
			<div q:slot="preview">
				<ColorScale colors={['#d7deee', '#adc0e8', '#85a3e8', '#6086e3', '#436bd1', '#3053ad', '#243d7c', '#1a2849', '#0c111b']} />
			</div>
			<p q:slot="description">{head.meta?.find((m) => m.name === 'description')?.content}</p>

			<Section variant="cards">
				<h2>Why Uxaria?</h2>
				<Columns>
					<Card link="/docs/semantic-html">
						<h3 q:slot="title">Semantic HTML</h3>
						<div q:slot="preview">
							<HTML5Logo />
						</div>
						<p>Our components are built with accessibility in mind. A semantic structure is the base of every good web application.</p>
					</Card>

					<Card link="/docs/sane-css-presets">
						<h3 q:slot="title">Sane CSS Presets</h3>
						<div q:slot="preview">
							<CSS3Logo />
						</div>
						<p>Our styles depend on a carefully thought out set of CSS variables for the most common elements. The rest is up to you!</p>
					</Card>

					<Card link="/docs/fast-javascript">
						<h3 q:slot="title">Fast JavaScript</h3>
						<div q:slot="preview">
							<JSLogo />
						</div>
						<p>Uxaria is based on Qwik - a new kind of web framework that can deliver instant loading web applications at any size or complexity.</p>
					</Card>

					<Card link="/docs/markdown-on-steroids">
						<h3 q:slot="title">Markdown on Steroids</h3>
						<div q:slot="preview">
							<MDXLogo />
						</div>
						<p>Write your content in MDX. Simple like Markdown, powerful like JSX. Use components and JavaScript expressions.</p>
					</Card>

					<Card link="/docs/design-visually">
						<h3 q:slot="title">Design Visually</h3>
						<p>Find the best values for CSS variables matching your design in our visual customizer. Colors, spacing, typography.</p>
						<div q:slot="preview">
							<ColorScale colors={['#d7deee', '#adc0e8', '#85a3e8', '#6086e3', '#436bd1', '#3053ad', '#243d7c', '#1a2849', '#0c111b']} />
						</div>
					</Card>

					<Card link="/docs/code-components">
						<h3 q:slot="title">Code Components</h3>
						<div q:slot="preview">
							<QwikLogo />
						</div>
						<p>Already familiar with React? – Write your own components in JSX. Resumable, scalable, lazy-loaded as needed thanks to Qwik.</p>
					</Card>
				</Columns>
			</Section>

			<Section variant="customizers">
				<h2>Customize</h2>
				<Columns>
					<SpacingCustomizer />
					<TypographyCustomizer />
				</Columns>
				<ColorCustomizer />
			</Section>

			<Section variant="list">
				<h2>Explore Components</h2>
				<Columns>
					<Card link="components/header">
						<h3 q:slot="title">Header</h3>
						<p>Wrap your header. Define responsive and scroll behavior. Child components will inherit colors, spacing, and typography.</p>
					</Card>

					<Card link="components/footer">
						<h3 q:slot="title">Footer</h3>
						<p>Wrap your footer. Define responsive and scroll behavior. Child components will inherit colors, spacing, and typography.</p>
					</Card>

					<Card link="components/section">
						<h3 q:slot="title">Section</h3>
						<p>Wrap your main sections. Style different variants. Child components will inherit colors, spacing, and typography.</p>
					</Card>

					<Card link="components/columns">
						<h3 q:slot="title">Columns</h3>
						<p>Set up a multi-column layout. Predefined for 2, 3, 4, and 6 equal columns on large screens, sensefully linearized on smaller screens.</p>
					</Card>

					<Card link="components/card">
						<h3 q:slot="title">Card</h3>
						<p>Link to other pages with an appealing card. Includes a title, an optional preview, and a content area which can hold any child elements.</p>
					</Card>
				</Columns>
			</Section>
		</Article>
	);
});
