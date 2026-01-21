// Complex type file 43 - Deep inference and conditional types
type Prev = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

// Recursive object type requiring deep inference
type DeepNested_43<T, D extends number = 9> = D extends 0
  ? T
  : {
      value: T;
      meta: { index: 43; depth: D };
      nested: DeepNested_43<T, Prev[D]>;
      sibling: D extends 1 ? T : DeepNested_43<T, Prev[D]>;
    };

// Conditional type with union distribution
type Distributed_43<T> = T extends string
  ? { type: 'string'; value: T; index: 43 }
  : T extends number
  ? { type: 'number'; value: T; computed: `value_${T}` }
  : T extends boolean
  ? { type: 'boolean'; flag: T }
  : { type: 'unknown'; raw: T };

// Mapped type over union
type OptionKey_43 = 'option_43_0' | 'option_43_1' | 'option_43_2' | 'option_43_3' | 'option_43_4' | 'option_43_5' | 'option_43_6' | 'option_43_7' | 'option_43_8' | 'option_43_9' | 'option_43_10' | 'option_43_11' | 'option_43_12';
type OptionMap_43 = {
  [K in OptionKey_43]: {
    key: K;
    index: 43;
    handler: (input: K) => Distributed_43<K>;
  };
};

// Infer from complex function signatures  
type ExtractReturn_43<T> = T extends (...args: infer A) => infer R
  ? { args: A; return: R; arity: A['length'] }
  : never;

// Template literal types
type EventName_43 = `on${Capitalize<OptionKey_43>}Change`;

// Export all types
export type {
  DeepNested_43,
  Distributed_43,
  OptionKey_43,
  OptionMap_43,
  ExtractReturn_43,
  EventName_43,
};
