// Complex type file 77 - Deep inference and conditional types
type Prev = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

// Recursive object type requiring deep inference
type DeepNested_77<T, D extends number = 13> = D extends 0
  ? T
  : {
      value: T;
      meta: { index: 77; depth: D };
      nested: DeepNested_77<T, Prev[D]>;
      sibling: D extends 1 ? T : DeepNested_77<T, Prev[D]>;
    };

// Conditional type with union distribution
type Distributed_77<T> = T extends string
  ? { type: 'string'; value: T; index: 77 }
  : T extends number
  ? { type: 'number'; value: T; computed: `value_${T}` }
  : T extends boolean
  ? { type: 'boolean'; flag: T }
  : { type: 'unknown'; raw: T };

// Mapped type over union
type OptionKey_77 = 'option_77_0' | 'option_77_1' | 'option_77_2' | 'option_77_3' | 'option_77_4' | 'option_77_5' | 'option_77_6' | 'option_77_7' | 'option_77_8' | 'option_77_9' | 'option_77_10' | 'option_77_11' | 'option_77_12' | 'option_77_13' | 'option_77_14' | 'option_77_15' | 'option_77_16' | 'option_77_17' | 'option_77_18' | 'option_77_19' | 'option_77_20' | 'option_77_21' | 'option_77_22' | 'option_77_23' | 'option_77_24' | 'option_77_25' | 'option_77_26';
type OptionMap_77 = {
  [K in OptionKey_77]: {
    key: K;
    index: 77;
    handler: (input: K) => Distributed_77<K>;
  };
};

// Infer from complex function signatures  
type ExtractReturn_77<T> = T extends (...args: infer A) => infer R
  ? { args: A; return: R; arity: A['length'] }
  : never;

// Template literal types
type EventName_77 = `on${Capitalize<OptionKey_77>}Change`;

// Export all types
export type {
  DeepNested_77,
  Distributed_77,
  OptionKey_77,
  OptionMap_77,
  ExtractReturn_77,
  EventName_77,
};
