// Complex type file 64 - forces expensive TypeScript type inference
// This file takes ~2-3 seconds to type-check but uses minimal memory

// Recursive type builders
type Prev = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

// Deep recursive object type
type DeepObject_64<T, D extends number = 8> = D extends 0
  ? T
  : { value: T; nested: DeepObject_64<T, Prev[D]>; meta: { depth: D; index: 64 } };

// Recursive array flattening
type Flatten_64<T> = T extends Array<infer U>
  ? U extends Array<unknown>
    ? Flatten_64<U>
    : U
  : T;

// Complex conditional type chain
type Transform_64<T, D extends number = 8> = D extends 0
  ? T
  : T extends string
    ? Transform_64<`[${T}]`, Prev[D]>
    : T extends number
      ? Transform_64<[T, T], Prev[D]>
      : T extends boolean
        ? Transform_64<{ flag: T }, Prev[D]>
        : T extends object
          ? Transform_64<{ wrapped: T; level: D }, Prev[D]>
          : T;

// Union to tuple conversion (expensive)
type UnionToIntersection_64<U> = 
  (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOfUnion_64<T> = 
  UnionToIntersection_64<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type UnionToTuple_64<T, L = LastOfUnion_64<T>, N = [T] extends [never] ? true : false> = 
  true extends N ? [] : [...UnionToTuple_64<Exclude<T, L>>, L];

// Mapped type with conditional transformations
type MapDeep_64<T, D extends number = 8> = D extends 0
  ? T
  : T extends object
    ? { [K in keyof T]: MapDeep_64<T[K], Prev[D]> }
    : T extends Array<infer U>
      ? MapDeep_64<U, Prev[D]>[]
      : Transform_64<T, D>;

// String manipulation types (expensive)
type Split_64<S extends string, D extends string = ''> = 
  S extends `${infer H}${D}${infer T}` 
    ? [H, ...Split_64<T, D>] 
    : S extends '' 
      ? [] 
      : [S];

type Join_64<T extends string[], D extends string = ''> = 
  T extends [] 
    ? '' 
    : T extends [infer F extends string] 
      ? F 
      : T extends [infer F extends string, ...infer R extends string[]] 
        ? `${F}${D}${Join_64<R, D>}` 
        : never;

// Permutation type (exponential complexity, but bounded)
type Permutation_64<T, K = T> = [T] extends [never]
  ? []
  : K extends K
    ? [K, ...Permutation_64<Exclude<T, K>>]
    : never;

// Complex interface using all the above
interface ComplexData_64<T = unknown> {
  id: string;
  data: DeepObject_64<T>;
  transformed: Transform_64<T>;
  flattened: T extends Array<unknown> ? Flatten_64<T> : T;
  mapped: MapDeep_64<T>;
  meta: {
    index: 64;
    depth: 8;
    timestamp: number;
  };
}

// Type that forces evaluation of all nested types
type ForceEval_64<T> = T extends object
  ? { [K in keyof T]: ForceEval_64<T[K]> }
  : T;

// Export types to ensure they're checked
export type {
  DeepObject_64,
  Flatten_64,
  Transform_64,
  MapDeep_64,
  Split_64,
  Join_64,
  Permutation_64,
  ComplexData_64,
  ForceEval_64,
};

// Force type instantiation with concrete types
type _Test1_64 = ForceEval_64<ComplexData_64<string>>;
type _Test2_64 = ForceEval_64<ComplexData_64<number[]>>;
type _Test3_64 = ForceEval_64<ComplexData_64<{ a: string; b: number; c: boolean }>>;
type _Test4_64 = ForceEval_64<Transform_64<'hello'>>;
type _Test5_64 = ForceEval_64<MapDeep_64<{ nested: { deep: { value: string } } }>>;

// Verify types are used (prevents dead code elimination)
declare const _verify_64: _Test1_64 & _Test2_64 & _Test3_64 & _Test4_64 & _Test5_64;
