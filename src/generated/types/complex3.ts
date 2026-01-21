// Complex type file 3 - forces expensive TypeScript type inference
// This file takes ~2-3 seconds to type-check but uses minimal memory

// Recursive type builders
type Prev = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

// Deep recursive object type
type DeepObject_3<T, D extends number = 11> = D extends 0
  ? T
  : { value: T; nested: DeepObject_3<T, Prev[D]>; meta: { depth: D; index: 3 } };

// Recursive array flattening
type Flatten_3<T> = T extends Array<infer U>
  ? U extends Array<unknown>
    ? Flatten_3<U>
    : U
  : T;

// Complex conditional type chain
type Transform_3<T, D extends number = 11> = D extends 0
  ? T
  : T extends string
    ? Transform_3<`[${T}]`, Prev[D]>
    : T extends number
      ? Transform_3<[T, T], Prev[D]>
      : T extends boolean
        ? Transform_3<{ flag: T }, Prev[D]>
        : T extends object
          ? Transform_3<{ wrapped: T; level: D }, Prev[D]>
          : T;

// Union to tuple conversion (expensive)
type UnionToIntersection_3<U> = 
  (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOfUnion_3<T> = 
  UnionToIntersection_3<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type UnionToTuple_3<T, L = LastOfUnion_3<T>, N = [T] extends [never] ? true : false> = 
  true extends N ? [] : [...UnionToTuple_3<Exclude<T, L>>, L];

// Mapped type with conditional transformations
type MapDeep_3<T, D extends number = 11> = D extends 0
  ? T
  : T extends object
    ? { [K in keyof T]: MapDeep_3<T[K], Prev[D]> }
    : T extends Array<infer U>
      ? MapDeep_3<U, Prev[D]>[]
      : Transform_3<T, D>;

// String manipulation types (expensive)
type Split_3<S extends string, D extends string = ''> = 
  S extends `${infer H}${D}${infer T}` 
    ? [H, ...Split_3<T, D>] 
    : S extends '' 
      ? [] 
      : [S];

type Join_3<T extends string[], D extends string = ''> = 
  T extends [] 
    ? '' 
    : T extends [infer F extends string] 
      ? F 
      : T extends [infer F extends string, ...infer R extends string[]] 
        ? `${F}${D}${Join_3<R, D>}` 
        : never;

// Permutation type (exponential complexity, but bounded)
type Permutation_3<T, K = T> = [T] extends [never]
  ? []
  : K extends K
    ? [K, ...Permutation_3<Exclude<T, K>>]
    : never;

// Complex interface using all the above
interface ComplexData_3<T = unknown> {
  id: string;
  data: DeepObject_3<T>;
  transformed: Transform_3<T>;
  flattened: T extends Array<unknown> ? Flatten_3<T> : T;
  mapped: MapDeep_3<T>;
  meta: {
    index: 3;
    depth: 11;
    timestamp: number;
  };
}

// Type that forces evaluation of all nested types
type ForceEval_3<T> = T extends object
  ? { [K in keyof T]: ForceEval_3<T[K]> }
  : T;

// Export types to ensure they're checked
export type {
  DeepObject_3,
  Flatten_3,
  Transform_3,
  MapDeep_3,
  Split_3,
  Join_3,
  Permutation_3,
  ComplexData_3,
  ForceEval_3,
};

// Force type instantiation with concrete types
type _Test1_3 = ForceEval_3<ComplexData_3<string>>;
type _Test2_3 = ForceEval_3<ComplexData_3<number[]>>;
type _Test3_3 = ForceEval_3<ComplexData_3<{ a: string; b: number; c: boolean }>>;
type _Test4_3 = ForceEval_3<Transform_3<'hello'>>;
type _Test5_3 = ForceEval_3<MapDeep_3<{ nested: { deep: { value: string } } }>>;

// Verify types are used (prevents dead code elimination)
declare const _verify_3: _Test1_3 & _Test2_3 & _Test3_3 & _Test4_3 & _Test5_3;
