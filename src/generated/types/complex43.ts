// Complex type file 43 - forces expensive TypeScript type inference
// This file takes ~2-3 seconds to type-check but uses minimal memory

// Recursive type builders
type Prev = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

// Deep recursive object type
type DeepObject_43<T, D extends number = 11> = D extends 0
  ? T
  : { value: T; nested: DeepObject_43<T, Prev[D]>; meta: { depth: D; index: 43 } };

// Recursive array flattening
type Flatten_43<T> = T extends Array<infer U>
  ? U extends Array<unknown>
    ? Flatten_43<U>
    : U
  : T;

// Complex conditional type chain
type Transform_43<T, D extends number = 11> = D extends 0
  ? T
  : T extends string
    ? Transform_43<`[${T}]`, Prev[D]>
    : T extends number
      ? Transform_43<[T, T], Prev[D]>
      : T extends boolean
        ? Transform_43<{ flag: T }, Prev[D]>
        : T extends object
          ? Transform_43<{ wrapped: T; level: D }, Prev[D]>
          : T;

// Union to tuple conversion (expensive)
type UnionToIntersection_43<U> = 
  (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOfUnion_43<T> = 
  UnionToIntersection_43<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type UnionToTuple_43<T, L = LastOfUnion_43<T>, N = [T] extends [never] ? true : false> = 
  true extends N ? [] : [...UnionToTuple_43<Exclude<T, L>>, L];

// Mapped type with conditional transformations
type MapDeep_43<T, D extends number = 11> = D extends 0
  ? T
  : T extends object
    ? { [K in keyof T]: MapDeep_43<T[K], Prev[D]> }
    : T extends Array<infer U>
      ? MapDeep_43<U, Prev[D]>[]
      : Transform_43<T, D>;

// String manipulation types (expensive)
type Split_43<S extends string, D extends string = ''> = 
  S extends `${infer H}${D}${infer T}` 
    ? [H, ...Split_43<T, D>] 
    : S extends '' 
      ? [] 
      : [S];

type Join_43<T extends string[], D extends string = ''> = 
  T extends [] 
    ? '' 
    : T extends [infer F extends string] 
      ? F 
      : T extends [infer F extends string, ...infer R extends string[]] 
        ? `${F}${D}${Join_43<R, D>}` 
        : never;

// Permutation type (exponential complexity, but bounded)
type Permutation_43<T, K = T> = [T] extends [never]
  ? []
  : K extends K
    ? [K, ...Permutation_43<Exclude<T, K>>]
    : never;

// Complex interface using all the above
interface ComplexData_43<T = unknown> {
  id: string;
  data: DeepObject_43<T>;
  transformed: Transform_43<T>;
  flattened: T extends Array<unknown> ? Flatten_43<T> : T;
  mapped: MapDeep_43<T>;
  meta: {
    index: 43;
    depth: 11;
    timestamp: number;
  };
}

// Type that forces evaluation of all nested types
type ForceEval_43<T> = T extends object
  ? { [K in keyof T]: ForceEval_43<T[K]> }
  : T;

// Export types to ensure they're checked
export type {
  DeepObject_43,
  Flatten_43,
  Transform_43,
  MapDeep_43,
  Split_43,
  Join_43,
  Permutation_43,
  ComplexData_43,
  ForceEval_43,
};

// Force type instantiation with concrete types
type _Test1_43 = ForceEval_43<ComplexData_43<string>>;
type _Test2_43 = ForceEval_43<ComplexData_43<number[]>>;
type _Test3_43 = ForceEval_43<ComplexData_43<{ a: string; b: number; c: boolean }>>;
type _Test4_43 = ForceEval_43<Transform_43<'hello'>>;
type _Test5_43 = ForceEval_43<MapDeep_43<{ nested: { deep: { value: string } } }>>;

// Verify types are used (prevents dead code elimination)
declare const _verify_43: _Test1_43 & _Test2_43 & _Test3_43 & _Test4_43 & _Test5_43;
