// Complex type file 78 - forces expensive TypeScript type inference
// This file takes ~2-3 seconds to type-check but uses minimal memory

// Recursive type builders
type Prev = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

// Deep recursive object type
type DeepObject_78<T, D extends number = 10> = D extends 0
  ? T
  : { value: T; nested: DeepObject_78<T, Prev[D]>; meta: { depth: D; index: 78 } };

// Recursive array flattening
type Flatten_78<T> = T extends Array<infer U>
  ? U extends Array<unknown>
    ? Flatten_78<U>
    : U
  : T;

// Complex conditional type chain
type Transform_78<T, D extends number = 10> = D extends 0
  ? T
  : T extends string
    ? Transform_78<`[${T}]`, Prev[D]>
    : T extends number
      ? Transform_78<[T, T], Prev[D]>
      : T extends boolean
        ? Transform_78<{ flag: T }, Prev[D]>
        : T extends object
          ? Transform_78<{ wrapped: T; level: D }, Prev[D]>
          : T;

// Union to tuple conversion (expensive)
type UnionToIntersection_78<U> = 
  (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOfUnion_78<T> = 
  UnionToIntersection_78<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type UnionToTuple_78<T, L = LastOfUnion_78<T>, N = [T] extends [never] ? true : false> = 
  true extends N ? [] : [...UnionToTuple_78<Exclude<T, L>>, L];

// Mapped type with conditional transformations
type MapDeep_78<T, D extends number = 10> = D extends 0
  ? T
  : T extends object
    ? { [K in keyof T]: MapDeep_78<T[K], Prev[D]> }
    : T extends Array<infer U>
      ? MapDeep_78<U, Prev[D]>[]
      : Transform_78<T, D>;

// String manipulation types (expensive)
type Split_78<S extends string, D extends string = ''> = 
  S extends `${infer H}${D}${infer T}` 
    ? [H, ...Split_78<T, D>] 
    : S extends '' 
      ? [] 
      : [S];

type Join_78<T extends string[], D extends string = ''> = 
  T extends [] 
    ? '' 
    : T extends [infer F extends string] 
      ? F 
      : T extends [infer F extends string, ...infer R extends string[]] 
        ? `${F}${D}${Join_78<R, D>}` 
        : never;

// Permutation type (exponential complexity, but bounded)
type Permutation_78<T, K = T> = [T] extends [never]
  ? []
  : K extends K
    ? [K, ...Permutation_78<Exclude<T, K>>]
    : never;

// Complex interface using all the above
interface ComplexData_78<T = unknown> {
  id: string;
  data: DeepObject_78<T>;
  transformed: Transform_78<T>;
  flattened: T extends Array<unknown> ? Flatten_78<T> : T;
  mapped: MapDeep_78<T>;
  meta: {
    index: 78;
    depth: 10;
    timestamp: number;
  };
}

// Type that forces evaluation of all nested types
type ForceEval_78<T> = T extends object
  ? { [K in keyof T]: ForceEval_78<T[K]> }
  : T;

// Export types to ensure they're checked
export type {
  DeepObject_78,
  Flatten_78,
  Transform_78,
  MapDeep_78,
  Split_78,
  Join_78,
  Permutation_78,
  ComplexData_78,
  ForceEval_78,
};

// Force type instantiation with concrete types
type _Test1_78 = ForceEval_78<ComplexData_78<string>>;
type _Test2_78 = ForceEval_78<ComplexData_78<number[]>>;
type _Test3_78 = ForceEval_78<ComplexData_78<{ a: string; b: number; c: boolean }>>;
type _Test4_78 = ForceEval_78<Transform_78<'hello'>>;
type _Test5_78 = ForceEval_78<MapDeep_78<{ nested: { deep: { value: string } } }>>;

// Verify types are used (prevents dead code elimination)
declare const _verify_78: _Test1_78 & _Test2_78 & _Test3_78 & _Test4_78 & _Test5_78;
