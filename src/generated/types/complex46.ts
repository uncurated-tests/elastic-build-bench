// Complex type file 46 - Deep inference and conditional types
type Prev = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

type DeepNested_46<T, D extends number = 12> = D extends 0
  ? T
  : {
      value: T;
      meta: { index: 46; depth: D };
      nested: DeepNested_46<T, Prev[D]>;
      sibling: D extends 1 ? T : DeepNested_46<T, Prev[D]>;
    };

type Distributed_46<T> = T extends string
  ? { type: 'string'; value: T; index: 46 }
  : T extends number
  ? { type: 'number'; value: T; computed: `value_${T}` }
  : T extends boolean
  ? { type: 'boolean'; flag: T }
  : { type: 'unknown'; raw: T };

type OptionKey_46 = 'option_46_0' | 'option_46_1' | 'option_46_2' | 'option_46_3' | 'option_46_4' | 'option_46_5' | 'option_46_6' | 'option_46_7' | 'option_46_8' | 'option_46_9' | 'option_46_10' | 'option_46_11' | 'option_46_12' | 'option_46_13' | 'option_46_14' | 'option_46_15';
type OptionMap_46 = {
  [K in OptionKey_46]: {
    key: K;
    index: 46;
    handler: (input: K) => Distributed_46<K>;
  };
};

type ExtractReturn_46<T> = T extends (...args: infer A) => infer R
  ? { args: A; return: R; arity: A['length'] }
  : never;

type EventName_46 = `on${Capitalize<OptionKey_46>}Change`;

export type {
  DeepNested_46,
  Distributed_46,
  OptionKey_46,
  OptionMap_46,
  ExtractReturn_46,
  EventName_46,
};
