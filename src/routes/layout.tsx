import { component$, Slot, useClientEffect$, useStore, useStyles$ } from '@builder.io/qwik';
import Footer from '~/components/footer/footer';
import Header from '~/components/header/header';
import styles from './layout.css?inline';

export default component$(() => {
	useStyles$(styles);

	const breakpoints = {
		small: '32em',
		medium: '48em',
		large: '72em',
		xlarge: '108em'
	};

	const mediaQueries: Record<string, string> = {
		xsmall: '(max-width: ' + breakpoints.small + ')',
		small: '(min-width: ' + breakpoints.small + ') and (max-width: ' + breakpoints.medium + ')',
		medium: '(min-width: ' + breakpoints.medium + ') and (max-width: ' + breakpoints.large + ')',
		large: '(min-width: ' + breakpoints.large + ') and (max-width: ' + breakpoints.xlarge + ')',
		xlarge: '(min-width: ' + breakpoints.xlarge + ')'
	};

	const $mq = useStore<Record<string, boolean | undefined>>({}, { recursive: true });

	useClientEffect$(() => {
		if (typeof window === 'undefined') return;
		const media: Record<string, { mql: MediaQueryList; set: any }> = {};
		const listen = (key: string) => {
			media[key] = {
				mql: window.matchMedia(mediaQueries[key]),
				set: (e: MediaQueryListEvent) => ($mq[key] = e.matches)
			};
			media[key].mql.addEventListener('change', media[key].set);
		};
		for (const key in mediaQueries) {
			listen(key);
			$mq[key] = media[key].mql.matches;
		}

		// cleanup
		return () => {
			for (const key in media) {
				media[key].mql.removeEventListener('change', media[key].set);
			}
		};
	});

	return (
		<>
			<div
				class={`uxaria-app ${Object.keys($mq)
					.filter((key) => $mq[key])
					.map((key) => `mq-${key}`)
					.join(' ')}`}
			>
				<Header />
				<main>
					<ul>
						{Object.keys($mq).map((key) => (
							<li>
								{key}: {$mq[key] ? 'true' : ''}
							</li>
						))}
					</ul>
					<Slot />
				</main>
				<Footer />
			</div>
		</>
	);
});
