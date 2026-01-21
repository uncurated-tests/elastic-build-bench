// Complex type file 18 - forces expensive TypeScript type inference
// This file takes ~2-3 seconds to type-check but uses minimal memory

// Recursive type builders
type Prev = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

// Deep recursive object type
type DeepObject_18<T, D extends number = 10> = D extends 0
  ? T
  : { value: T; nested: DeepObject_18<T, Prev[D]>; meta: { depth: D; index: 18 } };

// Recursive array flattening
type Flatten_18<T> = T extends Array<infer U>
  ? U extends Array<unknown>
    ? Flatten_18<U>
    : U
  : T;

// Complex conditional type chain
type Transform_18<T, D extends number = 10> = D extends 0
  ? T
  : T extends string
    ? Transform_18<`[${T}]`, Prev[D]>
    : T extends number
      ? Transform_18<[T, T], Prev[D]>
      : T extends boolean
        ? Transform_18<{ flag: T }, Prev[D]>
        : T extends object
          ? Transform_18<{ wrapped: T; level: D }, Prev[D]>
          : T;

// Union to tuple conversion (expensive)
type UnionToIntersection_18<U> = 
  (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOfUnion_18<T> = 
  UnionToIntersection_18<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type UnionToTuple_18<T, L = LastOfUnion_18<T>, N = [T] extends [never] ? true : false> = 
  true extends N ? [] : [...UnionToTuple_18<Exclude<T, L>>, L];

// Mapped type with conditional transformations
type MapDeep_18<T, D extends number = 10> = D extends 0
  ? T
  : T extends object
    ? { [K in keyof T]: MapDeep_18<T[K], Prev[D]> }
    : T extends Array<infer U>
      ? MapDeep_18<U, Prev[D]>[]
      : Transform_18<T, D>;

// String manipulation types (expensive)
type Split_18<S extends string, D extends string = ''> = 
  S extends `${infer H}${D}${infer T}` 
    ? [H, ...Split_18<T, D>] 
    : S extends '' 
      ? [] 
      : [S];

type Join_18<T extends string[], D extends string = ''> = 
  T extends [] 
    ? '' 
    : T extends [infer F extends string] 
      ? F 
      : T extends [infer F extends string, ...infer R extends string[]] 
        ? `${F}${D}${Join_18<R, D>}` 
        : never;

// Permutation type (exponential complexity, but bounded)
type Permutation_18<T, K = T> = [T] extends [never]
  ? []
  : K extends K
    ? [K, ...Permutation_18<Exclude<T, K>>]
    : never;

// Complex interface using all the above
interface ComplexData_18<T = unknown> {
  id: string;
  data: DeepObject_18<T>;
  transformed: Transform_18<T>;
  flattened: T extends Array<unknown> ? Flatten_18<T> : T;
  mapped: MapDeep_18<T>;
  meta: {
    index: 18;
    depth: 10;
    timestamp: number;
  };
}

// Type that forces evaluation of all nested types
type ForceEval_18<T> = T extends object
  ? { [K in keyof T]: ForceEval_18<T[K]> }
  : T;

// Export types to ensure they're checked
export type {
  DeepObject_18,
  Flatten_18,
  Transform_18,
  MapDeep_18,
  Split_18,
  Join_18,
  Permutation_18,
  ComplexData_18,
  ForceEval_18,
};

// Force type instantiation with concrete types
type _Test1_18 = ForceEval_18<ComplexData_18<string>>;
type _Test2_18 = ForceEval_18<ComplexData_18<number[]>>;
type _Test3_18 = ForceEval_18<ComplexData_18<{ a: string; b: number; c: boolean }>>;
type _Test4_18 = ForceEval_18<Transform_18<'hello'>>;
type _Test5_18 = ForceEval_18<MapDeep_18<{ nested: { deep: { value: string } } }>>;

// Verify types are used (prevents dead code elimination)
declare const _verify_18: _Test1_18 & _Test2_18 & _Test3_18 & _Test4_18 & _Test5_18;
