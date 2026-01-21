// Complex type file 32 - forces expensive TypeScript type inference
// This file takes ~2-3 seconds to type-check but uses minimal memory

// Recursive type builders
type Prev = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

// Deep recursive object type
type DeepObject_32<T, D extends number = 8> = D extends 0
  ? T
  : { value: T; nested: DeepObject_32<T, Prev[D]>; meta: { depth: D; index: 32 } };

// Recursive array flattening
type Flatten_32<T> = T extends Array<infer U>
  ? U extends Array<unknown>
    ? Flatten_32<U>
    : U
  : T;

// Complex conditional type chain
type Transform_32<T, D extends number = 8> = D extends 0
  ? T
  : T extends string
    ? Transform_32<`[${T}]`, Prev[D]>
    : T extends number
      ? Transform_32<[T, T], Prev[D]>
      : T extends boolean
        ? Transform_32<{ flag: T }, Prev[D]>
        : T extends object
          ? Transform_32<{ wrapped: T; level: D }, Prev[D]>
          : T;

// Union to tuple conversion (expensive)
type UnionToIntersection_32<U> = 
  (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOfUnion_32<T> = 
  UnionToIntersection_32<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type UnionToTuple_32<T, L = LastOfUnion_32<T>, N = [T] extends [never] ? true : false> = 
  true extends N ? [] : [...UnionToTuple_32<Exclude<T, L>>, L];

// Mapped type with conditional transformations
type MapDeep_32<T, D extends number = 8> = D extends 0
  ? T
  : T extends object
    ? { [K in keyof T]: MapDeep_32<T[K], Prev[D]> }
    : T extends Array<infer U>
      ? MapDeep_32<U, Prev[D]>[]
      : Transform_32<T, D>;

// String manipulation types (expensive)
type Split_32<S extends string, D extends string = ''> = 
  S extends `${infer H}${D}${infer T}` 
    ? [H, ...Split_32<T, D>] 
    : S extends '' 
      ? [] 
      : [S];

type Join_32<T extends string[], D extends string = ''> = 
  T extends [] 
    ? '' 
    : T extends [infer F extends string] 
      ? F 
      : T extends [infer F extends string, ...infer R extends string[]] 
        ? `${F}${D}${Join_32<R, D>}` 
        : never;

// Permutation type (exponential complexity, but bounded)
type Permutation_32<T, K = T> = [T] extends [never]
  ? []
  : K extends K
    ? [K, ...Permutation_32<Exclude<T, K>>]
    : never;

// Complex interface using all the above
interface ComplexData_32<T = unknown> {
  id: string;
  data: DeepObject_32<T>;
  transformed: Transform_32<T>;
  flattened: T extends Array<unknown> ? Flatten_32<T> : T;
  mapped: MapDeep_32<T>;
  meta: {
    index: 32;
    depth: 8;
    timestamp: number;
  };
}

// Type that forces evaluation of all nested types
type ForceEval_32<T> = T extends object
  ? { [K in keyof T]: ForceEval_32<T[K]> }
  : T;

// Export types to ensure they're checked
export type {
  DeepObject_32,
  Flatten_32,
  Transform_32,
  MapDeep_32,
  Split_32,
  Join_32,
  Permutation_32,
  ComplexData_32,
  ForceEval_32,
};

// Force type instantiation with concrete types
type _Test1_32 = ForceEval_32<ComplexData_32<string>>;
type _Test2_32 = ForceEval_32<ComplexData_32<number[]>>;
type _Test3_32 = ForceEval_32<ComplexData_32<{ a: string; b: number; c: boolean }>>;
type _Test4_32 = ForceEval_32<Transform_32<'hello'>>;
type _Test5_32 = ForceEval_32<MapDeep_32<{ nested: { deep: { value: string } } }>>;

// Verify types are used (prevents dead code elimination)
declare const _verify_32: _Test1_32 & _Test2_32 & _Test3_32 & _Test4_32 & _Test5_32;
