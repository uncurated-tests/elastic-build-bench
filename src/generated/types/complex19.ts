// Complex type file 19 - forces expensive TypeScript type inference
// This file takes ~2-3 seconds to type-check but uses minimal memory

// Recursive type builders
type Prev = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

// Deep recursive object type
type DeepObject_19<T, D extends number = 11> = D extends 0
  ? T
  : { value: T; nested: DeepObject_19<T, Prev[D]>; meta: { depth: D; index: 19 } };

// Recursive array flattening
type Flatten_19<T> = T extends Array<infer U>
  ? U extends Array<unknown>
    ? Flatten_19<U>
    : U
  : T;

// Complex conditional type chain
type Transform_19<T, D extends number = 11> = D extends 0
  ? T
  : T extends string
    ? Transform_19<`[${T}]`, Prev[D]>
    : T extends number
      ? Transform_19<[T, T], Prev[D]>
      : T extends boolean
        ? Transform_19<{ flag: T }, Prev[D]>
        : T extends object
          ? Transform_19<{ wrapped: T; level: D }, Prev[D]>
          : T;

// Union to tuple conversion (expensive)
type UnionToIntersection_19<U> = 
  (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOfUnion_19<T> = 
  UnionToIntersection_19<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type UnionToTuple_19<T, L = LastOfUnion_19<T>, N = [T] extends [never] ? true : false> = 
  true extends N ? [] : [...UnionToTuple_19<Exclude<T, L>>, L];

// Mapped type with conditional transformations
type MapDeep_19<T, D extends number = 11> = D extends 0
  ? T
  : T extends object
    ? { [K in keyof T]: MapDeep_19<T[K], Prev[D]> }
    : T extends Array<infer U>
      ? MapDeep_19<U, Prev[D]>[]
      : Transform_19<T, D>;

// String manipulation types (expensive)
type Split_19<S extends string, D extends string = ''> = 
  S extends `${infer H}${D}${infer T}` 
    ? [H, ...Split_19<T, D>] 
    : S extends '' 
      ? [] 
      : [S];

type Join_19<T extends string[], D extends string = ''> = 
  T extends [] 
    ? '' 
    : T extends [infer F extends string] 
      ? F 
      : T extends [infer F extends string, ...infer R extends string[]] 
        ? `${F}${D}${Join_19<R, D>}` 
        : never;

// Permutation type (exponential complexity, but bounded)
type Permutation_19<T, K = T> = [T] extends [never]
  ? []
  : K extends K
    ? [K, ...Permutation_19<Exclude<T, K>>]
    : never;

// Complex interface using all the above
interface ComplexData_19<T = unknown> {
  id: string;
  data: DeepObject_19<T>;
  transformed: Transform_19<T>;
  flattened: T extends Array<unknown> ? Flatten_19<T> : T;
  mapped: MapDeep_19<T>;
  meta: {
    index: 19;
    depth: 11;
    timestamp: number;
  };
}

// Type that forces evaluation of all nested types
type ForceEval_19<T> = T extends object
  ? { [K in keyof T]: ForceEval_19<T[K]> }
  : T;

// Export types to ensure they're checked
export type {
  DeepObject_19,
  Flatten_19,
  Transform_19,
  MapDeep_19,
  Split_19,
  Join_19,
  Permutation_19,
  ComplexData_19,
  ForceEval_19,
};

// Force type instantiation with concrete types
type _Test1_19 = ForceEval_19<ComplexData_19<string>>;
type _Test2_19 = ForceEval_19<ComplexData_19<number[]>>;
type _Test3_19 = ForceEval_19<ComplexData_19<{ a: string; b: number; c: boolean }>>;
type _Test4_19 = ForceEval_19<Transform_19<'hello'>>;
type _Test5_19 = ForceEval_19<MapDeep_19<{ nested: { deep: { value: string } } }>>;

// Verify types are used (prevents dead code elimination)
declare const _verify_19: _Test1_19 & _Test2_19 & _Test3_19 & _Test4_19 & _Test5_19;
