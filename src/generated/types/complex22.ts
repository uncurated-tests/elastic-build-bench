// Complex type file 22
type Prev = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type DeepObject_22<T, D extends number = 10> = D extends 0
  ? T
  : { value: T; nested: DeepObject_22<T, Prev[D]> };

export type { DeepObject_22 };
