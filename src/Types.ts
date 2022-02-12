export type Theme = 'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'danger';

export type Size = 'small' | 'normal' | 'large';

// eslint-disable-next-line @typescript-eslint/ban-types
export type Themed<T = {}> = T & {
  theme?: Theme;
};
