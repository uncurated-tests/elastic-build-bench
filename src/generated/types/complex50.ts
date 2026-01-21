// Complex type file 50 - forces expensive TypeScript type inference
// This file takes ~2-3 seconds to type-check but uses minimal memory

// Recursive type builders
type Prev = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

// Deep recursive object type
type DeepObject_50<T, D extends number = 10> = D extends 0
  ? T
  : { value: T; nested: DeepObject_50<T, Prev[D]>; meta: { depth: D; index: 50 } };

// Recursive array flattening
type Flatten_50<T> = T extends Array<infer U>
  ? U extends Array<unknown>
    ? Flatten_50<U>
    : U
  : T;

// Complex conditional type chain
type Transform_50<T, D extends number = 10> = D extends 0
  ? T
  : T extends string
    ? Transform_50<`[${T}]`, Prev[D]>
    : T extends number
      ? Transform_50<[T, T], Prev[D]>
      : T extends boolean
        ? Transform_50<{ flag: T }, Prev[D]>
        : T extends object
          ? Transform_50<{ wrapped: T; level: D }, Prev[D]>
          : T;

// Union to tuple conversion (expensive)
type UnionToIntersection_50<U> = 
  (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOfUnion_50<T> = 
  UnionToIntersection_50<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type UnionToTuple_50<T, L = LastOfUnion_50<T>, N = [T] extends [never] ? true : false> = 
  true extends N ? [] : [...UnionToTuple_50<Exclude<T, L>>, L];

// Mapped type with conditional transformations
type MapDeep_50<T, D extends number = 10> = D extends 0
  ? T
  : T extends object
    ? { [K in keyof T]: MapDeep_50<T[K], Prev[D]> }
    : T extends Array<infer U>
      ? MapDeep_50<U, Prev[D]>[]
      : Transform_50<T, D>;

// String manipulation types (expensive)
type Split_50<S extends string, D extends string = ''> = 
  S extends `${infer H}${D}${infer T}` 
    ? [H, ...Split_50<T, D>] 
    : S extends '' 
      ? [] 
      : [S];

type Join_50<T extends string[], D extends string = ''> = 
  T extends [] 
    ? '' 
    : T extends [infer F extends string] 
      ? F 
      : T extends [infer F extends string, ...infer R extends string[]] 
        ? `${F}${D}${Join_50<R, D>}` 
        : never;

// Permutation type (exponential complexity, but bounded)
type Permutation_50<T, K = T> = [T] extends [never]
  ? []
  : K extends K
    ? [K, ...Permutation_50<Exclude<T, K>>]
    : never;

// Complex interface using all the above
interface ComplexData_50<T = unknown> {
  id: string;
  data: DeepObject_50<T>;
  transformed: Transform_50<T>;
  flattened: T extends Array<unknown> ? Flatten_50<T> : T;
  mapped: MapDeep_50<T>;
  meta: {
    index: 50;
    depth: 10;
    timestamp: number;
  };
}

// Type that forces evaluation of all nested types
type ForceEval_50<T> = T extends object
  ? { [K in keyof T]: ForceEval_50<T[K]> }
  : T;

// Export types to ensure they're checked
export type {
  DeepObject_50,
  Flatten_50,
  Transform_50,
  MapDeep_50,
  Split_50,
  Join_50,
  Permutation_50,
  ComplexData_50,
  ForceEval_50,
};

// Force type instantiation with concrete types
type _Test1_50 = ForceEval_50<ComplexData_50<string>>;
type _Test2_50 = ForceEval_50<ComplexData_50<number[]>>;
type _Test3_50 = ForceEval_50<ComplexData_50<{ a: string; b: number; c: boolean }>>;
type _Test4_50 = ForceEval_50<Transform_50<'hello'>>;
type _Test5_50 = ForceEval_50<MapDeep_50<{ nested: { deep: { value: string } } }>>;

// Verify types are used (prevents dead code elimination)
declare const _verify_50: _Test1_50 & _Test2_50 & _Test3_50 & _Test4_50 & _Test5_50;
