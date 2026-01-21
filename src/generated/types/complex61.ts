// Complex type file 61 - Deep inference and conditional types
type Prev = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

// Recursive object type requiring deep inference
type DeepNested_61<T, D extends number = 9> = D extends 0
  ? T
  : {
      value: T;
      meta: { index: 61; depth: D };
      nested: DeepNested_61<T, Prev[D]>;
      sibling: D extends 1 ? T : DeepNested_61<T, Prev[D]>;
    };

// Conditional type with union distribution
type Distributed_61<T> = T extends string
  ? { type: 'string'; value: T; index: 61 }
  : T extends number
  ? { type: 'number'; value: T; computed: `value_${T}` }
  : T extends boolean
  ? { type: 'boolean'; flag: T }
  : { type: 'unknown'; raw: T };

// Mapped type over union
type OptionKey_61 = 'option_61_0' | 'option_61_1' | 'option_61_2' | 'option_61_3' | 'option_61_4' | 'option_61_5' | 'option_61_6' | 'option_61_7' | 'option_61_8' | 'option_61_9' | 'option_61_10';
type OptionMap_61 = {
  [K in OptionKey_61]: {
    key: K;
    index: 61;
    handler: (input: K) => Distributed_61<K>;
  };
};

// Infer from complex function signatures  
type ExtractReturn_61<T> = T extends (...args: infer A) => infer R
  ? { args: A; return: R; arity: A['length'] }
  : never;

// Template literal types
type EventName_61 = `on${Capitalize<OptionKey_61>}Change`;

// Export all types
export type {
  DeepNested_61,
  Distributed_61,
  OptionKey_61,
  OptionMap_61,
  ExtractReturn_61,
  EventName_61,
};
