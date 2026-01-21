// Complex type file 15 - forces expensive TypeScript type inference
// This file takes ~2-3 seconds to type-check but uses minimal memory

// Recursive type builders
type Prev = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

// Deep recursive object type
type DeepObject_15<T, D extends number = 11> = D extends 0
  ? T
  : { value: T; nested: DeepObject_15<T, Prev[D]>; meta: { depth: D; index: 15 } };

// Recursive array flattening
type Flatten_15<T> = T extends Array<infer U>
  ? U extends Array<unknown>
    ? Flatten_15<U>
    : U
  : T;

// Complex conditional type chain
type Transform_15<T, D extends number = 11> = D extends 0
  ? T
  : T extends string
    ? Transform_15<`[${T}]`, Prev[D]>
    : T extends number
      ? Transform_15<[T, T], Prev[D]>
      : T extends boolean
        ? Transform_15<{ flag: T }, Prev[D]>
        : T extends object
          ? Transform_15<{ wrapped: T; level: D }, Prev[D]>
          : T;

// Union to tuple conversion (expensive)
type UnionToIntersection_15<U> = 
  (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOfUnion_15<T> = 
  UnionToIntersection_15<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type UnionToTuple_15<T, L = LastOfUnion_15<T>, N = [T] extends [never] ? true : false> = 
  true extends N ? [] : [...UnionToTuple_15<Exclude<T, L>>, L];

// Mapped type with conditional transformations
type MapDeep_15<T, D extends number = 11> = D extends 0
  ? T
  : T extends object
    ? { [K in keyof T]: MapDeep_15<T[K], Prev[D]> }
    : T extends Array<infer U>
      ? MapDeep_15<U, Prev[D]>[]
      : Transform_15<T, D>;

// String manipulation types (expensive)
type Split_15<S extends string, D extends string = ''> = 
  S extends `${infer H}${D}${infer T}` 
    ? [H, ...Split_15<T, D>] 
    : S extends '' 
      ? [] 
      : [S];

type Join_15<T extends string[], D extends string = ''> = 
  T extends [] 
    ? '' 
    : T extends [infer F extends string] 
      ? F 
      : T extends [infer F extends string, ...infer R extends string[]] 
        ? `${F}${D}${Join_15<R, D>}` 
        : never;

// Permutation type (exponential complexity, but bounded)
type Permutation_15<T, K = T> = [T] extends [never]
  ? []
  : K extends K
    ? [K, ...Permutation_15<Exclude<T, K>>]
    : never;

// Complex interface using all the above
interface ComplexData_15<T = unknown> {
  id: string;
  data: DeepObject_15<T>;
  transformed: Transform_15<T>;
  flattened: T extends Array<unknown> ? Flatten_15<T> : T;
  mapped: MapDeep_15<T>;
  meta: {
    index: 15;
    depth: 11;
    timestamp: number;
  };
}

// Type that forces evaluation of all nested types
type ForceEval_15<T> = T extends object
  ? { [K in keyof T]: ForceEval_15<T[K]> }
  : T;

// Export types to ensure they're checked
export type {
  DeepObject_15,
  Flatten_15,
  Transform_15,
  MapDeep_15,
  Split_15,
  Join_15,
  Permutation_15,
  ComplexData_15,
  ForceEval_15,
};

// Force type instantiation with concrete types
type _Test1_15 = ForceEval_15<ComplexData_15<string>>;
type _Test2_15 = ForceEval_15<ComplexData_15<number[]>>;
type _Test3_15 = ForceEval_15<ComplexData_15<{ a: string; b: number; c: boolean }>>;
type _Test4_15 = ForceEval_15<Transform_15<'hello'>>;
type _Test5_15 = ForceEval_15<MapDeep_15<{ nested: { deep: { value: string } } }>>;

// Verify types are used (prevents dead code elimination)
declare const _verify_15: _Test1_15 & _Test2_15 & _Test3_15 & _Test4_15 & _Test5_15;
