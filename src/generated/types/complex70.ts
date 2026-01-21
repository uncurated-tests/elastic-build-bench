// Complex type file 70 - Deep inference and conditional types
type Prev = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

// Recursive object type requiring deep inference
type DeepNested_70<T, D extends number = 12> = D extends 0
  ? T
  : {
      value: T;
      meta: { index: 70; depth: D };
      nested: DeepNested_70<T, Prev[D]>;
      sibling: D extends 1 ? T : DeepNested_70<T, Prev[D]>;
    };

// Conditional type with union distribution
type Distributed_70<T> = T extends string
  ? { type: 'string'; value: T; index: 70 }
  : T extends number
  ? { type: 'number'; value: T; computed: `value_${T}` }
  : T extends boolean
  ? { type: 'boolean'; flag: T }
  : { type: 'unknown'; raw: T };

// Mapped type over union
type OptionKey_70 = 'option_70_0' | 'option_70_1' | 'option_70_2' | 'option_70_3' | 'option_70_4' | 'option_70_5' | 'option_70_6' | 'option_70_7' | 'option_70_8' | 'option_70_9' | 'option_70_10' | 'option_70_11' | 'option_70_12' | 'option_70_13' | 'option_70_14' | 'option_70_15' | 'option_70_16' | 'option_70_17' | 'option_70_18' | 'option_70_19';
type OptionMap_70 = {
  [K in OptionKey_70]: {
    key: K;
    index: 70;
    handler: (input: K) => Distributed_70<K>;
  };
};

// Infer from complex function signatures  
type ExtractReturn_70<T> = T extends (...args: infer A) => infer R
  ? { args: A; return: R; arity: A['length'] }
  : never;

// Template literal types
type EventName_70 = `on${Capitalize<OptionKey_70>}Change`;

// Export all types
export type {
  DeepNested_70,
  Distributed_70,
  OptionKey_70,
  OptionMap_70,
  ExtractReturn_70,
  EventName_70,
};
