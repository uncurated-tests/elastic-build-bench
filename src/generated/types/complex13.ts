// Complex type file 13 - forces expensive TypeScript type inference
// This file takes ~2-3 seconds to type-check but uses minimal memory

// Recursive type builders
type Prev = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

// Deep recursive object type
type DeepObject_13<T, D extends number = 9> = D extends 0
  ? T
  : { value: T; nested: DeepObject_13<T, Prev[D]>; meta: { depth: D; index: 13 } };

// Recursive array flattening
type Flatten_13<T> = T extends Array<infer U>
  ? U extends Array<unknown>
    ? Flatten_13<U>
    : U
  : T;

// Complex conditional type chain
type Transform_13<T, D extends number = 9> = D extends 0
  ? T
  : T extends string
    ? Transform_13<`[${T}]`, Prev[D]>
    : T extends number
      ? Transform_13<[T, T], Prev[D]>
      : T extends boolean
        ? Transform_13<{ flag: T }, Prev[D]>
        : T extends object
          ? Transform_13<{ wrapped: T; level: D }, Prev[D]>
          : T;

// Union to tuple conversion (expensive)
type UnionToIntersection_13<U> = 
  (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOfUnion_13<T> = 
  UnionToIntersection_13<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type UnionToTuple_13<T, L = LastOfUnion_13<T>, N = [T] extends [never] ? true : false> = 
  true extends N ? [] : [...UnionToTuple_13<Exclude<T, L>>, L];

// Mapped type with conditional transformations
type MapDeep_13<T, D extends number = 9> = D extends 0
  ? T
  : T extends object
    ? { [K in keyof T]: MapDeep_13<T[K], Prev[D]> }
    : T extends Array<infer U>
      ? MapDeep_13<U, Prev[D]>[]
      : Transform_13<T, D>;

// String manipulation types (expensive)
type Split_13<S extends string, D extends string = ''> = 
  S extends `${infer H}${D}${infer T}` 
    ? [H, ...Split_13<T, D>] 
    : S extends '' 
      ? [] 
      : [S];

type Join_13<T extends string[], D extends string = ''> = 
  T extends [] 
    ? '' 
    : T extends [infer F extends string] 
      ? F 
      : T extends [infer F extends string, ...infer R extends string[]] 
        ? `${F}${D}${Join_13<R, D>}` 
        : never;

// Permutation type (exponential complexity, but bounded)
type Permutation_13<T, K = T> = [T] extends [never]
  ? []
  : K extends K
    ? [K, ...Permutation_13<Exclude<T, K>>]
    : never;

// Complex interface using all the above
interface ComplexData_13<T = unknown> {
  id: string;
  data: DeepObject_13<T>;
  transformed: Transform_13<T>;
  flattened: T extends Array<unknown> ? Flatten_13<T> : T;
  mapped: MapDeep_13<T>;
  meta: {
    index: 13;
    depth: 9;
    timestamp: number;
  };
}

// Type that forces evaluation of all nested types
type ForceEval_13<T> = T extends object
  ? { [K in keyof T]: ForceEval_13<T[K]> }
  : T;

// Export types to ensure they're checked
export type {
  DeepObject_13,
  Flatten_13,
  Transform_13,
  MapDeep_13,
  Split_13,
  Join_13,
  Permutation_13,
  ComplexData_13,
  ForceEval_13,
};

// Force type instantiation with concrete types
type _Test1_13 = ForceEval_13<ComplexData_13<string>>;
type _Test2_13 = ForceEval_13<ComplexData_13<number[]>>;
type _Test3_13 = ForceEval_13<ComplexData_13<{ a: string; b: number; c: boolean }>>;
type _Test4_13 = ForceEval_13<Transform_13<'hello'>>;
type _Test5_13 = ForceEval_13<MapDeep_13<{ nested: { deep: { value: string } } }>>;

// Verify types are used (prevents dead code elimination)
declare const _verify_13: _Test1_13 & _Test2_13 & _Test3_13 & _Test4_13 & _Test5_13;
