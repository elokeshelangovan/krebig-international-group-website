export type WithChildren<T = unknown> = T & {
  children?: React.ReactNode;
};

export type WithClassName<T = unknown> = T & {
  className?: string;
};
