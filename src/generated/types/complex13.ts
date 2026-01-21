// Complex type file 13
type Prev = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type DeepObject_13<T, D extends number = 9> = D extends 0
  ? T
  : { value: T; nested: DeepObject_13<T, Prev[D]> };

export type { DeepObject_13 };
