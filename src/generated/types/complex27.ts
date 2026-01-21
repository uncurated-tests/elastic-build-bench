// Complex type file 27 - Deep inference and conditional types
type Prev = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

// Recursive object type requiring deep inference
type DeepNested_27<T, D extends number = 11> = D extends 0
  ? T
  : {
      value: T;
      meta: { index: 27; depth: D };
      nested: DeepNested_27<T, Prev[D]>;
      sibling: D extends 1 ? T : DeepNested_27<T, Prev[D]>;
    };

// Conditional type with union distribution
type Distributed_27<T> = T extends string
  ? { type: 'string'; value: T; index: 27 }
  : T extends number
  ? { type: 'number'; value: T; computed: `value_${T}` }
  : T extends boolean
  ? { type: 'boolean'; flag: T }
  : { type: 'unknown'; raw: T };

// Mapped type over union
type OptionKey_27 = 'option_27_0' | 'option_27_1' | 'option_27_2' | 'option_27_3' | 'option_27_4' | 'option_27_5' | 'option_27_6' | 'option_27_7' | 'option_27_8' | 'option_27_9' | 'option_27_10' | 'option_27_11' | 'option_27_12' | 'option_27_13' | 'option_27_14' | 'option_27_15' | 'option_27_16';
type OptionMap_27 = {
  [K in OptionKey_27]: {
    key: K;
    index: 27;
    handler: (input: K) => Distributed_27<K>;
  };
};

// Infer from complex function signatures  
type ExtractReturn_27<T> = T extends (...args: infer A) => infer R
  ? { args: A; return: R; arity: A['length'] }
  : never;

// Template literal types
type EventName_27 = `on${Capitalize<OptionKey_27>}Change`;

// Export all types
export type {
  DeepNested_27,
  Distributed_27,
  OptionKey_27,
  OptionMap_27,
  ExtractReturn_27,
  EventName_27,
};
