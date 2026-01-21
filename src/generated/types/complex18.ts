// Complex type file 18 - Deep inference and conditional types
type Prev = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

// Recursive object type requiring deep inference
type DeepNested_18<T, D extends number = 8> = D extends 0
  ? T
  : {
      value: T;
      meta: { index: 18; depth: D };
      nested: DeepNested_18<T, Prev[D]>;
      sibling: D extends 1 ? T : DeepNested_18<T, Prev[D]>;
    };

// Conditional type with union distribution
type Distributed_18<T> = T extends string
  ? { type: 'string'; value: T; index: 18 }
  : T extends number
  ? { type: 'number'; value: T; computed: `value_${T}` }
  : T extends boolean
  ? { type: 'boolean'; flag: T }
  : { type: 'unknown'; raw: T };

// Mapped type over union
type OptionKey_18 = 'option_18_0' | 'option_18_1' | 'option_18_2' | 'option_18_3' | 'option_18_4' | 'option_18_5' | 'option_18_6' | 'option_18_7' | 'option_18_8' | 'option_18_9' | 'option_18_10' | 'option_18_11' | 'option_18_12' | 'option_18_13' | 'option_18_14' | 'option_18_15' | 'option_18_16' | 'option_18_17' | 'option_18_18' | 'option_18_19' | 'option_18_20' | 'option_18_21' | 'option_18_22' | 'option_18_23' | 'option_18_24' | 'option_18_25' | 'option_18_26' | 'option_18_27';
type OptionMap_18 = {
  [K in OptionKey_18]: {
    key: K;
    index: 18;
    handler: (input: K) => Distributed_18<K>;
  };
};

// Infer from complex function signatures  
type ExtractReturn_18<T> = T extends (...args: infer A) => infer R
  ? { args: A; return: R; arity: A['length'] }
  : never;

// Template literal types
type EventName_18 = `on${Capitalize<OptionKey_18>}Change`;

// Export all types
export type {
  DeepNested_18,
  Distributed_18,
  OptionKey_18,
  OptionMap_18,
  ExtractReturn_18,
  EventName_18,
};
