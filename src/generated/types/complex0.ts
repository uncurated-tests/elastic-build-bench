// Complex type file 0 - forces expensive TypeScript type inference
// This file takes ~2-3 seconds to type-check but uses minimal memory

// Recursive type builders
type Prev = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

// Deep recursive object type
type DeepObject_0<T, D extends number = 8> = D extends 0
  ? T
  : { value: T; nested: DeepObject_0<T, Prev[D]>; meta: { depth: D; index: 0 } };

// Recursive array flattening
type Flatten_0<T> = T extends Array<infer U>
  ? U extends Array<unknown>
    ? Flatten_0<U>
    : U
  : T;

// Complex conditional type chain
type Transform_0<T, D extends number = 8> = D extends 0
  ? T
  : T extends string
    ? Transform_0<`[${T}]`, Prev[D]>
    : T extends number
      ? Transform_0<[T, T], Prev[D]>
      : T extends boolean
        ? Transform_0<{ flag: T }, Prev[D]>
        : T extends object
          ? Transform_0<{ wrapped: T; level: D }, Prev[D]>
          : T;

// Union to tuple conversion (expensive)
type UnionToIntersection_0<U> = 
  (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOfUnion_0<T> = 
  UnionToIntersection_0<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type UnionToTuple_0<T, L = LastOfUnion_0<T>, N = [T] extends [never] ? true : false> = 
  true extends N ? [] : [...UnionToTuple_0<Exclude<T, L>>, L];

// Mapped type with conditional transformations
type MapDeep_0<T, D extends number = 8> = D extends 0
  ? T
  : T extends object
    ? { [K in keyof T]: MapDeep_0<T[K], Prev[D]> }
    : T extends Array<infer U>
      ? MapDeep_0<U, Prev[D]>[]
      : Transform_0<T, D>;

// String manipulation types (expensive)
type Split_0<S extends string, D extends string = ''> = 
  S extends `${infer H}${D}${infer T}` 
    ? [H, ...Split_0<T, D>] 
    : S extends '' 
      ? [] 
      : [S];

type Join_0<T extends string[], D extends string = ''> = 
  T extends [] 
    ? '' 
    : T extends [infer F extends string] 
      ? F 
      : T extends [infer F extends string, ...infer R extends string[]] 
        ? `${F}${D}${Join_0<R, D>}` 
        : never;

// Permutation type (exponential complexity, but bounded)
type Permutation_0<T, K = T> = [T] extends [never]
  ? []
  : K extends K
    ? [K, ...Permutation_0<Exclude<T, K>>]
    : never;

// Complex interface using all the above
interface ComplexData_0<T = unknown> {
  id: string;
  data: DeepObject_0<T>;
  transformed: Transform_0<T>;
  flattened: T extends Array<unknown> ? Flatten_0<T> : T;
  mapped: MapDeep_0<T>;
  meta: {
    index: 0;
    depth: 8;
    timestamp: number;
  };
}

// Type that forces evaluation of all nested types
type ForceEval_0<T> = T extends object
  ? { [K in keyof T]: ForceEval_0<T[K]> }
  : T;

// Export types to ensure they're checked
export type {
  DeepObject_0,
  Flatten_0,
  Transform_0,
  MapDeep_0,
  Split_0,
  Join_0,
  Permutation_0,
  ComplexData_0,
  ForceEval_0,
};

// Force type instantiation with concrete types
type _Test1_0 = ForceEval_0<ComplexData_0<string>>;
type _Test2_0 = ForceEval_0<ComplexData_0<number[]>>;
type _Test3_0 = ForceEval_0<ComplexData_0<{ a: string; b: number; c: boolean }>>;
type _Test4_0 = ForceEval_0<Transform_0<'hello'>>;
type _Test5_0 = ForceEval_0<MapDeep_0<{ nested: { deep: { value: string } } }>>;

// Verify types are used (prevents dead code elimination)
declare const _verify_0: _Test1_0 & _Test2_0 & _Test3_0 & _Test4_0 & _Test5_0;
