// Complex type file 14 - forces expensive TypeScript type inference
// This file takes ~2-3 seconds to type-check but uses minimal memory

// Recursive type builders
type Prev = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

// Deep recursive object type
type DeepObject_14<T, D extends number = 10> = D extends 0
  ? T
  : { value: T; nested: DeepObject_14<T, Prev[D]>; meta: { depth: D; index: 14 } };

// Recursive array flattening
type Flatten_14<T> = T extends Array<infer U>
  ? U extends Array<unknown>
    ? Flatten_14<U>
    : U
  : T;

// Complex conditional type chain
type Transform_14<T, D extends number = 10> = D extends 0
  ? T
  : T extends string
    ? Transform_14<`[${T}]`, Prev[D]>
    : T extends number
      ? Transform_14<[T, T], Prev[D]>
      : T extends boolean
        ? Transform_14<{ flag: T }, Prev[D]>
        : T extends object
          ? Transform_14<{ wrapped: T; level: D }, Prev[D]>
          : T;

// Union to tuple conversion (expensive)
type UnionToIntersection_14<U> = 
  (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOfUnion_14<T> = 
  UnionToIntersection_14<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type UnionToTuple_14<T, L = LastOfUnion_14<T>, N = [T] extends [never] ? true : false> = 
  true extends N ? [] : [...UnionToTuple_14<Exclude<T, L>>, L];

// Mapped type with conditional transformations
type MapDeep_14<T, D extends number = 10> = D extends 0
  ? T
  : T extends object
    ? { [K in keyof T]: MapDeep_14<T[K], Prev[D]> }
    : T extends Array<infer U>
      ? MapDeep_14<U, Prev[D]>[]
      : Transform_14<T, D>;

// String manipulation types (expensive)
type Split_14<S extends string, D extends string = ''> = 
  S extends `${infer H}${D}${infer T}` 
    ? [H, ...Split_14<T, D>] 
    : S extends '' 
      ? [] 
      : [S];

type Join_14<T extends string[], D extends string = ''> = 
  T extends [] 
    ? '' 
    : T extends [infer F extends string] 
      ? F 
      : T extends [infer F extends string, ...infer R extends string[]] 
        ? `${F}${D}${Join_14<R, D>}` 
        : never;

// Permutation type (exponential complexity, but bounded)
type Permutation_14<T, K = T> = [T] extends [never]
  ? []
  : K extends K
    ? [K, ...Permutation_14<Exclude<T, K>>]
    : never;

// Complex interface using all the above
interface ComplexData_14<T = unknown> {
  id: string;
  data: DeepObject_14<T>;
  transformed: Transform_14<T>;
  flattened: T extends Array<unknown> ? Flatten_14<T> : T;
  mapped: MapDeep_14<T>;
  meta: {
    index: 14;
    depth: 10;
    timestamp: number;
  };
}

// Type that forces evaluation of all nested types
type ForceEval_14<T> = T extends object
  ? { [K in keyof T]: ForceEval_14<T[K]> }
  : T;

// Export types to ensure they're checked
export type {
  DeepObject_14,
  Flatten_14,
  Transform_14,
  MapDeep_14,
  Split_14,
  Join_14,
  Permutation_14,
  ComplexData_14,
  ForceEval_14,
};

// Force type instantiation with concrete types
type _Test1_14 = ForceEval_14<ComplexData_14<string>>;
type _Test2_14 = ForceEval_14<ComplexData_14<number[]>>;
type _Test3_14 = ForceEval_14<ComplexData_14<{ a: string; b: number; c: boolean }>>;
type _Test4_14 = ForceEval_14<Transform_14<'hello'>>;
type _Test5_14 = ForceEval_14<MapDeep_14<{ nested: { deep: { value: string } } }>>;

// Verify types are used (prevents dead code elimination)
declare const _verify_14: _Test1_14 & _Test2_14 & _Test3_14 & _Test4_14 & _Test5_14;
