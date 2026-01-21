// Complex type file 39 - Deep inference and conditional types
type Prev = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

// Recursive object type requiring deep inference
type DeepNested_39<T, D extends number = 11> = D extends 0
  ? T
  : {
      value: T;
      meta: { index: 39; depth: D };
      nested: DeepNested_39<T, Prev[D]>;
      sibling: D extends 1 ? T : DeepNested_39<T, Prev[D]>;
    };

// Conditional type with union distribution
type Distributed_39<T> = T extends string
  ? { type: 'string'; value: T; index: 39 }
  : T extends number
  ? { type: 'number'; value: T; computed: `value_${T}` }
  : T extends boolean
  ? { type: 'boolean'; flag: T }
  : { type: 'unknown'; raw: T };

// Mapped type over union
type OptionKey_39 = 'option_39_0' | 'option_39_1' | 'option_39_2' | 'option_39_3' | 'option_39_4' | 'option_39_5' | 'option_39_6' | 'option_39_7' | 'option_39_8' | 'option_39_9' | 'option_39_10' | 'option_39_11' | 'option_39_12' | 'option_39_13' | 'option_39_14' | 'option_39_15' | 'option_39_16' | 'option_39_17' | 'option_39_18' | 'option_39_19' | 'option_39_20' | 'option_39_21' | 'option_39_22' | 'option_39_23' | 'option_39_24' | 'option_39_25' | 'option_39_26' | 'option_39_27' | 'option_39_28';
type OptionMap_39 = {
  [K in OptionKey_39]: {
    key: K;
    index: 39;
    handler: (input: K) => Distributed_39<K>;
  };
};

// Infer from complex function signatures  
type ExtractReturn_39<T> = T extends (...args: infer A) => infer R
  ? { args: A; return: R; arity: A['length'] }
  : never;

// Template literal types
type EventName_39 = `on${Capitalize<OptionKey_39>}Change`;

// Export all types
export type {
  DeepNested_39,
  Distributed_39,
  OptionKey_39,
  OptionMap_39,
  ExtractReturn_39,
  EventName_39,
};
