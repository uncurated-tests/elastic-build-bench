// Complex type file 2 - Deep inference and conditional types
type Prev = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

// Recursive object type requiring deep inference
type DeepNested_2<T, D extends number = 10> = D extends 0
  ? T
  : {
      value: T;
      meta: { index: 2; depth: D };
      nested: DeepNested_2<T, Prev[D]>;
      sibling: D extends 1 ? T : DeepNested_2<T, Prev[D]>;
    };

// Conditional type with union distribution
type Distributed_2<T> = T extends string
  ? { type: 'string'; value: T; index: 2 }
  : T extends number
  ? { type: 'number'; value: T; computed: `value_${T}` }
  : T extends boolean
  ? { type: 'boolean'; flag: T }
  : { type: 'unknown'; raw: T };

// Mapped type over union
type OptionKey_2 = 'option_2_0' | 'option_2_1' | 'option_2_2' | 'option_2_3' | 'option_2_4' | 'option_2_5' | 'option_2_6' | 'option_2_7' | 'option_2_8' | 'option_2_9' | 'option_2_10' | 'option_2_11';
type OptionMap_2 = {
  [K in OptionKey_2]: {
    key: K;
    index: 2;
    handler: (input: K) => Distributed_2<K>;
  };
};

// Infer from complex function signatures  
type ExtractReturn_2<T> = T extends (...args: infer A) => infer R
  ? { args: A; return: R; arity: A['length'] }
  : never;

// Template literal types
type EventName_2 = `on${Capitalize<OptionKey_2>}Change`;

// Export all types
export type {
  DeepNested_2,
  Distributed_2,
  OptionKey_2,
  OptionMap_2,
  ExtractReturn_2,
  EventName_2,
};
