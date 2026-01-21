// Complex type file 59 - forces expensive TypeScript type inference
// This file takes ~2-3 seconds to type-check but uses minimal memory

// Recursive type builders
type Prev = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

// Deep recursive object type
type DeepObject_59<T, D extends number = 11> = D extends 0
  ? T
  : { value: T; nested: DeepObject_59<T, Prev[D]>; meta: { depth: D; index: 59 } };

// Recursive array flattening
type Flatten_59<T> = T extends Array<infer U>
  ? U extends Array<unknown>
    ? Flatten_59<U>
    : U
  : T;

// Complex conditional type chain
type Transform_59<T, D extends number = 11> = D extends 0
  ? T
  : T extends string
    ? Transform_59<`[${T}]`, Prev[D]>
    : T extends number
      ? Transform_59<[T, T], Prev[D]>
      : T extends boolean
        ? Transform_59<{ flag: T }, Prev[D]>
        : T extends object
          ? Transform_59<{ wrapped: T; level: D }, Prev[D]>
          : T;

// Union to tuple conversion (expensive)
type UnionToIntersection_59<U> = 
  (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOfUnion_59<T> = 
  UnionToIntersection_59<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type UnionToTuple_59<T, L = LastOfUnion_59<T>, N = [T] extends [never] ? true : false> = 
  true extends N ? [] : [...UnionToTuple_59<Exclude<T, L>>, L];

// Mapped type with conditional transformations
type MapDeep_59<T, D extends number = 11> = D extends 0
  ? T
  : T extends object
    ? { [K in keyof T]: MapDeep_59<T[K], Prev[D]> }
    : T extends Array<infer U>
      ? MapDeep_59<U, Prev[D]>[]
      : Transform_59<T, D>;

// String manipulation types (expensive)
type Split_59<S extends string, D extends string = ''> = 
  S extends `${infer H}${D}${infer T}` 
    ? [H, ...Split_59<T, D>] 
    : S extends '' 
      ? [] 
      : [S];

type Join_59<T extends string[], D extends string = ''> = 
  T extends [] 
    ? '' 
    : T extends [infer F extends string] 
      ? F 
      : T extends [infer F extends string, ...infer R extends string[]] 
        ? `${F}${D}${Join_59<R, D>}` 
        : never;

// Permutation type (exponential complexity, but bounded)
type Permutation_59<T, K = T> = [T] extends [never]
  ? []
  : K extends K
    ? [K, ...Permutation_59<Exclude<T, K>>]
    : never;

// Complex interface using all the above
interface ComplexData_59<T = unknown> {
  id: string;
  data: DeepObject_59<T>;
  transformed: Transform_59<T>;
  flattened: T extends Array<unknown> ? Flatten_59<T> : T;
  mapped: MapDeep_59<T>;
  meta: {
    index: 59;
    depth: 11;
    timestamp: number;
  };
}

// Type that forces evaluation of all nested types
type ForceEval_59<T> = T extends object
  ? { [K in keyof T]: ForceEval_59<T[K]> }
  : T;

// Export types to ensure they're checked
export type {
  DeepObject_59,
  Flatten_59,
  Transform_59,
  MapDeep_59,
  Split_59,
  Join_59,
  Permutation_59,
  ComplexData_59,
  ForceEval_59,
};

// Force type instantiation with concrete types
type _Test1_59 = ForceEval_59<ComplexData_59<string>>;
type _Test2_59 = ForceEval_59<ComplexData_59<number[]>>;
type _Test3_59 = ForceEval_59<ComplexData_59<{ a: string; b: number; c: boolean }>>;
type _Test4_59 = ForceEval_59<Transform_59<'hello'>>;
type _Test5_59 = ForceEval_59<MapDeep_59<{ nested: { deep: { value: string } } }>>;

// Verify types are used (prevents dead code elimination)
declare const _verify_59: _Test1_59 & _Test2_59 & _Test3_59 & _Test4_59 & _Test5_59;
