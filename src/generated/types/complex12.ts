// Complex type file 12 - Deep inference and conditional types
type Prev = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

// Recursive object type requiring deep inference
type DeepNested_12<T, D extends number = 8> = D extends 0
  ? T
  : {
      value: T;
      meta: { index: 12; depth: D };
      nested: DeepNested_12<T, Prev[D]>;
      sibling: D extends 1 ? T : DeepNested_12<T, Prev[D]>;
    };

// Conditional type with union distribution
type Distributed_12<T> = T extends string
  ? { type: 'string'; value: T; index: 12 }
  : T extends number
  ? { type: 'number'; value: T; computed: `value_${T}` }
  : T extends boolean
  ? { type: 'boolean'; flag: T }
  : { type: 'unknown'; raw: T };

// Mapped type over union
type OptionKey_12 = 'option_12_0' | 'option_12_1' | 'option_12_2' | 'option_12_3' | 'option_12_4' | 'option_12_5' | 'option_12_6' | 'option_12_7' | 'option_12_8' | 'option_12_9' | 'option_12_10' | 'option_12_11' | 'option_12_12' | 'option_12_13' | 'option_12_14' | 'option_12_15' | 'option_12_16' | 'option_12_17' | 'option_12_18' | 'option_12_19' | 'option_12_20' | 'option_12_21';
type OptionMap_12 = {
  [K in OptionKey_12]: {
    key: K;
    index: 12;
    handler: (input: K) => Distributed_12<K>;
  };
};

// Infer from complex function signatures  
type ExtractReturn_12<T> = T extends (...args: infer A) => infer R
  ? { args: A; return: R; arity: A['length'] }
  : never;

// Template literal types
type EventName_12 = `on${Capitalize<OptionKey_12>}Change`;

// Export all types
export type {
  DeepNested_12,
  Distributed_12,
  OptionKey_12,
  OptionMap_12,
  ExtractReturn_12,
  EventName_12,
};
