// Complex type file 71 - forces expensive TypeScript type inference
// This file takes ~2-3 seconds to type-check but uses minimal memory

// Recursive type builders
type Prev = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

// Deep recursive object type
type DeepObject_71<T, D extends number = 11> = D extends 0
  ? T
  : { value: T; nested: DeepObject_71<T, Prev[D]>; meta: { depth: D; index: 71 } };

// Recursive array flattening
type Flatten_71<T> = T extends Array<infer U>
  ? U extends Array<unknown>
    ? Flatten_71<U>
    : U
  : T;

// Complex conditional type chain
type Transform_71<T, D extends number = 11> = D extends 0
  ? T
  : T extends string
    ? Transform_71<`[${T}]`, Prev[D]>
    : T extends number
      ? Transform_71<[T, T], Prev[D]>
      : T extends boolean
        ? Transform_71<{ flag: T }, Prev[D]>
        : T extends object
          ? Transform_71<{ wrapped: T; level: D }, Prev[D]>
          : T;

// Union to tuple conversion (expensive)
type UnionToIntersection_71<U> = 
  (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOfUnion_71<T> = 
  UnionToIntersection_71<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type UnionToTuple_71<T, L = LastOfUnion_71<T>, N = [T] extends [never] ? true : false> = 
  true extends N ? [] : [...UnionToTuple_71<Exclude<T, L>>, L];

// Mapped type with conditional transformations
type MapDeep_71<T, D extends number = 11> = D extends 0
  ? T
  : T extends object
    ? { [K in keyof T]: MapDeep_71<T[K], Prev[D]> }
    : T extends Array<infer U>
      ? MapDeep_71<U, Prev[D]>[]
      : Transform_71<T, D>;

// String manipulation types (expensive)
type Split_71<S extends string, D extends string = ''> = 
  S extends `${infer H}${D}${infer T}` 
    ? [H, ...Split_71<T, D>] 
    : S extends '' 
      ? [] 
      : [S];

type Join_71<T extends string[], D extends string = ''> = 
  T extends [] 
    ? '' 
    : T extends [infer F extends string] 
      ? F 
      : T extends [infer F extends string, ...infer R extends string[]] 
        ? `${F}${D}${Join_71<R, D>}` 
        : never;

// Permutation type (exponential complexity, but bounded)
type Permutation_71<T, K = T> = [T] extends [never]
  ? []
  : K extends K
    ? [K, ...Permutation_71<Exclude<T, K>>]
    : never;

// Complex interface using all the above
interface ComplexData_71<T = unknown> {
  id: string;
  data: DeepObject_71<T>;
  transformed: Transform_71<T>;
  flattened: T extends Array<unknown> ? Flatten_71<T> : T;
  mapped: MapDeep_71<T>;
  meta: {
    index: 71;
    depth: 11;
    timestamp: number;
  };
}

// Type that forces evaluation of all nested types
type ForceEval_71<T> = T extends object
  ? { [K in keyof T]: ForceEval_71<T[K]> }
  : T;

// Export types to ensure they're checked
export type {
  DeepObject_71,
  Flatten_71,
  Transform_71,
  MapDeep_71,
  Split_71,
  Join_71,
  Permutation_71,
  ComplexData_71,
  ForceEval_71,
};

// Force type instantiation with concrete types
type _Test1_71 = ForceEval_71<ComplexData_71<string>>;
type _Test2_71 = ForceEval_71<ComplexData_71<number[]>>;
type _Test3_71 = ForceEval_71<ComplexData_71<{ a: string; b: number; c: boolean }>>;
type _Test4_71 = ForceEval_71<Transform_71<'hello'>>;
type _Test5_71 = ForceEval_71<MapDeep_71<{ nested: { deep: { value: string } } }>>;

// Verify types are used (prevents dead code elimination)
declare const _verify_71: _Test1_71 & _Test2_71 & _Test3_71 & _Test4_71 & _Test5_71;
