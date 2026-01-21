// Complex type file 45 - Deep inference and conditional types
type Prev = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

// Recursive object type requiring deep inference
type DeepNested_45<T, D extends number = 11> = D extends 0
  ? T
  : {
      value: T;
      meta: { index: 45; depth: D };
      nested: DeepNested_45<T, Prev[D]>;
      sibling: D extends 1 ? T : DeepNested_45<T, Prev[D]>;
    };

// Conditional type with union distribution
type Distributed_45<T> = T extends string
  ? { type: 'string'; value: T; index: 45 }
  : T extends number
  ? { type: 'number'; value: T; computed: `value_${T}` }
  : T extends boolean
  ? { type: 'boolean'; flag: T }
  : { type: 'unknown'; raw: T };

// Mapped type over union
type OptionKey_45 = 'option_45_0' | 'option_45_1' | 'option_45_2' | 'option_45_3' | 'option_45_4' | 'option_45_5' | 'option_45_6' | 'option_45_7' | 'option_45_8' | 'option_45_9' | 'option_45_10' | 'option_45_11' | 'option_45_12' | 'option_45_13' | 'option_45_14';
type OptionMap_45 = {
  [K in OptionKey_45]: {
    key: K;
    index: 45;
    handler: (input: K) => Distributed_45<K>;
  };
};

// Infer from complex function signatures  
type ExtractReturn_45<T> = T extends (...args: infer A) => infer R
  ? { args: A; return: R; arity: A['length'] }
  : never;

// Template literal types
type EventName_45 = `on${Capitalize<OptionKey_45>}Change`;

// Export all types
export type {
  DeepNested_45,
  Distributed_45,
  OptionKey_45,
  OptionMap_45,
  ExtractReturn_45,
  EventName_45,
};
