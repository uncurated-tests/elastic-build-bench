// Complex type file 27
type Prev = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type DeepObject_27<T, D extends number = 11> = D extends 0
  ? T
  : { value: T; nested: DeepObject_27<T, Prev[D]> };

export type { DeepObject_27 };
