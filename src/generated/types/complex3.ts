// Complex type file 3
type Prev = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type DeepObject_3<T, D extends number = 11> = D extends 0
  ? T
  : { value: T; nested: DeepObject_3<T, Prev[D]> };

export type { DeepObject_3 };
