export type SelectorElement = HTMLElement | string | (() => HTMLElement);

abstract class UILib {
	abstract initAll(): void;

	abstract init(
		widget: SelectorElement | SelectorElement[],
		trigger: SelectorElement | SelectorElement[]
	): void;

	protected toggle(popup: HTMLElement): void {
		popup.classList.toggle('widget_hidden');
	}

	protected show(popup: HTMLElement): void {
		popup.classList.remove('widget_hidden');
	}

	protected hide(popup: HTMLElement): void {
		popup.classList.add('widget_hidden');
	}
}

export default UILib;
