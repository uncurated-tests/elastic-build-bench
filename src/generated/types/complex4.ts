// Complex type file 4 - forces expensive TypeScript type inference
// This file takes ~2-3 seconds to type-check but uses minimal memory

// Recursive type builders
type Prev = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

// Deep recursive object type
type DeepObject_4<T, D extends number = 8> = D extends 0
  ? T
  : { value: T; nested: DeepObject_4<T, Prev[D]>; meta: { depth: D; index: 4 } };

// Recursive array flattening
type Flatten_4<T> = T extends Array<infer U>
  ? U extends Array<unknown>
    ? Flatten_4<U>
    : U
  : T;

// Complex conditional type chain
type Transform_4<T, D extends number = 8> = D extends 0
  ? T
  : T extends string
    ? Transform_4<`[${T}]`, Prev[D]>
    : T extends number
      ? Transform_4<[T, T], Prev[D]>
      : T extends boolean
        ? Transform_4<{ flag: T }, Prev[D]>
        : T extends object
          ? Transform_4<{ wrapped: T; level: D }, Prev[D]>
          : T;

// Union to tuple conversion (expensive)
type UnionToIntersection_4<U> = 
  (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOfUnion_4<T> = 
  UnionToIntersection_4<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type UnionToTuple_4<T, L = LastOfUnion_4<T>, N = [T] extends [never] ? true : false> = 
  true extends N ? [] : [...UnionToTuple_4<Exclude<T, L>>, L];

// Mapped type with conditional transformations
type MapDeep_4<T, D extends number = 8> = D extends 0
  ? T
  : T extends object
    ? { [K in keyof T]: MapDeep_4<T[K], Prev[D]> }
    : T extends Array<infer U>
      ? MapDeep_4<U, Prev[D]>[]
      : Transform_4<T, D>;

// String manipulation types (expensive)
type Split_4<S extends string, D extends string = ''> = 
  S extends `${infer H}${D}${infer T}` 
    ? [H, ...Split_4<T, D>] 
    : S extends '' 
      ? [] 
      : [S];

type Join_4<T extends string[], D extends string = ''> = 
  T extends [] 
    ? '' 
    : T extends [infer F extends string] 
      ? F 
      : T extends [infer F extends string, ...infer R extends string[]] 
        ? `${F}${D}${Join_4<R, D>}` 
        : never;

// Permutation type (exponential complexity, but bounded)
type Permutation_4<T, K = T> = [T] extends [never]
  ? []
  : K extends K
    ? [K, ...Permutation_4<Exclude<T, K>>]
    : never;

// Complex interface using all the above
interface ComplexData_4<T = unknown> {
  id: string;
  data: DeepObject_4<T>;
  transformed: Transform_4<T>;
  flattened: T extends Array<unknown> ? Flatten_4<T> : T;
  mapped: MapDeep_4<T>;
  meta: {
    index: 4;
    depth: 8;
    timestamp: number;
  };
}

// Type that forces evaluation of all nested types
type ForceEval_4<T> = T extends object
  ? { [K in keyof T]: ForceEval_4<T[K]> }
  : T;

// Export types to ensure they're checked
export type {
  DeepObject_4,
  Flatten_4,
  Transform_4,
  MapDeep_4,
  Split_4,
  Join_4,
  Permutation_4,
  ComplexData_4,
  ForceEval_4,
};

// Force type instantiation with concrete types
type _Test1_4 = ForceEval_4<ComplexData_4<string>>;
type _Test2_4 = ForceEval_4<ComplexData_4<number[]>>;
type _Test3_4 = ForceEval_4<ComplexData_4<{ a: string; b: number; c: boolean }>>;
type _Test4_4 = ForceEval_4<Transform_4<'hello'>>;
type _Test5_4 = ForceEval_4<MapDeep_4<{ nested: { deep: { value: string } } }>>;

// Verify types are used (prevents dead code elimination)
declare const _verify_4: _Test1_4 & _Test2_4 & _Test3_4 & _Test4_4 & _Test5_4;
