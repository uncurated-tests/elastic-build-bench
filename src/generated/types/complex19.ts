// Complex type file 19
type Prev = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type DeepObject_19<T, D extends number = 11> = D extends 0
  ? T
  : { value: T; nested: DeepObject_19<T, Prev[D]> };

export type { DeepObject_19 };
