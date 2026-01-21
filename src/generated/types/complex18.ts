// Complex type file 18
type Prev = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type DeepObject_18<T, D extends number = 10> = D extends 0
  ? T
  : { value: T; nested: DeepObject_18<T, Prev[D]> };

export type { DeepObject_18 };
