// Complex type file 45 - forces expensive TypeScript type inference
// This file takes ~2-3 seconds to type-check but uses minimal memory

// Recursive type builders
type Prev = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

// Deep recursive object type
type DeepObject_45<T, D extends number = 9> = D extends 0
  ? T
  : { value: T; nested: DeepObject_45<T, Prev[D]>; meta: { depth: D; index: 45 } };

// Recursive array flattening
type Flatten_45<T> = T extends Array<infer U>
  ? U extends Array<unknown>
    ? Flatten_45<U>
    : U
  : T;

// Complex conditional type chain
type Transform_45<T, D extends number = 9> = D extends 0
  ? T
  : T extends string
    ? Transform_45<`[${T}]`, Prev[D]>
    : T extends number
      ? Transform_45<[T, T], Prev[D]>
      : T extends boolean
        ? Transform_45<{ flag: T }, Prev[D]>
        : T extends object
          ? Transform_45<{ wrapped: T; level: D }, Prev[D]>
          : T;

// Union to tuple conversion (expensive)
type UnionToIntersection_45<U> = 
  (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOfUnion_45<T> = 
  UnionToIntersection_45<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type UnionToTuple_45<T, L = LastOfUnion_45<T>, N = [T] extends [never] ? true : false> = 
  true extends N ? [] : [...UnionToTuple_45<Exclude<T, L>>, L];

// Mapped type with conditional transformations
type MapDeep_45<T, D extends number = 9> = D extends 0
  ? T
  : T extends object
    ? { [K in keyof T]: MapDeep_45<T[K], Prev[D]> }
    : T extends Array<infer U>
      ? MapDeep_45<U, Prev[D]>[]
      : Transform_45<T, D>;

// String manipulation types (expensive)
type Split_45<S extends string, D extends string = ''> = 
  S extends `${infer H}${D}${infer T}` 
    ? [H, ...Split_45<T, D>] 
    : S extends '' 
      ? [] 
      : [S];

type Join_45<T extends string[], D extends string = ''> = 
  T extends [] 
    ? '' 
    : T extends [infer F extends string] 
      ? F 
      : T extends [infer F extends string, ...infer R extends string[]] 
        ? `${F}${D}${Join_45<R, D>}` 
        : never;

// Permutation type (exponential complexity, but bounded)
type Permutation_45<T, K = T> = [T] extends [never]
  ? []
  : K extends K
    ? [K, ...Permutation_45<Exclude<T, K>>]
    : never;

// Complex interface using all the above
interface ComplexData_45<T = unknown> {
  id: string;
  data: DeepObject_45<T>;
  transformed: Transform_45<T>;
  flattened: T extends Array<unknown> ? Flatten_45<T> : T;
  mapped: MapDeep_45<T>;
  meta: {
    index: 45;
    depth: 9;
    timestamp: number;
  };
}

// Type that forces evaluation of all nested types
type ForceEval_45<T> = T extends object
  ? { [K in keyof T]: ForceEval_45<T[K]> }
  : T;

// Export types to ensure they're checked
export type {
  DeepObject_45,
  Flatten_45,
  Transform_45,
  MapDeep_45,
  Split_45,
  Join_45,
  Permutation_45,
  ComplexData_45,
  ForceEval_45,
};

// Force type instantiation with concrete types
type _Test1_45 = ForceEval_45<ComplexData_45<string>>;
type _Test2_45 = ForceEval_45<ComplexData_45<number[]>>;
type _Test3_45 = ForceEval_45<ComplexData_45<{ a: string; b: number; c: boolean }>>;
type _Test4_45 = ForceEval_45<Transform_45<'hello'>>;
type _Test5_45 = ForceEval_45<MapDeep_45<{ nested: { deep: { value: string } } }>>;

// Verify types are used (prevents dead code elimination)
declare const _verify_45: _Test1_45 & _Test2_45 & _Test3_45 & _Test4_45 & _Test5_45;
