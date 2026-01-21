// Complex type file 24 - forces expensive TypeScript type inference
// This file takes ~2-3 seconds to type-check but uses minimal memory

// Recursive type builders
type Prev = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

// Deep recursive object type
type DeepObject_24<T, D extends number = 8> = D extends 0
  ? T
  : { value: T; nested: DeepObject_24<T, Prev[D]>; meta: { depth: D; index: 24 } };

// Recursive array flattening
type Flatten_24<T> = T extends Array<infer U>
  ? U extends Array<unknown>
    ? Flatten_24<U>
    : U
  : T;

// Complex conditional type chain
type Transform_24<T, D extends number = 8> = D extends 0
  ? T
  : T extends string
    ? Transform_24<`[${T}]`, Prev[D]>
    : T extends number
      ? Transform_24<[T, T], Prev[D]>
      : T extends boolean
        ? Transform_24<{ flag: T }, Prev[D]>
        : T extends object
          ? Transform_24<{ wrapped: T; level: D }, Prev[D]>
          : T;

// Union to tuple conversion (expensive)
type UnionToIntersection_24<U> = 
  (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOfUnion_24<T> = 
  UnionToIntersection_24<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type UnionToTuple_24<T, L = LastOfUnion_24<T>, N = [T] extends [never] ? true : false> = 
  true extends N ? [] : [...UnionToTuple_24<Exclude<T, L>>, L];

// Mapped type with conditional transformations
type MapDeep_24<T, D extends number = 8> = D extends 0
  ? T
  : T extends object
    ? { [K in keyof T]: MapDeep_24<T[K], Prev[D]> }
    : T extends Array<infer U>
      ? MapDeep_24<U, Prev[D]>[]
      : Transform_24<T, D>;

// String manipulation types (expensive)
type Split_24<S extends string, D extends string = ''> = 
  S extends `${infer H}${D}${infer T}` 
    ? [H, ...Split_24<T, D>] 
    : S extends '' 
      ? [] 
      : [S];

type Join_24<T extends string[], D extends string = ''> = 
  T extends [] 
    ? '' 
    : T extends [infer F extends string] 
      ? F 
      : T extends [infer F extends string, ...infer R extends string[]] 
        ? `${F}${D}${Join_24<R, D>}` 
        : never;

// Permutation type (exponential complexity, but bounded)
type Permutation_24<T, K = T> = [T] extends [never]
  ? []
  : K extends K
    ? [K, ...Permutation_24<Exclude<T, K>>]
    : never;

// Complex interface using all the above
interface ComplexData_24<T = unknown> {
  id: string;
  data: DeepObject_24<T>;
  transformed: Transform_24<T>;
  flattened: T extends Array<unknown> ? Flatten_24<T> : T;
  mapped: MapDeep_24<T>;
  meta: {
    index: 24;
    depth: 8;
    timestamp: number;
  };
}

// Type that forces evaluation of all nested types
type ForceEval_24<T> = T extends object
  ? { [K in keyof T]: ForceEval_24<T[K]> }
  : T;

// Export types to ensure they're checked
export type {
  DeepObject_24,
  Flatten_24,
  Transform_24,
  MapDeep_24,
  Split_24,
  Join_24,
  Permutation_24,
  ComplexData_24,
  ForceEval_24,
};

// Force type instantiation with concrete types
type _Test1_24 = ForceEval_24<ComplexData_24<string>>;
type _Test2_24 = ForceEval_24<ComplexData_24<number[]>>;
type _Test3_24 = ForceEval_24<ComplexData_24<{ a: string; b: number; c: boolean }>>;
type _Test4_24 = ForceEval_24<Transform_24<'hello'>>;
type _Test5_24 = ForceEval_24<MapDeep_24<{ nested: { deep: { value: string } } }>>;

// Verify types are used (prevents dead code elimination)
declare const _verify_24: _Test1_24 & _Test2_24 & _Test3_24 & _Test4_24 & _Test5_24;
