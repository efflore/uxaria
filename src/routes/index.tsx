import Columns from '~/components/columns/columns';
import { Section } from '~/components/section/section';
import { Card } from '~/components/card/card';

import { HTML5Logo } from '~/components/logos/html5';
import { CSS3Logo } from '~/components/logos/css3';
import { JSLogo } from '~/components/logos/js';
import { MDXLogo } from '~/components/logos/mdx';
import { QwikLogo } from '~/components/logos/qwik';
import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';

export const head: DocumentHead = {
	title: 'Uxaria',
};

export default component$(() => {
	return (
		<>
			<Section variant="lead">
				<h1>{head.title}</h1>
				<p>Opinionated user interface component framework based on Qwik. Lightweight, fast, accessibile, with sane defaults.</p>
			</Section>

			<Section variant="cards">
				<h2>Why Uxaria?</h2>
				<Columns>
					<Card link="/docs/semantic-html" previewBackground="#fdab92">
						<h3 q:slot="title">Semantic HTML</h3>
						<div q:slot="preview">
							<HTML5Logo />
						</div>
						<p>Our components are built with accessibility in mind. A semantic structure is the base of every good web application.</p>
					</Card>

					<Card link="/docs/sane-css-presets" previewBackground="#a5bbf1">
						<h3 q:slot="title">Sane CSS Presets</h3>
						<div q:slot="preview">
							<CSS3Logo />
						</div>
						<p>Our styles depend on a carefully thought out set of CSS variables for the most common elements. The rest is up to you!</p>
					</Card>

					<Card link="/docs/fast-javascript" previewBackground="#a9c995">
						<h3 q:slot="title">Fast JavaScript</h3>
						<div q:slot="preview">
							<JSLogo />
						</div>
						<p>Uxaria is based on Qwik - a new kind of web framework that can deliver instant loading web applications at any size or complexity.</p>
					</Card>

					<Card link="/docs/markdown-on-steroids" previewBackground="#ffdba0">
						<h3 q:slot="title">Markdown on Steroids</h3>
						<div q:slot="preview">
							<MDXLogo />
						</div>
						<p>Write your content in MDX. Simple like Markdown, powerful like JSX. Use components and JavaScript expressions.</p>
					</Card>

					<Card link="/docs/design-visually">
						<h3 q:slot="title">Design Visually</h3>
						<p>Find the best values for CSS variables mastching your design in our visual customizer. Colors, spacing, typography.</p>
					</Card>

					<Card link="/docs/code-components" previewBackground="#dbcbfa">
						<h3 q:slot="title">Code Components</h3>
						<div q:slot="preview">
							<QwikLogo />
						</div>
						<p>Already familiar with React? – Write your own components in JSX. Resumable, scalable, lazy-loaded as needed thanks to Qwik.</p>
					</Card>
				</Columns>
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
		</>
	);
});
