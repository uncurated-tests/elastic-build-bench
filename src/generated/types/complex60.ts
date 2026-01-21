// Complex type file 60 - forces expensive TypeScript type inference
// This file takes ~2-3 seconds to type-check but uses minimal memory

// Recursive type builders
type Prev = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

// Deep recursive object type
type DeepObject_60<T, D extends number = 8> = D extends 0
  ? T
  : { value: T; nested: DeepObject_60<T, Prev[D]>; meta: { depth: D; index: 60 } };

// Recursive array flattening
type Flatten_60<T> = T extends Array<infer U>
  ? U extends Array<unknown>
    ? Flatten_60<U>
    : U
  : T;

// Complex conditional type chain
type Transform_60<T, D extends number = 8> = D extends 0
  ? T
  : T extends string
    ? Transform_60<`[${T}]`, Prev[D]>
    : T extends number
      ? Transform_60<[T, T], Prev[D]>
      : T extends boolean
        ? Transform_60<{ flag: T }, Prev[D]>
        : T extends object
          ? Transform_60<{ wrapped: T; level: D }, Prev[D]>
          : T;

// Union to tuple conversion (expensive)
type UnionToIntersection_60<U> = 
  (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOfUnion_60<T> = 
  UnionToIntersection_60<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type UnionToTuple_60<T, L = LastOfUnion_60<T>, N = [T] extends [never] ? true : false> = 
  true extends N ? [] : [...UnionToTuple_60<Exclude<T, L>>, L];

// Mapped type with conditional transformations
type MapDeep_60<T, D extends number = 8> = D extends 0
  ? T
  : T extends object
    ? { [K in keyof T]: MapDeep_60<T[K], Prev[D]> }
    : T extends Array<infer U>
      ? MapDeep_60<U, Prev[D]>[]
      : Transform_60<T, D>;

// String manipulation types (expensive)
type Split_60<S extends string, D extends string = ''> = 
  S extends `${infer H}${D}${infer T}` 
    ? [H, ...Split_60<T, D>] 
    : S extends '' 
      ? [] 
      : [S];

type Join_60<T extends string[], D extends string = ''> = 
  T extends [] 
    ? '' 
    : T extends [infer F extends string] 
      ? F 
      : T extends [infer F extends string, ...infer R extends string[]] 
        ? `${F}${D}${Join_60<R, D>}` 
        : never;

// Permutation type (exponential complexity, but bounded)
type Permutation_60<T, K = T> = [T] extends [never]
  ? []
  : K extends K
    ? [K, ...Permutation_60<Exclude<T, K>>]
    : never;

// Complex interface using all the above
interface ComplexData_60<T = unknown> {
  id: string;
  data: DeepObject_60<T>;
  transformed: Transform_60<T>;
  flattened: T extends Array<unknown> ? Flatten_60<T> : T;
  mapped: MapDeep_60<T>;
  meta: {
    index: 60;
    depth: 8;
    timestamp: number;
  };
}

// Type that forces evaluation of all nested types
type ForceEval_60<T> = T extends object
  ? { [K in keyof T]: ForceEval_60<T[K]> }
  : T;

// Export types to ensure they're checked
export type {
  DeepObject_60,
  Flatten_60,
  Transform_60,
  MapDeep_60,
  Split_60,
  Join_60,
  Permutation_60,
  ComplexData_60,
  ForceEval_60,
};

// Force type instantiation with concrete types
type _Test1_60 = ForceEval_60<ComplexData_60<string>>;
type _Test2_60 = ForceEval_60<ComplexData_60<number[]>>;
type _Test3_60 = ForceEval_60<ComplexData_60<{ a: string; b: number; c: boolean }>>;
type _Test4_60 = ForceEval_60<Transform_60<'hello'>>;
type _Test5_60 = ForceEval_60<MapDeep_60<{ nested: { deep: { value: string } } }>>;

// Verify types are used (prevents dead code elimination)
declare const _verify_60: _Test1_60 & _Test2_60 & _Test3_60 & _Test4_60 & _Test5_60;
