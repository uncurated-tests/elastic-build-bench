// Complex type file 52 - forces expensive TypeScript type inference
// This file takes ~2-3 seconds to type-check but uses minimal memory

// Recursive type builders
type Prev = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

// Deep recursive object type
type DeepObject_52<T, D extends number = 8> = D extends 0
  ? T
  : { value: T; nested: DeepObject_52<T, Prev[D]>; meta: { depth: D; index: 52 } };

// Recursive array flattening
type Flatten_52<T> = T extends Array<infer U>
  ? U extends Array<unknown>
    ? Flatten_52<U>
    : U
  : T;

// Complex conditional type chain
type Transform_52<T, D extends number = 8> = D extends 0
  ? T
  : T extends string
    ? Transform_52<`[${T}]`, Prev[D]>
    : T extends number
      ? Transform_52<[T, T], Prev[D]>
      : T extends boolean
        ? Transform_52<{ flag: T }, Prev[D]>
        : T extends object
          ? Transform_52<{ wrapped: T; level: D }, Prev[D]>
          : T;

// Union to tuple conversion (expensive)
type UnionToIntersection_52<U> = 
  (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOfUnion_52<T> = 
  UnionToIntersection_52<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type UnionToTuple_52<T, L = LastOfUnion_52<T>, N = [T] extends [never] ? true : false> = 
  true extends N ? [] : [...UnionToTuple_52<Exclude<T, L>>, L];

// Mapped type with conditional transformations
type MapDeep_52<T, D extends number = 8> = D extends 0
  ? T
  : T extends object
    ? { [K in keyof T]: MapDeep_52<T[K], Prev[D]> }
    : T extends Array<infer U>
      ? MapDeep_52<U, Prev[D]>[]
      : Transform_52<T, D>;

// String manipulation types (expensive)
type Split_52<S extends string, D extends string = ''> = 
  S extends `${infer H}${D}${infer T}` 
    ? [H, ...Split_52<T, D>] 
    : S extends '' 
      ? [] 
      : [S];

type Join_52<T extends string[], D extends string = ''> = 
  T extends [] 
    ? '' 
    : T extends [infer F extends string] 
      ? F 
      : T extends [infer F extends string, ...infer R extends string[]] 
        ? `${F}${D}${Join_52<R, D>}` 
        : never;

// Permutation type (exponential complexity, but bounded)
type Permutation_52<T, K = T> = [T] extends [never]
  ? []
  : K extends K
    ? [K, ...Permutation_52<Exclude<T, K>>]
    : never;

// Complex interface using all the above
interface ComplexData_52<T = unknown> {
  id: string;
  data: DeepObject_52<T>;
  transformed: Transform_52<T>;
  flattened: T extends Array<unknown> ? Flatten_52<T> : T;
  mapped: MapDeep_52<T>;
  meta: {
    index: 52;
    depth: 8;
    timestamp: number;
  };
}

// Type that forces evaluation of all nested types
type ForceEval_52<T> = T extends object
  ? { [K in keyof T]: ForceEval_52<T[K]> }
  : T;

// Export types to ensure they're checked
export type {
  DeepObject_52,
  Flatten_52,
  Transform_52,
  MapDeep_52,
  Split_52,
  Join_52,
  Permutation_52,
  ComplexData_52,
  ForceEval_52,
};

// Force type instantiation with concrete types
type _Test1_52 = ForceEval_52<ComplexData_52<string>>;
type _Test2_52 = ForceEval_52<ComplexData_52<number[]>>;
type _Test3_52 = ForceEval_52<ComplexData_52<{ a: string; b: number; c: boolean }>>;
type _Test4_52 = ForceEval_52<Transform_52<'hello'>>;
type _Test5_52 = ForceEval_52<MapDeep_52<{ nested: { deep: { value: string } } }>>;

// Verify types are used (prevents dead code elimination)
declare const _verify_52: _Test1_52 & _Test2_52 & _Test3_52 & _Test4_52 & _Test5_52;
