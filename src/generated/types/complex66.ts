// Complex type file 66 - forces expensive TypeScript type inference
// This file takes ~2-3 seconds to type-check but uses minimal memory

// Recursive type builders
type Prev = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

// Deep recursive object type
type DeepObject_66<T, D extends number = 10> = D extends 0
  ? T
  : { value: T; nested: DeepObject_66<T, Prev[D]>; meta: { depth: D; index: 66 } };

// Recursive array flattening
type Flatten_66<T> = T extends Array<infer U>
  ? U extends Array<unknown>
    ? Flatten_66<U>
    : U
  : T;

// Complex conditional type chain
type Transform_66<T, D extends number = 10> = D extends 0
  ? T
  : T extends string
    ? Transform_66<`[${T}]`, Prev[D]>
    : T extends number
      ? Transform_66<[T, T], Prev[D]>
      : T extends boolean
        ? Transform_66<{ flag: T }, Prev[D]>
        : T extends object
          ? Transform_66<{ wrapped: T; level: D }, Prev[D]>
          : T;

// Union to tuple conversion (expensive)
type UnionToIntersection_66<U> = 
  (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOfUnion_66<T> = 
  UnionToIntersection_66<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type UnionToTuple_66<T, L = LastOfUnion_66<T>, N = [T] extends [never] ? true : false> = 
  true extends N ? [] : [...UnionToTuple_66<Exclude<T, L>>, L];

// Mapped type with conditional transformations
type MapDeep_66<T, D extends number = 10> = D extends 0
  ? T
  : T extends object
    ? { [K in keyof T]: MapDeep_66<T[K], Prev[D]> }
    : T extends Array<infer U>
      ? MapDeep_66<U, Prev[D]>[]
      : Transform_66<T, D>;

// String manipulation types (expensive)
type Split_66<S extends string, D extends string = ''> = 
  S extends `${infer H}${D}${infer T}` 
    ? [H, ...Split_66<T, D>] 
    : S extends '' 
      ? [] 
      : [S];

type Join_66<T extends string[], D extends string = ''> = 
  T extends [] 
    ? '' 
    : T extends [infer F extends string] 
      ? F 
      : T extends [infer F extends string, ...infer R extends string[]] 
        ? `${F}${D}${Join_66<R, D>}` 
        : never;

// Permutation type (exponential complexity, but bounded)
type Permutation_66<T, K = T> = [T] extends [never]
  ? []
  : K extends K
    ? [K, ...Permutation_66<Exclude<T, K>>]
    : never;

// Complex interface using all the above
interface ComplexData_66<T = unknown> {
  id: string;
  data: DeepObject_66<T>;
  transformed: Transform_66<T>;
  flattened: T extends Array<unknown> ? Flatten_66<T> : T;
  mapped: MapDeep_66<T>;
  meta: {
    index: 66;
    depth: 10;
    timestamp: number;
  };
}

// Type that forces evaluation of all nested types
type ForceEval_66<T> = T extends object
  ? { [K in keyof T]: ForceEval_66<T[K]> }
  : T;

// Export types to ensure they're checked
export type {
  DeepObject_66,
  Flatten_66,
  Transform_66,
  MapDeep_66,
  Split_66,
  Join_66,
  Permutation_66,
  ComplexData_66,
  ForceEval_66,
};

// Force type instantiation with concrete types
type _Test1_66 = ForceEval_66<ComplexData_66<string>>;
type _Test2_66 = ForceEval_66<ComplexData_66<number[]>>;
type _Test3_66 = ForceEval_66<ComplexData_66<{ a: string; b: number; c: boolean }>>;
type _Test4_66 = ForceEval_66<Transform_66<'hello'>>;
type _Test5_66 = ForceEval_66<MapDeep_66<{ nested: { deep: { value: string } } }>>;

// Verify types are used (prevents dead code elimination)
declare const _verify_66: _Test1_66 & _Test2_66 & _Test3_66 & _Test4_66 & _Test5_66;
