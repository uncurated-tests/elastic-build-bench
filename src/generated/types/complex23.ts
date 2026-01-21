// Complex type file 23 - forces expensive TypeScript type inference
// This file takes ~2-3 seconds to type-check but uses minimal memory

// Recursive type builders
type Prev = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

// Deep recursive object type
type DeepObject_23<T, D extends number = 11> = D extends 0
  ? T
  : { value: T; nested: DeepObject_23<T, Prev[D]>; meta: { depth: D; index: 23 } };

// Recursive array flattening
type Flatten_23<T> = T extends Array<infer U>
  ? U extends Array<unknown>
    ? Flatten_23<U>
    : U
  : T;

// Complex conditional type chain
type Transform_23<T, D extends number = 11> = D extends 0
  ? T
  : T extends string
    ? Transform_23<`[${T}]`, Prev[D]>
    : T extends number
      ? Transform_23<[T, T], Prev[D]>
      : T extends boolean
        ? Transform_23<{ flag: T }, Prev[D]>
        : T extends object
          ? Transform_23<{ wrapped: T; level: D }, Prev[D]>
          : T;

// Union to tuple conversion (expensive)
type UnionToIntersection_23<U> = 
  (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOfUnion_23<T> = 
  UnionToIntersection_23<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type UnionToTuple_23<T, L = LastOfUnion_23<T>, N = [T] extends [never] ? true : false> = 
  true extends N ? [] : [...UnionToTuple_23<Exclude<T, L>>, L];

// Mapped type with conditional transformations
type MapDeep_23<T, D extends number = 11> = D extends 0
  ? T
  : T extends object
    ? { [K in keyof T]: MapDeep_23<T[K], Prev[D]> }
    : T extends Array<infer U>
      ? MapDeep_23<U, Prev[D]>[]
      : Transform_23<T, D>;

// String manipulation types (expensive)
type Split_23<S extends string, D extends string = ''> = 
  S extends `${infer H}${D}${infer T}` 
    ? [H, ...Split_23<T, D>] 
    : S extends '' 
      ? [] 
      : [S];

type Join_23<T extends string[], D extends string = ''> = 
  T extends [] 
    ? '' 
    : T extends [infer F extends string] 
      ? F 
      : T extends [infer F extends string, ...infer R extends string[]] 
        ? `${F}${D}${Join_23<R, D>}` 
        : never;

// Permutation type (exponential complexity, but bounded)
type Permutation_23<T, K = T> = [T] extends [never]
  ? []
  : K extends K
    ? [K, ...Permutation_23<Exclude<T, K>>]
    : never;

// Complex interface using all the above
interface ComplexData_23<T = unknown> {
  id: string;
  data: DeepObject_23<T>;
  transformed: Transform_23<T>;
  flattened: T extends Array<unknown> ? Flatten_23<T> : T;
  mapped: MapDeep_23<T>;
  meta: {
    index: 23;
    depth: 11;
    timestamp: number;
  };
}

// Type that forces evaluation of all nested types
type ForceEval_23<T> = T extends object
  ? { [K in keyof T]: ForceEval_23<T[K]> }
  : T;

// Export types to ensure they're checked
export type {
  DeepObject_23,
  Flatten_23,
  Transform_23,
  MapDeep_23,
  Split_23,
  Join_23,
  Permutation_23,
  ComplexData_23,
  ForceEval_23,
};

// Force type instantiation with concrete types
type _Test1_23 = ForceEval_23<ComplexData_23<string>>;
type _Test2_23 = ForceEval_23<ComplexData_23<number[]>>;
type _Test3_23 = ForceEval_23<ComplexData_23<{ a: string; b: number; c: boolean }>>;
type _Test4_23 = ForceEval_23<Transform_23<'hello'>>;
type _Test5_23 = ForceEval_23<MapDeep_23<{ nested: { deep: { value: string } } }>>;

// Verify types are used (prevents dead code elimination)
declare const _verify_23: _Test1_23 & _Test2_23 & _Test3_23 & _Test4_23 & _Test5_23;
