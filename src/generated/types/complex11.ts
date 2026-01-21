// Complex type file 11 - forces expensive TypeScript type inference
// This file takes ~2-3 seconds to type-check but uses minimal memory

// Recursive type builders
type Prev = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

// Deep recursive object type
type DeepObject_11<T, D extends number = 11> = D extends 0
  ? T
  : { value: T; nested: DeepObject_11<T, Prev[D]>; meta: { depth: D; index: 11 } };

// Recursive array flattening
type Flatten_11<T> = T extends Array<infer U>
  ? U extends Array<unknown>
    ? Flatten_11<U>
    : U
  : T;

// Complex conditional type chain
type Transform_11<T, D extends number = 11> = D extends 0
  ? T
  : T extends string
    ? Transform_11<`[${T}]`, Prev[D]>
    : T extends number
      ? Transform_11<[T, T], Prev[D]>
      : T extends boolean
        ? Transform_11<{ flag: T }, Prev[D]>
        : T extends object
          ? Transform_11<{ wrapped: T; level: D }, Prev[D]>
          : T;

// Union to tuple conversion (expensive)
type UnionToIntersection_11<U> = 
  (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOfUnion_11<T> = 
  UnionToIntersection_11<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type UnionToTuple_11<T, L = LastOfUnion_11<T>, N = [T] extends [never] ? true : false> = 
  true extends N ? [] : [...UnionToTuple_11<Exclude<T, L>>, L];

// Mapped type with conditional transformations
type MapDeep_11<T, D extends number = 11> = D extends 0
  ? T
  : T extends object
    ? { [K in keyof T]: MapDeep_11<T[K], Prev[D]> }
    : T extends Array<infer U>
      ? MapDeep_11<U, Prev[D]>[]
      : Transform_11<T, D>;

// String manipulation types (expensive)
type Split_11<S extends string, D extends string = ''> = 
  S extends `${infer H}${D}${infer T}` 
    ? [H, ...Split_11<T, D>] 
    : S extends '' 
      ? [] 
      : [S];

type Join_11<T extends string[], D extends string = ''> = 
  T extends [] 
    ? '' 
    : T extends [infer F extends string] 
      ? F 
      : T extends [infer F extends string, ...infer R extends string[]] 
        ? `${F}${D}${Join_11<R, D>}` 
        : never;

// Permutation type (exponential complexity, but bounded)
type Permutation_11<T, K = T> = [T] extends [never]
  ? []
  : K extends K
    ? [K, ...Permutation_11<Exclude<T, K>>]
    : never;

// Complex interface using all the above
interface ComplexData_11<T = unknown> {
  id: string;
  data: DeepObject_11<T>;
  transformed: Transform_11<T>;
  flattened: T extends Array<unknown> ? Flatten_11<T> : T;
  mapped: MapDeep_11<T>;
  meta: {
    index: 11;
    depth: 11;
    timestamp: number;
  };
}

// Type that forces evaluation of all nested types
type ForceEval_11<T> = T extends object
  ? { [K in keyof T]: ForceEval_11<T[K]> }
  : T;

// Export types to ensure they're checked
export type {
  DeepObject_11,
  Flatten_11,
  Transform_11,
  MapDeep_11,
  Split_11,
  Join_11,
  Permutation_11,
  ComplexData_11,
  ForceEval_11,
};

// Force type instantiation with concrete types
type _Test1_11 = ForceEval_11<ComplexData_11<string>>;
type _Test2_11 = ForceEval_11<ComplexData_11<number[]>>;
type _Test3_11 = ForceEval_11<ComplexData_11<{ a: string; b: number; c: boolean }>>;
type _Test4_11 = ForceEval_11<Transform_11<'hello'>>;
type _Test5_11 = ForceEval_11<MapDeep_11<{ nested: { deep: { value: string } } }>>;

// Verify types are used (prevents dead code elimination)
declare const _verify_11: _Test1_11 & _Test2_11 & _Test3_11 & _Test4_11 & _Test5_11;
