import { base } from './base';
import { dark } from './dark';
export * from './base';
export * from './dark';
export * from './utils';

/* default -> can we change this depending on css prefers "theme" syntax? */
export const DEFAULT_THEME = 'base';

export const themes = { base, dark };
