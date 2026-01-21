// Complex type file 33 - Deep inference and conditional types
type Prev = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

// Recursive object type requiring deep inference
type DeepNested_33<T, D extends number = 11> = D extends 0
  ? T
  : {
      value: T;
      meta: { index: 33; depth: D };
      nested: DeepNested_33<T, Prev[D]>;
      sibling: D extends 1 ? T : DeepNested_33<T, Prev[D]>;
    };

// Conditional type with union distribution
type Distributed_33<T> = T extends string
  ? { type: 'string'; value: T; index: 33 }
  : T extends number
  ? { type: 'number'; value: T; computed: `value_${T}` }
  : T extends boolean
  ? { type: 'boolean'; flag: T }
  : { type: 'unknown'; raw: T };

// Mapped type over union
type OptionKey_33 = 'option_33_0' | 'option_33_1' | 'option_33_2' | 'option_33_3' | 'option_33_4' | 'option_33_5' | 'option_33_6' | 'option_33_7' | 'option_33_8' | 'option_33_9' | 'option_33_10' | 'option_33_11' | 'option_33_12' | 'option_33_13' | 'option_33_14' | 'option_33_15' | 'option_33_16' | 'option_33_17' | 'option_33_18' | 'option_33_19' | 'option_33_20' | 'option_33_21' | 'option_33_22';
type OptionMap_33 = {
  [K in OptionKey_33]: {
    key: K;
    index: 33;
    handler: (input: K) => Distributed_33<K>;
  };
};

// Infer from complex function signatures  
type ExtractReturn_33<T> = T extends (...args: infer A) => infer R
  ? { args: A; return: R; arity: A['length'] }
  : never;

// Template literal types
type EventName_33 = `on${Capitalize<OptionKey_33>}Change`;

// Export all types
export type {
  DeepNested_33,
  Distributed_33,
  OptionKey_33,
  OptionMap_33,
  ExtractReturn_33,
  EventName_33,
};
