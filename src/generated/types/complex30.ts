// Complex type file 30 - Deep inference and conditional types
type Prev = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

type DeepNested_30<T, D extends number = 8> = D extends 0
  ? T
  : {
      value: T;
      meta: { index: 30; depth: D };
      nested: DeepNested_30<T, Prev[D]>;
      sibling: D extends 1 ? T : DeepNested_30<T, Prev[D]>;
    };

type Distributed_30<T> = T extends string
  ? { type: 'string'; value: T; index: 30 }
  : T extends number
  ? { type: 'number'; value: T; computed: `value_${T}` }
  : T extends boolean
  ? { type: 'boolean'; flag: T }
  : { type: 'unknown'; raw: T };

type OptionKey_30 = 'option_30_0' | 'option_30_1' | 'option_30_2' | 'option_30_3' | 'option_30_4' | 'option_30_5' | 'option_30_6' | 'option_30_7' | 'option_30_8' | 'option_30_9' | 'option_30_10' | 'option_30_11' | 'option_30_12' | 'option_30_13' | 'option_30_14' | 'option_30_15' | 'option_30_16' | 'option_30_17' | 'option_30_18' | 'option_30_19';
type OptionMap_30 = {
  [K in OptionKey_30]: {
    key: K;
    index: 30;
    handler: (input: K) => Distributed_30<K>;
  };
};

type ExtractReturn_30<T> = T extends (...args: infer A) => infer R
  ? { args: A; return: R; arity: A['length'] }
  : never;

type EventName_30 = `on${Capitalize<OptionKey_30>}Change`;

export type {
  DeepNested_30,
  Distributed_30,
  OptionKey_30,
  OptionMap_30,
  ExtractReturn_30,
  EventName_30,
};
