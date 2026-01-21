// Complex type file 78 - Deep inference and conditional types
type Prev = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

// Recursive object type requiring deep inference
type DeepNested_78<T, D extends number = 8> = D extends 0
  ? T
  : {
      value: T;
      meta: { index: 78; depth: D };
      nested: DeepNested_78<T, Prev[D]>;
      sibling: D extends 1 ? T : DeepNested_78<T, Prev[D]>;
    };

// Conditional type with union distribution
type Distributed_78<T> = T extends string
  ? { type: 'string'; value: T; index: 78 }
  : T extends number
  ? { type: 'number'; value: T; computed: `value_${T}` }
  : T extends boolean
  ? { type: 'boolean'; flag: T }
  : { type: 'unknown'; raw: T };

// Mapped type over union
type OptionKey_78 = 'option_78_0' | 'option_78_1' | 'option_78_2' | 'option_78_3' | 'option_78_4' | 'option_78_5' | 'option_78_6' | 'option_78_7' | 'option_78_8' | 'option_78_9' | 'option_78_10' | 'option_78_11' | 'option_78_12' | 'option_78_13' | 'option_78_14' | 'option_78_15' | 'option_78_16' | 'option_78_17' | 'option_78_18' | 'option_78_19' | 'option_78_20' | 'option_78_21' | 'option_78_22' | 'option_78_23' | 'option_78_24' | 'option_78_25' | 'option_78_26' | 'option_78_27';
type OptionMap_78 = {
  [K in OptionKey_78]: {
    key: K;
    index: 78;
    handler: (input: K) => Distributed_78<K>;
  };
};

// Infer from complex function signatures  
type ExtractReturn_78<T> = T extends (...args: infer A) => infer R
  ? { args: A; return: R; arity: A['length'] }
  : never;

// Template literal types
type EventName_78 = `on${Capitalize<OptionKey_78>}Change`;

// Export all types
export type {
  DeepNested_78,
  Distributed_78,
  OptionKey_78,
  OptionMap_78,
  ExtractReturn_78,
  EventName_78,
};
