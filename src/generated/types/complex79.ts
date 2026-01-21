// Complex type file 79 - forces expensive TypeScript type inference
// This file takes ~2-3 seconds to type-check but uses minimal memory

// Recursive type builders
type Prev = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

// Deep recursive object type
type DeepObject_79<T, D extends number = 11> = D extends 0
  ? T
  : { value: T; nested: DeepObject_79<T, Prev[D]>; meta: { depth: D; index: 79 } };

// Recursive array flattening
type Flatten_79<T> = T extends Array<infer U>
  ? U extends Array<unknown>
    ? Flatten_79<U>
    : U
  : T;

// Complex conditional type chain
type Transform_79<T, D extends number = 11> = D extends 0
  ? T
  : T extends string
    ? Transform_79<`[${T}]`, Prev[D]>
    : T extends number
      ? Transform_79<[T, T], Prev[D]>
      : T extends boolean
        ? Transform_79<{ flag: T }, Prev[D]>
        : T extends object
          ? Transform_79<{ wrapped: T; level: D }, Prev[D]>
          : T;

// Union to tuple conversion (expensive)
type UnionToIntersection_79<U> = 
  (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOfUnion_79<T> = 
  UnionToIntersection_79<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type UnionToTuple_79<T, L = LastOfUnion_79<T>, N = [T] extends [never] ? true : false> = 
  true extends N ? [] : [...UnionToTuple_79<Exclude<T, L>>, L];

// Mapped type with conditional transformations
type MapDeep_79<T, D extends number = 11> = D extends 0
  ? T
  : T extends object
    ? { [K in keyof T]: MapDeep_79<T[K], Prev[D]> }
    : T extends Array<infer U>
      ? MapDeep_79<U, Prev[D]>[]
      : Transform_79<T, D>;

// String manipulation types (expensive)
type Split_79<S extends string, D extends string = ''> = 
  S extends `${infer H}${D}${infer T}` 
    ? [H, ...Split_79<T, D>] 
    : S extends '' 
      ? [] 
      : [S];

type Join_79<T extends string[], D extends string = ''> = 
  T extends [] 
    ? '' 
    : T extends [infer F extends string] 
      ? F 
      : T extends [infer F extends string, ...infer R extends string[]] 
        ? `${F}${D}${Join_79<R, D>}` 
        : never;

// Permutation type (exponential complexity, but bounded)
type Permutation_79<T, K = T> = [T] extends [never]
  ? []
  : K extends K
    ? [K, ...Permutation_79<Exclude<T, K>>]
    : never;

// Complex interface using all the above
interface ComplexData_79<T = unknown> {
  id: string;
  data: DeepObject_79<T>;
  transformed: Transform_79<T>;
  flattened: T extends Array<unknown> ? Flatten_79<T> : T;
  mapped: MapDeep_79<T>;
  meta: {
    index: 79;
    depth: 11;
    timestamp: number;
  };
}

// Type that forces evaluation of all nested types
type ForceEval_79<T> = T extends object
  ? { [K in keyof T]: ForceEval_79<T[K]> }
  : T;

// Export types to ensure they're checked
export type {
  DeepObject_79,
  Flatten_79,
  Transform_79,
  MapDeep_79,
  Split_79,
  Join_79,
  Permutation_79,
  ComplexData_79,
  ForceEval_79,
};

// Force type instantiation with concrete types
type _Test1_79 = ForceEval_79<ComplexData_79<string>>;
type _Test2_79 = ForceEval_79<ComplexData_79<number[]>>;
type _Test3_79 = ForceEval_79<ComplexData_79<{ a: string; b: number; c: boolean }>>;
type _Test4_79 = ForceEval_79<Transform_79<'hello'>>;
type _Test5_79 = ForceEval_79<MapDeep_79<{ nested: { deep: { value: string } } }>>;

// Verify types are used (prevents dead code elimination)
declare const _verify_79: _Test1_79 & _Test2_79 & _Test3_79 & _Test4_79 & _Test5_79;
