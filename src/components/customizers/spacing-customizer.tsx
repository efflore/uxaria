import { component$, useSignal, useStyles$ } from "@builder.io/qwik";
import styles from './spacing-customizer.css?inline';

export default component$(() => {
	useStyles$(styles);
	const baseSize = useSignal(100);

	const customProperties: string[] = ['xxs', 'xs', 's', 'm', 'l', 'xl', 'xxl'];

	return (
		<div class="uxaria-spacing-customizer">
			<h3>Spacings</h3>
			<div class="uxaria-spacing-customizer__input">
				<label>Base size</label>
				<input
					type="number"
					step={1}
					min={20}
					max={500}
					name="spacing-customizer__base-size"
					value={baseSize.value}
					onChange$={(e: any) => {
						baseSize.value = e.target.valueAsNumber;
						document.documentElement.style.setProperty(`--uxaria-size-base`, `${baseSize.value / 100}rem`);
					}}
				/>%
			</div>
			<ul class="uxaria-spacing-customizer__output">
				{customProperties.map((key: string) => (
					<li class="uxaria-spacing-customizer__property" key={key}>
						<span class="uxaria-spacing-customizer__placeholder"
							style={`height: var(--uxaria-size-${key})`}
						></span>
						<span class="uxaria-spacing-customizer__css">--uxaria-size-{key}</span>
					</li>
				))}
			</ul>
		</div>
	);
});
