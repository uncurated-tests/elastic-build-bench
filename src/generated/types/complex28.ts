// Complex type file 28 - forces expensive TypeScript type inference
// This file takes ~2-3 seconds to type-check but uses minimal memory

// Recursive type builders
type Prev = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

// Deep recursive object type
type DeepObject_28<T, D extends number = 8> = D extends 0
  ? T
  : { value: T; nested: DeepObject_28<T, Prev[D]>; meta: { depth: D; index: 28 } };

// Recursive array flattening
type Flatten_28<T> = T extends Array<infer U>
  ? U extends Array<unknown>
    ? Flatten_28<U>
    : U
  : T;

// Complex conditional type chain
type Transform_28<T, D extends number = 8> = D extends 0
  ? T
  : T extends string
    ? Transform_28<`[${T}]`, Prev[D]>
    : T extends number
      ? Transform_28<[T, T], Prev[D]>
      : T extends boolean
        ? Transform_28<{ flag: T }, Prev[D]>
        : T extends object
          ? Transform_28<{ wrapped: T; level: D }, Prev[D]>
          : T;

// Union to tuple conversion (expensive)
type UnionToIntersection_28<U> = 
  (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOfUnion_28<T> = 
  UnionToIntersection_28<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type UnionToTuple_28<T, L = LastOfUnion_28<T>, N = [T] extends [never] ? true : false> = 
  true extends N ? [] : [...UnionToTuple_28<Exclude<T, L>>, L];

// Mapped type with conditional transformations
type MapDeep_28<T, D extends number = 8> = D extends 0
  ? T
  : T extends object
    ? { [K in keyof T]: MapDeep_28<T[K], Prev[D]> }
    : T extends Array<infer U>
      ? MapDeep_28<U, Prev[D]>[]
      : Transform_28<T, D>;

// String manipulation types (expensive)
type Split_28<S extends string, D extends string = ''> = 
  S extends `${infer H}${D}${infer T}` 
    ? [H, ...Split_28<T, D>] 
    : S extends '' 
      ? [] 
      : [S];

type Join_28<T extends string[], D extends string = ''> = 
  T extends [] 
    ? '' 
    : T extends [infer F extends string] 
      ? F 
      : T extends [infer F extends string, ...infer R extends string[]] 
        ? `${F}${D}${Join_28<R, D>}` 
        : never;

// Permutation type (exponential complexity, but bounded)
type Permutation_28<T, K = T> = [T] extends [never]
  ? []
  : K extends K
    ? [K, ...Permutation_28<Exclude<T, K>>]
    : never;

// Complex interface using all the above
interface ComplexData_28<T = unknown> {
  id: string;
  data: DeepObject_28<T>;
  transformed: Transform_28<T>;
  flattened: T extends Array<unknown> ? Flatten_28<T> : T;
  mapped: MapDeep_28<T>;
  meta: {
    index: 28;
    depth: 8;
    timestamp: number;
  };
}

// Type that forces evaluation of all nested types
type ForceEval_28<T> = T extends object
  ? { [K in keyof T]: ForceEval_28<T[K]> }
  : T;

// Export types to ensure they're checked
export type {
  DeepObject_28,
  Flatten_28,
  Transform_28,
  MapDeep_28,
  Split_28,
  Join_28,
  Permutation_28,
  ComplexData_28,
  ForceEval_28,
};

// Force type instantiation with concrete types
type _Test1_28 = ForceEval_28<ComplexData_28<string>>;
type _Test2_28 = ForceEval_28<ComplexData_28<number[]>>;
type _Test3_28 = ForceEval_28<ComplexData_28<{ a: string; b: number; c: boolean }>>;
type _Test4_28 = ForceEval_28<Transform_28<'hello'>>;
type _Test5_28 = ForceEval_28<MapDeep_28<{ nested: { deep: { value: string } } }>>;

// Verify types are used (prevents dead code elimination)
declare const _verify_28: _Test1_28 & _Test2_28 & _Test3_28 & _Test4_28 & _Test5_28;
