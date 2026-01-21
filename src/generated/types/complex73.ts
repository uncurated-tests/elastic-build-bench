// Complex type file 73 - Deep inference and conditional types
type Prev = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

// Recursive object type requiring deep inference
type DeepNested_73<T, D extends number = 9> = D extends 0
  ? T
  : {
      value: T;
      meta: { index: 73; depth: D };
      nested: DeepNested_73<T, Prev[D]>;
      sibling: D extends 1 ? T : DeepNested_73<T, Prev[D]>;
    };

// Conditional type with union distribution
type Distributed_73<T> = T extends string
  ? { type: 'string'; value: T; index: 73 }
  : T extends number
  ? { type: 'number'; value: T; computed: `value_${T}` }
  : T extends boolean
  ? { type: 'boolean'; flag: T }
  : { type: 'unknown'; raw: T };

// Mapped type over union
type OptionKey_73 = 'option_73_0' | 'option_73_1' | 'option_73_2' | 'option_73_3' | 'option_73_4' | 'option_73_5' | 'option_73_6' | 'option_73_7' | 'option_73_8' | 'option_73_9' | 'option_73_10' | 'option_73_11' | 'option_73_12' | 'option_73_13' | 'option_73_14' | 'option_73_15' | 'option_73_16' | 'option_73_17' | 'option_73_18' | 'option_73_19' | 'option_73_20' | 'option_73_21' | 'option_73_22';
type OptionMap_73 = {
  [K in OptionKey_73]: {
    key: K;
    index: 73;
    handler: (input: K) => Distributed_73<K>;
  };
};

// Infer from complex function signatures  
type ExtractReturn_73<T> = T extends (...args: infer A) => infer R
  ? { args: A; return: R; arity: A['length'] }
  : never;

// Template literal types
type EventName_73 = `on${Capitalize<OptionKey_73>}Change`;

// Export all types
export type {
  DeepNested_73,
  Distributed_73,
  OptionKey_73,
  OptionMap_73,
  ExtractReturn_73,
  EventName_73,
};
