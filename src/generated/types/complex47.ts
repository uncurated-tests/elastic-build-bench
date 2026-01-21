// Complex type file 47 - forces expensive TypeScript type inference
// This file takes ~2-3 seconds to type-check but uses minimal memory

// Recursive type builders
type Prev = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

// Deep recursive object type
type DeepObject_47<T, D extends number = 11> = D extends 0
  ? T
  : { value: T; nested: DeepObject_47<T, Prev[D]>; meta: { depth: D; index: 47 } };

// Recursive array flattening
type Flatten_47<T> = T extends Array<infer U>
  ? U extends Array<unknown>
    ? Flatten_47<U>
    : U
  : T;

// Complex conditional type chain
type Transform_47<T, D extends number = 11> = D extends 0
  ? T
  : T extends string
    ? Transform_47<`[${T}]`, Prev[D]>
    : T extends number
      ? Transform_47<[T, T], Prev[D]>
      : T extends boolean
        ? Transform_47<{ flag: T }, Prev[D]>
        : T extends object
          ? Transform_47<{ wrapped: T; level: D }, Prev[D]>
          : T;

// Union to tuple conversion (expensive)
type UnionToIntersection_47<U> = 
  (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOfUnion_47<T> = 
  UnionToIntersection_47<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type UnionToTuple_47<T, L = LastOfUnion_47<T>, N = [T] extends [never] ? true : false> = 
  true extends N ? [] : [...UnionToTuple_47<Exclude<T, L>>, L];

// Mapped type with conditional transformations
type MapDeep_47<T, D extends number = 11> = D extends 0
  ? T
  : T extends object
    ? { [K in keyof T]: MapDeep_47<T[K], Prev[D]> }
    : T extends Array<infer U>
      ? MapDeep_47<U, Prev[D]>[]
      : Transform_47<T, D>;

// String manipulation types (expensive)
type Split_47<S extends string, D extends string = ''> = 
  S extends `${infer H}${D}${infer T}` 
    ? [H, ...Split_47<T, D>] 
    : S extends '' 
      ? [] 
      : [S];

type Join_47<T extends string[], D extends string = ''> = 
  T extends [] 
    ? '' 
    : T extends [infer F extends string] 
      ? F 
      : T extends [infer F extends string, ...infer R extends string[]] 
        ? `${F}${D}${Join_47<R, D>}` 
        : never;

// Permutation type (exponential complexity, but bounded)
type Permutation_47<T, K = T> = [T] extends [never]
  ? []
  : K extends K
    ? [K, ...Permutation_47<Exclude<T, K>>]
    : never;

// Complex interface using all the above
interface ComplexData_47<T = unknown> {
  id: string;
  data: DeepObject_47<T>;
  transformed: Transform_47<T>;
  flattened: T extends Array<unknown> ? Flatten_47<T> : T;
  mapped: MapDeep_47<T>;
  meta: {
    index: 47;
    depth: 11;
    timestamp: number;
  };
}

// Type that forces evaluation of all nested types
type ForceEval_47<T> = T extends object
  ? { [K in keyof T]: ForceEval_47<T[K]> }
  : T;

// Export types to ensure they're checked
export type {
  DeepObject_47,
  Flatten_47,
  Transform_47,
  MapDeep_47,
  Split_47,
  Join_47,
  Permutation_47,
  ComplexData_47,
  ForceEval_47,
};

// Force type instantiation with concrete types
type _Test1_47 = ForceEval_47<ComplexData_47<string>>;
type _Test2_47 = ForceEval_47<ComplexData_47<number[]>>;
type _Test3_47 = ForceEval_47<ComplexData_47<{ a: string; b: number; c: boolean }>>;
type _Test4_47 = ForceEval_47<Transform_47<'hello'>>;
type _Test5_47 = ForceEval_47<MapDeep_47<{ nested: { deep: { value: string } } }>>;

// Verify types are used (prevents dead code elimination)
declare const _verify_47: _Test1_47 & _Test2_47 & _Test3_47 & _Test4_47 & _Test5_47;
