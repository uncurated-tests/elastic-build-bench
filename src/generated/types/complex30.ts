// Complex type file 30 - forces expensive TypeScript type inference
// This file takes ~2-3 seconds to type-check but uses minimal memory

// Recursive type builders
type Prev = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

// Deep recursive object type
type DeepObject_30<T, D extends number = 10> = D extends 0
  ? T
  : { value: T; nested: DeepObject_30<T, Prev[D]>; meta: { depth: D; index: 30 } };

// Recursive array flattening
type Flatten_30<T> = T extends Array<infer U>
  ? U extends Array<unknown>
    ? Flatten_30<U>
    : U
  : T;

// Complex conditional type chain
type Transform_30<T, D extends number = 10> = D extends 0
  ? T
  : T extends string
    ? Transform_30<`[${T}]`, Prev[D]>
    : T extends number
      ? Transform_30<[T, T], Prev[D]>
      : T extends boolean
        ? Transform_30<{ flag: T }, Prev[D]>
        : T extends object
          ? Transform_30<{ wrapped: T; level: D }, Prev[D]>
          : T;

// Union to tuple conversion (expensive)
type UnionToIntersection_30<U> = 
  (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOfUnion_30<T> = 
  UnionToIntersection_30<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type UnionToTuple_30<T, L = LastOfUnion_30<T>, N = [T] extends [never] ? true : false> = 
  true extends N ? [] : [...UnionToTuple_30<Exclude<T, L>>, L];

// Mapped type with conditional transformations
type MapDeep_30<T, D extends number = 10> = D extends 0
  ? T
  : T extends object
    ? { [K in keyof T]: MapDeep_30<T[K], Prev[D]> }
    : T extends Array<infer U>
      ? MapDeep_30<U, Prev[D]>[]
      : Transform_30<T, D>;

// String manipulation types (expensive)
type Split_30<S extends string, D extends string = ''> = 
  S extends `${infer H}${D}${infer T}` 
    ? [H, ...Split_30<T, D>] 
    : S extends '' 
      ? [] 
      : [S];

type Join_30<T extends string[], D extends string = ''> = 
  T extends [] 
    ? '' 
    : T extends [infer F extends string] 
      ? F 
      : T extends [infer F extends string, ...infer R extends string[]] 
        ? `${F}${D}${Join_30<R, D>}` 
        : never;

// Permutation type (exponential complexity, but bounded)
type Permutation_30<T, K = T> = [T] extends [never]
  ? []
  : K extends K
    ? [K, ...Permutation_30<Exclude<T, K>>]
    : never;

// Complex interface using all the above
interface ComplexData_30<T = unknown> {
  id: string;
  data: DeepObject_30<T>;
  transformed: Transform_30<T>;
  flattened: T extends Array<unknown> ? Flatten_30<T> : T;
  mapped: MapDeep_30<T>;
  meta: {
    index: 30;
    depth: 10;
    timestamp: number;
  };
}

// Type that forces evaluation of all nested types
type ForceEval_30<T> = T extends object
  ? { [K in keyof T]: ForceEval_30<T[K]> }
  : T;

// Export types to ensure they're checked
export type {
  DeepObject_30,
  Flatten_30,
  Transform_30,
  MapDeep_30,
  Split_30,
  Join_30,
  Permutation_30,
  ComplexData_30,
  ForceEval_30,
};

// Force type instantiation with concrete types
type _Test1_30 = ForceEval_30<ComplexData_30<string>>;
type _Test2_30 = ForceEval_30<ComplexData_30<number[]>>;
type _Test3_30 = ForceEval_30<ComplexData_30<{ a: string; b: number; c: boolean }>>;
type _Test4_30 = ForceEval_30<Transform_30<'hello'>>;
type _Test5_30 = ForceEval_30<MapDeep_30<{ nested: { deep: { value: string } } }>>;

// Verify types are used (prevents dead code elimination)
declare const _verify_30: _Test1_30 & _Test2_30 & _Test3_30 & _Test4_30 & _Test5_30;
