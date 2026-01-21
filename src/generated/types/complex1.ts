// Complex type file 1 - Deep inference and conditional types
type Prev = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

// Recursive object type requiring deep inference
type DeepNested_1<T, D extends number = 9> = D extends 0
  ? T
  : {
      value: T;
      meta: { index: 1; depth: D };
      nested: DeepNested_1<T, Prev[D]>;
      sibling: D extends 1 ? T : DeepNested_1<T, Prev[D]>;
    };

// Conditional type with union distribution
type Distributed_1<T> = T extends string
  ? { type: 'string'; value: T; index: 1 }
  : T extends number
  ? { type: 'number'; value: T; computed: `value_${T}` }
  : T extends boolean
  ? { type: 'boolean'; flag: T }
  : { type: 'unknown'; raw: T };

// Mapped type over union
type OptionKey_1 = 'option_1_0' | 'option_1_1' | 'option_1_2' | 'option_1_3' | 'option_1_4' | 'option_1_5' | 'option_1_6' | 'option_1_7' | 'option_1_8' | 'option_1_9' | 'option_1_10';
type OptionMap_1 = {
  [K in OptionKey_1]: {
    key: K;
    index: 1;
    handler: (input: K) => Distributed_1<K>;
  };
};

// Infer from complex function signatures  
type ExtractReturn_1<T> = T extends (...args: infer A) => infer R
  ? { args: A; return: R; arity: A['length'] }
  : never;

// Template literal types
type EventName_1 = `on${Capitalize<OptionKey_1>}Change`;

// Export all types
export type {
  DeepNested_1,
  Distributed_1,
  OptionKey_1,
  OptionMap_1,
  ExtractReturn_1,
  EventName_1,
};
