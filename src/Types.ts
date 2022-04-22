export type Theme = 'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'danger';

export type Size = 'small' | 'normal' | 'large';

export type WithoutChildren<T> = Omit<T, 'children'>;
