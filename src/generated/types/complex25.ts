// Complex type file 25
type Prev = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type DeepObject_25<T, D extends number = 9> = D extends 0
  ? T
  : { value: T; nested: DeepObject_25<T, Prev[D]> };

export type { DeepObject_25 };
