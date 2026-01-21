// Complex type file 17 - forces expensive TypeScript type inference
// This file takes ~2-3 seconds to type-check but uses minimal memory

// Recursive type builders
type Prev = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

// Deep recursive object type
type DeepObject_17<T, D extends number = 9> = D extends 0
  ? T
  : { value: T; nested: DeepObject_17<T, Prev[D]>; meta: { depth: D; index: 17 } };

// Recursive array flattening
type Flatten_17<T> = T extends Array<infer U>
  ? U extends Array<unknown>
    ? Flatten_17<U>
    : U
  : T;

// Complex conditional type chain
type Transform_17<T, D extends number = 9> = D extends 0
  ? T
  : T extends string
    ? Transform_17<`[${T}]`, Prev[D]>
    : T extends number
      ? Transform_17<[T, T], Prev[D]>
      : T extends boolean
        ? Transform_17<{ flag: T }, Prev[D]>
        : T extends object
          ? Transform_17<{ wrapped: T; level: D }, Prev[D]>
          : T;

// Union to tuple conversion (expensive)
type UnionToIntersection_17<U> = 
  (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOfUnion_17<T> = 
  UnionToIntersection_17<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type UnionToTuple_17<T, L = LastOfUnion_17<T>, N = [T] extends [never] ? true : false> = 
  true extends N ? [] : [...UnionToTuple_17<Exclude<T, L>>, L];

// Mapped type with conditional transformations
type MapDeep_17<T, D extends number = 9> = D extends 0
  ? T
  : T extends object
    ? { [K in keyof T]: MapDeep_17<T[K], Prev[D]> }
    : T extends Array<infer U>
      ? MapDeep_17<U, Prev[D]>[]
      : Transform_17<T, D>;

// String manipulation types (expensive)
type Split_17<S extends string, D extends string = ''> = 
  S extends `${infer H}${D}${infer T}` 
    ? [H, ...Split_17<T, D>] 
    : S extends '' 
      ? [] 
      : [S];

type Join_17<T extends string[], D extends string = ''> = 
  T extends [] 
    ? '' 
    : T extends [infer F extends string] 
      ? F 
      : T extends [infer F extends string, ...infer R extends string[]] 
        ? `${F}${D}${Join_17<R, D>}` 
        : never;

// Permutation type (exponential complexity, but bounded)
type Permutation_17<T, K = T> = [T] extends [never]
  ? []
  : K extends K
    ? [K, ...Permutation_17<Exclude<T, K>>]
    : never;

// Complex interface using all the above
interface ComplexData_17<T = unknown> {
  id: string;
  data: DeepObject_17<T>;
  transformed: Transform_17<T>;
  flattened: T extends Array<unknown> ? Flatten_17<T> : T;
  mapped: MapDeep_17<T>;
  meta: {
    index: 17;
    depth: 9;
    timestamp: number;
  };
}

// Type that forces evaluation of all nested types
type ForceEval_17<T> = T extends object
  ? { [K in keyof T]: ForceEval_17<T[K]> }
  : T;

// Export types to ensure they're checked
export type {
  DeepObject_17,
  Flatten_17,
  Transform_17,
  MapDeep_17,
  Split_17,
  Join_17,
  Permutation_17,
  ComplexData_17,
  ForceEval_17,
};

// Force type instantiation with concrete types
type _Test1_17 = ForceEval_17<ComplexData_17<string>>;
type _Test2_17 = ForceEval_17<ComplexData_17<number[]>>;
type _Test3_17 = ForceEval_17<ComplexData_17<{ a: string; b: number; c: boolean }>>;
type _Test4_17 = ForceEval_17<Transform_17<'hello'>>;
type _Test5_17 = ForceEval_17<MapDeep_17<{ nested: { deep: { value: string } } }>>;

// Verify types are used (prevents dead code elimination)
declare const _verify_17: _Test1_17 & _Test2_17 & _Test3_17 & _Test4_17 & _Test5_17;
