// Complex type file 25 - Deep inference and conditional types
type Prev = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

// Recursive object type requiring deep inference
type DeepNested_25<T, D extends number = 9> = D extends 0
  ? T
  : {
      value: T;
      meta: { index: 25; depth: D };
      nested: DeepNested_25<T, Prev[D]>;
      sibling: D extends 1 ? T : DeepNested_25<T, Prev[D]>;
    };

// Conditional type with union distribution
type Distributed_25<T> = T extends string
  ? { type: 'string'; value: T; index: 25 }
  : T extends number
  ? { type: 'number'; value: T; computed: `value_${T}` }
  : T extends boolean
  ? { type: 'boolean'; flag: T }
  : { type: 'unknown'; raw: T };

// Mapped type over union
type OptionKey_25 = 'option_25_0' | 'option_25_1' | 'option_25_2' | 'option_25_3' | 'option_25_4' | 'option_25_5' | 'option_25_6' | 'option_25_7' | 'option_25_8' | 'option_25_9' | 'option_25_10' | 'option_25_11' | 'option_25_12' | 'option_25_13' | 'option_25_14';
type OptionMap_25 = {
  [K in OptionKey_25]: {
    key: K;
    index: 25;
    handler: (input: K) => Distributed_25<K>;
  };
};

// Infer from complex function signatures  
type ExtractReturn_25<T> = T extends (...args: infer A) => infer R
  ? { args: A; return: R; arity: A['length'] }
  : never;

// Template literal types
type EventName_25 = `on${Capitalize<OptionKey_25>}Change`;

// Export all types
export type {
  DeepNested_25,
  Distributed_25,
  OptionKey_25,
  OptionMap_25,
  ExtractReturn_25,
  EventName_25,
};
