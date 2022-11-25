import { component$, Slot, useStyles$ } from '@builder.io/qwik';
import styles from './toolbar.css?inline';

export interface ToolbarProps {
	ariaLabel: string;
	ariaControls?: string;
	vertical?: boolean;
}

export const Toolbar = component$((props: ToolbarProps) => {
	useStyles$(styles);

	return (
		<div
			role="toolbar"
			class="ux-toolbar"
			aria-label={props.ariaLabel}
			aria-controls={props.ariaControls}
			aria-orientation={props.vertical ? 'vertical' : 'horizontal'}
		>
			<Slot />
		</div>
	);
});
