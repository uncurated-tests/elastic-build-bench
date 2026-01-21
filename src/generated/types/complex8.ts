// Complex type file 8 - forces expensive TypeScript type inference
// This file takes ~2-3 seconds to type-check but uses minimal memory

// Recursive type builders
type Prev = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

// Deep recursive object type
type DeepObject_8<T, D extends number = 8> = D extends 0
  ? T
  : { value: T; nested: DeepObject_8<T, Prev[D]>; meta: { depth: D; index: 8 } };

// Recursive array flattening
type Flatten_8<T> = T extends Array<infer U>
  ? U extends Array<unknown>
    ? Flatten_8<U>
    : U
  : T;

// Complex conditional type chain
type Transform_8<T, D extends number = 8> = D extends 0
  ? T
  : T extends string
    ? Transform_8<`[${T}]`, Prev[D]>
    : T extends number
      ? Transform_8<[T, T], Prev[D]>
      : T extends boolean
        ? Transform_8<{ flag: T }, Prev[D]>
        : T extends object
          ? Transform_8<{ wrapped: T; level: D }, Prev[D]>
          : T;

// Union to tuple conversion (expensive)
type UnionToIntersection_8<U> = 
  (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOfUnion_8<T> = 
  UnionToIntersection_8<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type UnionToTuple_8<T, L = LastOfUnion_8<T>, N = [T] extends [never] ? true : false> = 
  true extends N ? [] : [...UnionToTuple_8<Exclude<T, L>>, L];

// Mapped type with conditional transformations
type MapDeep_8<T, D extends number = 8> = D extends 0
  ? T
  : T extends object
    ? { [K in keyof T]: MapDeep_8<T[K], Prev[D]> }
    : T extends Array<infer U>
      ? MapDeep_8<U, Prev[D]>[]
      : Transform_8<T, D>;

// String manipulation types (expensive)
type Split_8<S extends string, D extends string = ''> = 
  S extends `${infer H}${D}${infer T}` 
    ? [H, ...Split_8<T, D>] 
    : S extends '' 
      ? [] 
      : [S];

type Join_8<T extends string[], D extends string = ''> = 
  T extends [] 
    ? '' 
    : T extends [infer F extends string] 
      ? F 
      : T extends [infer F extends string, ...infer R extends string[]] 
        ? `${F}${D}${Join_8<R, D>}` 
        : never;

// Permutation type (exponential complexity, but bounded)
type Permutation_8<T, K = T> = [T] extends [never]
  ? []
  : K extends K
    ? [K, ...Permutation_8<Exclude<T, K>>]
    : never;

// Complex interface using all the above
interface ComplexData_8<T = unknown> {
  id: string;
  data: DeepObject_8<T>;
  transformed: Transform_8<T>;
  flattened: T extends Array<unknown> ? Flatten_8<T> : T;
  mapped: MapDeep_8<T>;
  meta: {
    index: 8;
    depth: 8;
    timestamp: number;
  };
}

// Type that forces evaluation of all nested types
type ForceEval_8<T> = T extends object
  ? { [K in keyof T]: ForceEval_8<T[K]> }
  : T;

// Export types to ensure they're checked
export type {
  DeepObject_8,
  Flatten_8,
  Transform_8,
  MapDeep_8,
  Split_8,
  Join_8,
  Permutation_8,
  ComplexData_8,
  ForceEval_8,
};

// Force type instantiation with concrete types
type _Test1_8 = ForceEval_8<ComplexData_8<string>>;
type _Test2_8 = ForceEval_8<ComplexData_8<number[]>>;
type _Test3_8 = ForceEval_8<ComplexData_8<{ a: string; b: number; c: boolean }>>;
type _Test4_8 = ForceEval_8<Transform_8<'hello'>>;
type _Test5_8 = ForceEval_8<MapDeep_8<{ nested: { deep: { value: string } } }>>;

// Verify types are used (prevents dead code elimination)
declare const _verify_8: _Test1_8 & _Test2_8 & _Test3_8 & _Test4_8 & _Test5_8;
