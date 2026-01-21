// Complex type file 29
type Prev = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type DeepObject_29<T, D extends number = 9> = D extends 0
  ? T
  : { value: T; nested: DeepObject_29<T, Prev[D]> };

export type { DeepObject_29 };
