// Complex type file 37 - Deep inference and conditional types
type Prev = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

// Recursive object type requiring deep inference
type DeepNested_37<T, D extends number = 9> = D extends 0
  ? T
  : {
      value: T;
      meta: { index: 37; depth: D };
      nested: DeepNested_37<T, Prev[D]>;
      sibling: D extends 1 ? T : DeepNested_37<T, Prev[D]>;
    };

// Conditional type with union distribution
type Distributed_37<T> = T extends string
  ? { type: 'string'; value: T; index: 37 }
  : T extends number
  ? { type: 'number'; value: T; computed: `value_${T}` }
  : T extends boolean
  ? { type: 'boolean'; flag: T }
  : { type: 'unknown'; raw: T };

// Mapped type over union
type OptionKey_37 = 'option_37_0' | 'option_37_1' | 'option_37_2' | 'option_37_3' | 'option_37_4' | 'option_37_5' | 'option_37_6' | 'option_37_7' | 'option_37_8' | 'option_37_9' | 'option_37_10' | 'option_37_11' | 'option_37_12' | 'option_37_13' | 'option_37_14' | 'option_37_15' | 'option_37_16' | 'option_37_17' | 'option_37_18' | 'option_37_19' | 'option_37_20' | 'option_37_21' | 'option_37_22' | 'option_37_23' | 'option_37_24' | 'option_37_25' | 'option_37_26';
type OptionMap_37 = {
  [K in OptionKey_37]: {
    key: K;
    index: 37;
    handler: (input: K) => Distributed_37<K>;
  };
};

// Infer from complex function signatures  
type ExtractReturn_37<T> = T extends (...args: infer A) => infer R
  ? { args: A; return: R; arity: A['length'] }
  : never;

// Template literal types
type EventName_37 = `on${Capitalize<OptionKey_37>}Change`;

// Export all types
export type {
  DeepNested_37,
  Distributed_37,
  OptionKey_37,
  OptionMap_37,
  ExtractReturn_37,
  EventName_37,
};
