// Complex type file 58 - forces expensive TypeScript type inference
// This file takes ~2-3 seconds to type-check but uses minimal memory

// Recursive type builders
type Prev = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

// Deep recursive object type
type DeepObject_58<T, D extends number = 10> = D extends 0
  ? T
  : { value: T; nested: DeepObject_58<T, Prev[D]>; meta: { depth: D; index: 58 } };

// Recursive array flattening
type Flatten_58<T> = T extends Array<infer U>
  ? U extends Array<unknown>
    ? Flatten_58<U>
    : U
  : T;

// Complex conditional type chain
type Transform_58<T, D extends number = 10> = D extends 0
  ? T
  : T extends string
    ? Transform_58<`[${T}]`, Prev[D]>
    : T extends number
      ? Transform_58<[T, T], Prev[D]>
      : T extends boolean
        ? Transform_58<{ flag: T }, Prev[D]>
        : T extends object
          ? Transform_58<{ wrapped: T; level: D }, Prev[D]>
          : T;

// Union to tuple conversion (expensive)
type UnionToIntersection_58<U> = 
  (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOfUnion_58<T> = 
  UnionToIntersection_58<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type UnionToTuple_58<T, L = LastOfUnion_58<T>, N = [T] extends [never] ? true : false> = 
  true extends N ? [] : [...UnionToTuple_58<Exclude<T, L>>, L];

// Mapped type with conditional transformations
type MapDeep_58<T, D extends number = 10> = D extends 0
  ? T
  : T extends object
    ? { [K in keyof T]: MapDeep_58<T[K], Prev[D]> }
    : T extends Array<infer U>
      ? MapDeep_58<U, Prev[D]>[]
      : Transform_58<T, D>;

// String manipulation types (expensive)
type Split_58<S extends string, D extends string = ''> = 
  S extends `${infer H}${D}${infer T}` 
    ? [H, ...Split_58<T, D>] 
    : S extends '' 
      ? [] 
      : [S];

type Join_58<T extends string[], D extends string = ''> = 
  T extends [] 
    ? '' 
    : T extends [infer F extends string] 
      ? F 
      : T extends [infer F extends string, ...infer R extends string[]] 
        ? `${F}${D}${Join_58<R, D>}` 
        : never;

// Permutation type (exponential complexity, but bounded)
type Permutation_58<T, K = T> = [T] extends [never]
  ? []
  : K extends K
    ? [K, ...Permutation_58<Exclude<T, K>>]
    : never;

// Complex interface using all the above
interface ComplexData_58<T = unknown> {
  id: string;
  data: DeepObject_58<T>;
  transformed: Transform_58<T>;
  flattened: T extends Array<unknown> ? Flatten_58<T> : T;
  mapped: MapDeep_58<T>;
  meta: {
    index: 58;
    depth: 10;
    timestamp: number;
  };
}

// Type that forces evaluation of all nested types
type ForceEval_58<T> = T extends object
  ? { [K in keyof T]: ForceEval_58<T[K]> }
  : T;

// Export types to ensure they're checked
export type {
  DeepObject_58,
  Flatten_58,
  Transform_58,
  MapDeep_58,
  Split_58,
  Join_58,
  Permutation_58,
  ComplexData_58,
  ForceEval_58,
};

// Force type instantiation with concrete types
type _Test1_58 = ForceEval_58<ComplexData_58<string>>;
type _Test2_58 = ForceEval_58<ComplexData_58<number[]>>;
type _Test3_58 = ForceEval_58<ComplexData_58<{ a: string; b: number; c: boolean }>>;
type _Test4_58 = ForceEval_58<Transform_58<'hello'>>;
type _Test5_58 = ForceEval_58<MapDeep_58<{ nested: { deep: { value: string } } }>>;

// Verify types are used (prevents dead code elimination)
declare const _verify_58: _Test1_58 & _Test2_58 & _Test3_58 & _Test4_58 & _Test5_58;
