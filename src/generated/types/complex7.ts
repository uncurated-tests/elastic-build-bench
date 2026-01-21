// Complex type file 7 - Deep inference and conditional types
type Prev = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

// Recursive object type requiring deep inference
type DeepNested_7<T, D extends number = 9> = D extends 0
  ? T
  : {
      value: T;
      meta: { index: 7; depth: D };
      nested: DeepNested_7<T, Prev[D]>;
      sibling: D extends 1 ? T : DeepNested_7<T, Prev[D]>;
    };

// Conditional type with union distribution
type Distributed_7<T> = T extends string
  ? { type: 'string'; value: T; index: 7 }
  : T extends number
  ? { type: 'number'; value: T; computed: `value_${T}` }
  : T extends boolean
  ? { type: 'boolean'; flag: T }
  : { type: 'unknown'; raw: T };

// Mapped type over union
type OptionKey_7 = 'option_7_0' | 'option_7_1' | 'option_7_2' | 'option_7_3' | 'option_7_4' | 'option_7_5' | 'option_7_6' | 'option_7_7' | 'option_7_8' | 'option_7_9' | 'option_7_10' | 'option_7_11' | 'option_7_12' | 'option_7_13' | 'option_7_14' | 'option_7_15' | 'option_7_16';
type OptionMap_7 = {
  [K in OptionKey_7]: {
    key: K;
    index: 7;
    handler: (input: K) => Distributed_7<K>;
  };
};

// Infer from complex function signatures  
type ExtractReturn_7<T> = T extends (...args: infer A) => infer R
  ? { args: A; return: R; arity: A['length'] }
  : never;

// Template literal types
type EventName_7 = `on${Capitalize<OptionKey_7>}Change`;

// Export all types
export type {
  DeepNested_7,
  Distributed_7,
  OptionKey_7,
  OptionMap_7,
  ExtractReturn_7,
  EventName_7,
};
