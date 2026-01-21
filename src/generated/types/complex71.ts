// Complex type file 71 - Deep inference and conditional types
type Prev = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

// Recursive object type requiring deep inference
type DeepNested_71<T, D extends number = 13> = D extends 0
  ? T
  : {
      value: T;
      meta: { index: 71; depth: D };
      nested: DeepNested_71<T, Prev[D]>;
      sibling: D extends 1 ? T : DeepNested_71<T, Prev[D]>;
    };

// Conditional type with union distribution
type Distributed_71<T> = T extends string
  ? { type: 'string'; value: T; index: 71 }
  : T extends number
  ? { type: 'number'; value: T; computed: `value_${T}` }
  : T extends boolean
  ? { type: 'boolean'; flag: T }
  : { type: 'unknown'; raw: T };

// Mapped type over union
type OptionKey_71 = 'option_71_0' | 'option_71_1' | 'option_71_2' | 'option_71_3' | 'option_71_4' | 'option_71_5' | 'option_71_6' | 'option_71_7' | 'option_71_8' | 'option_71_9' | 'option_71_10' | 'option_71_11' | 'option_71_12' | 'option_71_13' | 'option_71_14' | 'option_71_15' | 'option_71_16' | 'option_71_17' | 'option_71_18' | 'option_71_19' | 'option_71_20';
type OptionMap_71 = {
  [K in OptionKey_71]: {
    key: K;
    index: 71;
    handler: (input: K) => Distributed_71<K>;
  };
};

// Infer from complex function signatures  
type ExtractReturn_71<T> = T extends (...args: infer A) => infer R
  ? { args: A; return: R; arity: A['length'] }
  : never;

// Template literal types
type EventName_71 = `on${Capitalize<OptionKey_71>}Change`;

// Export all types
export type {
  DeepNested_71,
  Distributed_71,
  OptionKey_71,
  OptionMap_71,
  ExtractReturn_71,
  EventName_71,
};
