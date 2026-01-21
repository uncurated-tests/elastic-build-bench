// Complex type file 65 - Deep inference and conditional types
type Prev = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

// Recursive object type requiring deep inference
type DeepNested_65<T, D extends number = 13> = D extends 0
  ? T
  : {
      value: T;
      meta: { index: 65; depth: D };
      nested: DeepNested_65<T, Prev[D]>;
      sibling: D extends 1 ? T : DeepNested_65<T, Prev[D]>;
    };

// Conditional type with union distribution
type Distributed_65<T> = T extends string
  ? { type: 'string'; value: T; index: 65 }
  : T extends number
  ? { type: 'number'; value: T; computed: `value_${T}` }
  : T extends boolean
  ? { type: 'boolean'; flag: T }
  : { type: 'unknown'; raw: T };

// Mapped type over union
type OptionKey_65 = 'option_65_0' | 'option_65_1' | 'option_65_2' | 'option_65_3' | 'option_65_4' | 'option_65_5' | 'option_65_6' | 'option_65_7' | 'option_65_8' | 'option_65_9' | 'option_65_10' | 'option_65_11' | 'option_65_12' | 'option_65_13' | 'option_65_14';
type OptionMap_65 = {
  [K in OptionKey_65]: {
    key: K;
    index: 65;
    handler: (input: K) => Distributed_65<K>;
  };
};

// Infer from complex function signatures  
type ExtractReturn_65<T> = T extends (...args: infer A) => infer R
  ? { args: A; return: R; arity: A['length'] }
  : never;

// Template literal types
type EventName_65 = `on${Capitalize<OptionKey_65>}Change`;

// Export all types
export type {
  DeepNested_65,
  Distributed_65,
  OptionKey_65,
  OptionMap_65,
  ExtractReturn_65,
  EventName_65,
};
