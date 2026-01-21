// Complex type file 22 - forces expensive TypeScript type inference
// This file takes ~2-3 seconds to type-check but uses minimal memory

// Recursive type builders
type Prev = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

// Deep recursive object type
type DeepObject_22<T, D extends number = 10> = D extends 0
  ? T
  : { value: T; nested: DeepObject_22<T, Prev[D]>; meta: { depth: D; index: 22 } };

// Recursive array flattening
type Flatten_22<T> = T extends Array<infer U>
  ? U extends Array<unknown>
    ? Flatten_22<U>
    : U
  : T;

// Complex conditional type chain
type Transform_22<T, D extends number = 10> = D extends 0
  ? T
  : T extends string
    ? Transform_22<`[${T}]`, Prev[D]>
    : T extends number
      ? Transform_22<[T, T], Prev[D]>
      : T extends boolean
        ? Transform_22<{ flag: T }, Prev[D]>
        : T extends object
          ? Transform_22<{ wrapped: T; level: D }, Prev[D]>
          : T;

// Union to tuple conversion (expensive)
type UnionToIntersection_22<U> = 
  (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOfUnion_22<T> = 
  UnionToIntersection_22<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type UnionToTuple_22<T, L = LastOfUnion_22<T>, N = [T] extends [never] ? true : false> = 
  true extends N ? [] : [...UnionToTuple_22<Exclude<T, L>>, L];

// Mapped type with conditional transformations
type MapDeep_22<T, D extends number = 10> = D extends 0
  ? T
  : T extends object
    ? { [K in keyof T]: MapDeep_22<T[K], Prev[D]> }
    : T extends Array<infer U>
      ? MapDeep_22<U, Prev[D]>[]
      : Transform_22<T, D>;

// String manipulation types (expensive)
type Split_22<S extends string, D extends string = ''> = 
  S extends `${infer H}${D}${infer T}` 
    ? [H, ...Split_22<T, D>] 
    : S extends '' 
      ? [] 
      : [S];

type Join_22<T extends string[], D extends string = ''> = 
  T extends [] 
    ? '' 
    : T extends [infer F extends string] 
      ? F 
      : T extends [infer F extends string, ...infer R extends string[]] 
        ? `${F}${D}${Join_22<R, D>}` 
        : never;

// Permutation type (exponential complexity, but bounded)
type Permutation_22<T, K = T> = [T] extends [never]
  ? []
  : K extends K
    ? [K, ...Permutation_22<Exclude<T, K>>]
    : never;

// Complex interface using all the above
interface ComplexData_22<T = unknown> {
  id: string;
  data: DeepObject_22<T>;
  transformed: Transform_22<T>;
  flattened: T extends Array<unknown> ? Flatten_22<T> : T;
  mapped: MapDeep_22<T>;
  meta: {
    index: 22;
    depth: 10;
    timestamp: number;
  };
}

// Type that forces evaluation of all nested types
type ForceEval_22<T> = T extends object
  ? { [K in keyof T]: ForceEval_22<T[K]> }
  : T;

// Export types to ensure they're checked
export type {
  DeepObject_22,
  Flatten_22,
  Transform_22,
  MapDeep_22,
  Split_22,
  Join_22,
  Permutation_22,
  ComplexData_22,
  ForceEval_22,
};

// Force type instantiation with concrete types
type _Test1_22 = ForceEval_22<ComplexData_22<string>>;
type _Test2_22 = ForceEval_22<ComplexData_22<number[]>>;
type _Test3_22 = ForceEval_22<ComplexData_22<{ a: string; b: number; c: boolean }>>;
type _Test4_22 = ForceEval_22<Transform_22<'hello'>>;
type _Test5_22 = ForceEval_22<MapDeep_22<{ nested: { deep: { value: string } } }>>;

// Verify types are used (prevents dead code elimination)
declare const _verify_22: _Test1_22 & _Test2_22 & _Test3_22 & _Test4_22 & _Test5_22;
