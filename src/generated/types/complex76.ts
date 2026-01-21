// Complex type file 76 - Deep inference and conditional types
type Prev = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

// Recursive object type requiring deep inference
type DeepNested_76<T, D extends number = 12> = D extends 0
  ? T
  : {
      value: T;
      meta: { index: 76; depth: D };
      nested: DeepNested_76<T, Prev[D]>;
      sibling: D extends 1 ? T : DeepNested_76<T, Prev[D]>;
    };

// Conditional type with union distribution
type Distributed_76<T> = T extends string
  ? { type: 'string'; value: T; index: 76 }
  : T extends number
  ? { type: 'number'; value: T; computed: `value_${T}` }
  : T extends boolean
  ? { type: 'boolean'; flag: T }
  : { type: 'unknown'; raw: T };

// Mapped type over union
type OptionKey_76 = 'option_76_0' | 'option_76_1' | 'option_76_2' | 'option_76_3' | 'option_76_4' | 'option_76_5' | 'option_76_6' | 'option_76_7' | 'option_76_8' | 'option_76_9' | 'option_76_10' | 'option_76_11' | 'option_76_12' | 'option_76_13' | 'option_76_14' | 'option_76_15' | 'option_76_16' | 'option_76_17' | 'option_76_18' | 'option_76_19' | 'option_76_20' | 'option_76_21' | 'option_76_22' | 'option_76_23' | 'option_76_24' | 'option_76_25';
type OptionMap_76 = {
  [K in OptionKey_76]: {
    key: K;
    index: 76;
    handler: (input: K) => Distributed_76<K>;
  };
};

// Infer from complex function signatures  
type ExtractReturn_76<T> = T extends (...args: infer A) => infer R
  ? { args: A; return: R; arity: A['length'] }
  : never;

// Template literal types
type EventName_76 = `on${Capitalize<OptionKey_76>}Change`;

// Export all types
export type {
  DeepNested_76,
  Distributed_76,
  OptionKey_76,
  OptionMap_76,
  ExtractReturn_76,
  EventName_76,
};
