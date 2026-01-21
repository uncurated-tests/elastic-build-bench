// Complex type file 39 - forces expensive TypeScript type inference
// This file takes ~2-3 seconds to type-check but uses minimal memory

// Recursive type builders
type Prev = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

// Deep recursive object type
type DeepObject_39<T, D extends number = 11> = D extends 0
  ? T
  : { value: T; nested: DeepObject_39<T, Prev[D]>; meta: { depth: D; index: 39 } };

// Recursive array flattening
type Flatten_39<T> = T extends Array<infer U>
  ? U extends Array<unknown>
    ? Flatten_39<U>
    : U
  : T;

// Complex conditional type chain
type Transform_39<T, D extends number = 11> = D extends 0
  ? T
  : T extends string
    ? Transform_39<`[${T}]`, Prev[D]>
    : T extends number
      ? Transform_39<[T, T], Prev[D]>
      : T extends boolean
        ? Transform_39<{ flag: T }, Prev[D]>
        : T extends object
          ? Transform_39<{ wrapped: T; level: D }, Prev[D]>
          : T;

// Union to tuple conversion (expensive)
type UnionToIntersection_39<U> = 
  (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOfUnion_39<T> = 
  UnionToIntersection_39<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type UnionToTuple_39<T, L = LastOfUnion_39<T>, N = [T] extends [never] ? true : false> = 
  true extends N ? [] : [...UnionToTuple_39<Exclude<T, L>>, L];

// Mapped type with conditional transformations
type MapDeep_39<T, D extends number = 11> = D extends 0
  ? T
  : T extends object
    ? { [K in keyof T]: MapDeep_39<T[K], Prev[D]> }
    : T extends Array<infer U>
      ? MapDeep_39<U, Prev[D]>[]
      : Transform_39<T, D>;

// String manipulation types (expensive)
type Split_39<S extends string, D extends string = ''> = 
  S extends `${infer H}${D}${infer T}` 
    ? [H, ...Split_39<T, D>] 
    : S extends '' 
      ? [] 
      : [S];

type Join_39<T extends string[], D extends string = ''> = 
  T extends [] 
    ? '' 
    : T extends [infer F extends string] 
      ? F 
      : T extends [infer F extends string, ...infer R extends string[]] 
        ? `${F}${D}${Join_39<R, D>}` 
        : never;

// Permutation type (exponential complexity, but bounded)
type Permutation_39<T, K = T> = [T] extends [never]
  ? []
  : K extends K
    ? [K, ...Permutation_39<Exclude<T, K>>]
    : never;

// Complex interface using all the above
interface ComplexData_39<T = unknown> {
  id: string;
  data: DeepObject_39<T>;
  transformed: Transform_39<T>;
  flattened: T extends Array<unknown> ? Flatten_39<T> : T;
  mapped: MapDeep_39<T>;
  meta: {
    index: 39;
    depth: 11;
    timestamp: number;
  };
}

// Type that forces evaluation of all nested types
type ForceEval_39<T> = T extends object
  ? { [K in keyof T]: ForceEval_39<T[K]> }
  : T;

// Export types to ensure they're checked
export type {
  DeepObject_39,
  Flatten_39,
  Transform_39,
  MapDeep_39,
  Split_39,
  Join_39,
  Permutation_39,
  ComplexData_39,
  ForceEval_39,
};

// Force type instantiation with concrete types
type _Test1_39 = ForceEval_39<ComplexData_39<string>>;
type _Test2_39 = ForceEval_39<ComplexData_39<number[]>>;
type _Test3_39 = ForceEval_39<ComplexData_39<{ a: string; b: number; c: boolean }>>;
type _Test4_39 = ForceEval_39<Transform_39<'hello'>>;
type _Test5_39 = ForceEval_39<MapDeep_39<{ nested: { deep: { value: string } } }>>;

// Verify types are used (prevents dead code elimination)
declare const _verify_39: _Test1_39 & _Test2_39 & _Test3_39 & _Test4_39 & _Test5_39;
