// Complex type file 27 - forces expensive TypeScript type inference
// This file takes ~2-3 seconds to type-check but uses minimal memory

// Recursive type builders
type Prev = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

// Deep recursive object type
type DeepObject_27<T, D extends number = 11> = D extends 0
  ? T
  : { value: T; nested: DeepObject_27<T, Prev[D]>; meta: { depth: D; index: 27 } };

// Recursive array flattening
type Flatten_27<T> = T extends Array<infer U>
  ? U extends Array<unknown>
    ? Flatten_27<U>
    : U
  : T;

// Complex conditional type chain
type Transform_27<T, D extends number = 11> = D extends 0
  ? T
  : T extends string
    ? Transform_27<`[${T}]`, Prev[D]>
    : T extends number
      ? Transform_27<[T, T], Prev[D]>
      : T extends boolean
        ? Transform_27<{ flag: T }, Prev[D]>
        : T extends object
          ? Transform_27<{ wrapped: T; level: D }, Prev[D]>
          : T;

// Union to tuple conversion (expensive)
type UnionToIntersection_27<U> = 
  (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOfUnion_27<T> = 
  UnionToIntersection_27<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type UnionToTuple_27<T, L = LastOfUnion_27<T>, N = [T] extends [never] ? true : false> = 
  true extends N ? [] : [...UnionToTuple_27<Exclude<T, L>>, L];

// Mapped type with conditional transformations
type MapDeep_27<T, D extends number = 11> = D extends 0
  ? T
  : T extends object
    ? { [K in keyof T]: MapDeep_27<T[K], Prev[D]> }
    : T extends Array<infer U>
      ? MapDeep_27<U, Prev[D]>[]
      : Transform_27<T, D>;

// String manipulation types (expensive)
type Split_27<S extends string, D extends string = ''> = 
  S extends `${infer H}${D}${infer T}` 
    ? [H, ...Split_27<T, D>] 
    : S extends '' 
      ? [] 
      : [S];

type Join_27<T extends string[], D extends string = ''> = 
  T extends [] 
    ? '' 
    : T extends [infer F extends string] 
      ? F 
      : T extends [infer F extends string, ...infer R extends string[]] 
        ? `${F}${D}${Join_27<R, D>}` 
        : never;

// Permutation type (exponential complexity, but bounded)
type Permutation_27<T, K = T> = [T] extends [never]
  ? []
  : K extends K
    ? [K, ...Permutation_27<Exclude<T, K>>]
    : never;

// Complex interface using all the above
interface ComplexData_27<T = unknown> {
  id: string;
  data: DeepObject_27<T>;
  transformed: Transform_27<T>;
  flattened: T extends Array<unknown> ? Flatten_27<T> : T;
  mapped: MapDeep_27<T>;
  meta: {
    index: 27;
    depth: 11;
    timestamp: number;
  };
}

// Type that forces evaluation of all nested types
type ForceEval_27<T> = T extends object
  ? { [K in keyof T]: ForceEval_27<T[K]> }
  : T;

// Export types to ensure they're checked
export type {
  DeepObject_27,
  Flatten_27,
  Transform_27,
  MapDeep_27,
  Split_27,
  Join_27,
  Permutation_27,
  ComplexData_27,
  ForceEval_27,
};

// Force type instantiation with concrete types
type _Test1_27 = ForceEval_27<ComplexData_27<string>>;
type _Test2_27 = ForceEval_27<ComplexData_27<number[]>>;
type _Test3_27 = ForceEval_27<ComplexData_27<{ a: string; b: number; c: boolean }>>;
type _Test4_27 = ForceEval_27<Transform_27<'hello'>>;
type _Test5_27 = ForceEval_27<MapDeep_27<{ nested: { deep: { value: string } } }>>;

// Verify types are used (prevents dead code elimination)
declare const _verify_27: _Test1_27 & _Test2_27 & _Test3_27 & _Test4_27 & _Test5_27;
