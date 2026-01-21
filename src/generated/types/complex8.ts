// Complex type file 8
type Prev = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type DeepObject_8<T, D extends number = 8> = D extends 0
  ? T
  : { value: T; nested: DeepObject_8<T, Prev[D]> };

export type { DeepObject_8 };
