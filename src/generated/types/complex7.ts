// Complex type file 7 - forces expensive TypeScript type inference
// This file takes ~2-3 seconds to type-check but uses minimal memory

// Recursive type builders
type Prev = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

// Deep recursive object type
type DeepObject_7<T, D extends number = 11> = D extends 0
  ? T
  : { value: T; nested: DeepObject_7<T, Prev[D]>; meta: { depth: D; index: 7 } };

// Recursive array flattening
type Flatten_7<T> = T extends Array<infer U>
  ? U extends Array<unknown>
    ? Flatten_7<U>
    : U
  : T;

// Complex conditional type chain
type Transform_7<T, D extends number = 11> = D extends 0
  ? T
  : T extends string
    ? Transform_7<`[${T}]`, Prev[D]>
    : T extends number
      ? Transform_7<[T, T], Prev[D]>
      : T extends boolean
        ? Transform_7<{ flag: T }, Prev[D]>
        : T extends object
          ? Transform_7<{ wrapped: T; level: D }, Prev[D]>
          : T;

// Union to tuple conversion (expensive)
type UnionToIntersection_7<U> = 
  (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOfUnion_7<T> = 
  UnionToIntersection_7<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type UnionToTuple_7<T, L = LastOfUnion_7<T>, N = [T] extends [never] ? true : false> = 
  true extends N ? [] : [...UnionToTuple_7<Exclude<T, L>>, L];

// Mapped type with conditional transformations
type MapDeep_7<T, D extends number = 11> = D extends 0
  ? T
  : T extends object
    ? { [K in keyof T]: MapDeep_7<T[K], Prev[D]> }
    : T extends Array<infer U>
      ? MapDeep_7<U, Prev[D]>[]
      : Transform_7<T, D>;

// String manipulation types (expensive)
type Split_7<S extends string, D extends string = ''> = 
  S extends `${infer H}${D}${infer T}` 
    ? [H, ...Split_7<T, D>] 
    : S extends '' 
      ? [] 
      : [S];

type Join_7<T extends string[], D extends string = ''> = 
  T extends [] 
    ? '' 
    : T extends [infer F extends string] 
      ? F 
      : T extends [infer F extends string, ...infer R extends string[]] 
        ? `${F}${D}${Join_7<R, D>}` 
        : never;

// Permutation type (exponential complexity, but bounded)
type Permutation_7<T, K = T> = [T] extends [never]
  ? []
  : K extends K
    ? [K, ...Permutation_7<Exclude<T, K>>]
    : never;

// Complex interface using all the above
interface ComplexData_7<T = unknown> {
  id: string;
  data: DeepObject_7<T>;
  transformed: Transform_7<T>;
  flattened: T extends Array<unknown> ? Flatten_7<T> : T;
  mapped: MapDeep_7<T>;
  meta: {
    index: 7;
    depth: 11;
    timestamp: number;
  };
}

// Type that forces evaluation of all nested types
type ForceEval_7<T> = T extends object
  ? { [K in keyof T]: ForceEval_7<T[K]> }
  : T;

// Export types to ensure they're checked
export type {
  DeepObject_7,
  Flatten_7,
  Transform_7,
  MapDeep_7,
  Split_7,
  Join_7,
  Permutation_7,
  ComplexData_7,
  ForceEval_7,
};

// Force type instantiation with concrete types
type _Test1_7 = ForceEval_7<ComplexData_7<string>>;
type _Test2_7 = ForceEval_7<ComplexData_7<number[]>>;
type _Test3_7 = ForceEval_7<ComplexData_7<{ a: string; b: number; c: boolean }>>;
type _Test4_7 = ForceEval_7<Transform_7<'hello'>>;
type _Test5_7 = ForceEval_7<MapDeep_7<{ nested: { deep: { value: string } } }>>;

// Verify types are used (prevents dead code elimination)
declare const _verify_7: _Test1_7 & _Test2_7 & _Test3_7 & _Test4_7 & _Test5_7;
