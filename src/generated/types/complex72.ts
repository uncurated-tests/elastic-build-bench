// Complex type file 72 - Deep inference and conditional types
type Prev = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

// Recursive object type requiring deep inference
type DeepNested_72<T, D extends number = 8> = D extends 0
  ? T
  : {
      value: T;
      meta: { index: 72; depth: D };
      nested: DeepNested_72<T, Prev[D]>;
      sibling: D extends 1 ? T : DeepNested_72<T, Prev[D]>;
    };

// Conditional type with union distribution
type Distributed_72<T> = T extends string
  ? { type: 'string'; value: T; index: 72 }
  : T extends number
  ? { type: 'number'; value: T; computed: `value_${T}` }
  : T extends boolean
  ? { type: 'boolean'; flag: T }
  : { type: 'unknown'; raw: T };

// Mapped type over union
type OptionKey_72 = 'option_72_0' | 'option_72_1' | 'option_72_2' | 'option_72_3' | 'option_72_4' | 'option_72_5' | 'option_72_6' | 'option_72_7' | 'option_72_8' | 'option_72_9' | 'option_72_10' | 'option_72_11' | 'option_72_12' | 'option_72_13' | 'option_72_14' | 'option_72_15' | 'option_72_16' | 'option_72_17' | 'option_72_18' | 'option_72_19' | 'option_72_20' | 'option_72_21';
type OptionMap_72 = {
  [K in OptionKey_72]: {
    key: K;
    index: 72;
    handler: (input: K) => Distributed_72<K>;
  };
};

// Infer from complex function signatures  
type ExtractReturn_72<T> = T extends (...args: infer A) => infer R
  ? { args: A; return: R; arity: A['length'] }
  : never;

// Template literal types
type EventName_72 = `on${Capitalize<OptionKey_72>}Change`;

// Export all types
export type {
  DeepNested_72,
  Distributed_72,
  OptionKey_72,
  OptionMap_72,
  ExtractReturn_72,
  EventName_72,
};
