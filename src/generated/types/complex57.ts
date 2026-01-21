// Complex type file 57 - forces expensive TypeScript type inference
// This file takes ~2-3 seconds to type-check but uses minimal memory

// Recursive type builders
type Prev = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

// Deep recursive object type
type DeepObject_57<T, D extends number = 9> = D extends 0
  ? T
  : { value: T; nested: DeepObject_57<T, Prev[D]>; meta: { depth: D; index: 57 } };

// Recursive array flattening
type Flatten_57<T> = T extends Array<infer U>
  ? U extends Array<unknown>
    ? Flatten_57<U>
    : U
  : T;

// Complex conditional type chain
type Transform_57<T, D extends number = 9> = D extends 0
  ? T
  : T extends string
    ? Transform_57<`[${T}]`, Prev[D]>
    : T extends number
      ? Transform_57<[T, T], Prev[D]>
      : T extends boolean
        ? Transform_57<{ flag: T }, Prev[D]>
        : T extends object
          ? Transform_57<{ wrapped: T; level: D }, Prev[D]>
          : T;

// Union to tuple conversion (expensive)
type UnionToIntersection_57<U> = 
  (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOfUnion_57<T> = 
  UnionToIntersection_57<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type UnionToTuple_57<T, L = LastOfUnion_57<T>, N = [T] extends [never] ? true : false> = 
  true extends N ? [] : [...UnionToTuple_57<Exclude<T, L>>, L];

// Mapped type with conditional transformations
type MapDeep_57<T, D extends number = 9> = D extends 0
  ? T
  : T extends object
    ? { [K in keyof T]: MapDeep_57<T[K], Prev[D]> }
    : T extends Array<infer U>
      ? MapDeep_57<U, Prev[D]>[]
      : Transform_57<T, D>;

// String manipulation types (expensive)
type Split_57<S extends string, D extends string = ''> = 
  S extends `${infer H}${D}${infer T}` 
    ? [H, ...Split_57<T, D>] 
    : S extends '' 
      ? [] 
      : [S];

type Join_57<T extends string[], D extends string = ''> = 
  T extends [] 
    ? '' 
    : T extends [infer F extends string] 
      ? F 
      : T extends [infer F extends string, ...infer R extends string[]] 
        ? `${F}${D}${Join_57<R, D>}` 
        : never;

// Permutation type (exponential complexity, but bounded)
type Permutation_57<T, K = T> = [T] extends [never]
  ? []
  : K extends K
    ? [K, ...Permutation_57<Exclude<T, K>>]
    : never;

// Complex interface using all the above
interface ComplexData_57<T = unknown> {
  id: string;
  data: DeepObject_57<T>;
  transformed: Transform_57<T>;
  flattened: T extends Array<unknown> ? Flatten_57<T> : T;
  mapped: MapDeep_57<T>;
  meta: {
    index: 57;
    depth: 9;
    timestamp: number;
  };
}

// Type that forces evaluation of all nested types
type ForceEval_57<T> = T extends object
  ? { [K in keyof T]: ForceEval_57<T[K]> }
  : T;

// Export types to ensure they're checked
export type {
  DeepObject_57,
  Flatten_57,
  Transform_57,
  MapDeep_57,
  Split_57,
  Join_57,
  Permutation_57,
  ComplexData_57,
  ForceEval_57,
};

// Force type instantiation with concrete types
type _Test1_57 = ForceEval_57<ComplexData_57<string>>;
type _Test2_57 = ForceEval_57<ComplexData_57<number[]>>;
type _Test3_57 = ForceEval_57<ComplexData_57<{ a: string; b: number; c: boolean }>>;
type _Test4_57 = ForceEval_57<Transform_57<'hello'>>;
type _Test5_57 = ForceEval_57<MapDeep_57<{ nested: { deep: { value: string } } }>>;

// Verify types are used (prevents dead code elimination)
declare const _verify_57: _Test1_57 & _Test2_57 & _Test3_57 & _Test4_57 & _Test5_57;
