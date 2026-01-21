// Complex type file 21 - forces expensive TypeScript type inference
// This file takes ~2-3 seconds to type-check but uses minimal memory

// Recursive type builders
type Prev = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

// Deep recursive object type
type DeepObject_21<T, D extends number = 9> = D extends 0
  ? T
  : { value: T; nested: DeepObject_21<T, Prev[D]>; meta: { depth: D; index: 21 } };

// Recursive array flattening
type Flatten_21<T> = T extends Array<infer U>
  ? U extends Array<unknown>
    ? Flatten_21<U>
    : U
  : T;

// Complex conditional type chain
type Transform_21<T, D extends number = 9> = D extends 0
  ? T
  : T extends string
    ? Transform_21<`[${T}]`, Prev[D]>
    : T extends number
      ? Transform_21<[T, T], Prev[D]>
      : T extends boolean
        ? Transform_21<{ flag: T }, Prev[D]>
        : T extends object
          ? Transform_21<{ wrapped: T; level: D }, Prev[D]>
          : T;

// Union to tuple conversion (expensive)
type UnionToIntersection_21<U> = 
  (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOfUnion_21<T> = 
  UnionToIntersection_21<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type UnionToTuple_21<T, L = LastOfUnion_21<T>, N = [T] extends [never] ? true : false> = 
  true extends N ? [] : [...UnionToTuple_21<Exclude<T, L>>, L];

// Mapped type with conditional transformations
type MapDeep_21<T, D extends number = 9> = D extends 0
  ? T
  : T extends object
    ? { [K in keyof T]: MapDeep_21<T[K], Prev[D]> }
    : T extends Array<infer U>
      ? MapDeep_21<U, Prev[D]>[]
      : Transform_21<T, D>;

// String manipulation types (expensive)
type Split_21<S extends string, D extends string = ''> = 
  S extends `${infer H}${D}${infer T}` 
    ? [H, ...Split_21<T, D>] 
    : S extends '' 
      ? [] 
      : [S];

type Join_21<T extends string[], D extends string = ''> = 
  T extends [] 
    ? '' 
    : T extends [infer F extends string] 
      ? F 
      : T extends [infer F extends string, ...infer R extends string[]] 
        ? `${F}${D}${Join_21<R, D>}` 
        : never;

// Permutation type (exponential complexity, but bounded)
type Permutation_21<T, K = T> = [T] extends [never]
  ? []
  : K extends K
    ? [K, ...Permutation_21<Exclude<T, K>>]
    : never;

// Complex interface using all the above
interface ComplexData_21<T = unknown> {
  id: string;
  data: DeepObject_21<T>;
  transformed: Transform_21<T>;
  flattened: T extends Array<unknown> ? Flatten_21<T> : T;
  mapped: MapDeep_21<T>;
  meta: {
    index: 21;
    depth: 9;
    timestamp: number;
  };
}

// Type that forces evaluation of all nested types
type ForceEval_21<T> = T extends object
  ? { [K in keyof T]: ForceEval_21<T[K]> }
  : T;

// Export types to ensure they're checked
export type {
  DeepObject_21,
  Flatten_21,
  Transform_21,
  MapDeep_21,
  Split_21,
  Join_21,
  Permutation_21,
  ComplexData_21,
  ForceEval_21,
};

// Force type instantiation with concrete types
type _Test1_21 = ForceEval_21<ComplexData_21<string>>;
type _Test2_21 = ForceEval_21<ComplexData_21<number[]>>;
type _Test3_21 = ForceEval_21<ComplexData_21<{ a: string; b: number; c: boolean }>>;
type _Test4_21 = ForceEval_21<Transform_21<'hello'>>;
type _Test5_21 = ForceEval_21<MapDeep_21<{ nested: { deep: { value: string } } }>>;

// Verify types are used (prevents dead code elimination)
declare const _verify_21: _Test1_21 & _Test2_21 & _Test3_21 & _Test4_21 & _Test5_21;
