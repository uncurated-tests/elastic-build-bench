// Complex type file 31 - forces expensive TypeScript type inference
// This file takes ~2-3 seconds to type-check but uses minimal memory

// Recursive type builders
type Prev = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

// Deep recursive object type
type DeepObject_31<T, D extends number = 11> = D extends 0
  ? T
  : { value: T; nested: DeepObject_31<T, Prev[D]>; meta: { depth: D; index: 31 } };

// Recursive array flattening
type Flatten_31<T> = T extends Array<infer U>
  ? U extends Array<unknown>
    ? Flatten_31<U>
    : U
  : T;

// Complex conditional type chain
type Transform_31<T, D extends number = 11> = D extends 0
  ? T
  : T extends string
    ? Transform_31<`[${T}]`, Prev[D]>
    : T extends number
      ? Transform_31<[T, T], Prev[D]>
      : T extends boolean
        ? Transform_31<{ flag: T }, Prev[D]>
        : T extends object
          ? Transform_31<{ wrapped: T; level: D }, Prev[D]>
          : T;

// Union to tuple conversion (expensive)
type UnionToIntersection_31<U> = 
  (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOfUnion_31<T> = 
  UnionToIntersection_31<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type UnionToTuple_31<T, L = LastOfUnion_31<T>, N = [T] extends [never] ? true : false> = 
  true extends N ? [] : [...UnionToTuple_31<Exclude<T, L>>, L];

// Mapped type with conditional transformations
type MapDeep_31<T, D extends number = 11> = D extends 0
  ? T
  : T extends object
    ? { [K in keyof T]: MapDeep_31<T[K], Prev[D]> }
    : T extends Array<infer U>
      ? MapDeep_31<U, Prev[D]>[]
      : Transform_31<T, D>;

// String manipulation types (expensive)
type Split_31<S extends string, D extends string = ''> = 
  S extends `${infer H}${D}${infer T}` 
    ? [H, ...Split_31<T, D>] 
    : S extends '' 
      ? [] 
      : [S];

type Join_31<T extends string[], D extends string = ''> = 
  T extends [] 
    ? '' 
    : T extends [infer F extends string] 
      ? F 
      : T extends [infer F extends string, ...infer R extends string[]] 
        ? `${F}${D}${Join_31<R, D>}` 
        : never;

// Permutation type (exponential complexity, but bounded)
type Permutation_31<T, K = T> = [T] extends [never]
  ? []
  : K extends K
    ? [K, ...Permutation_31<Exclude<T, K>>]
    : never;

// Complex interface using all the above
interface ComplexData_31<T = unknown> {
  id: string;
  data: DeepObject_31<T>;
  transformed: Transform_31<T>;
  flattened: T extends Array<unknown> ? Flatten_31<T> : T;
  mapped: MapDeep_31<T>;
  meta: {
    index: 31;
    depth: 11;
    timestamp: number;
  };
}

// Type that forces evaluation of all nested types
type ForceEval_31<T> = T extends object
  ? { [K in keyof T]: ForceEval_31<T[K]> }
  : T;

// Export types to ensure they're checked
export type {
  DeepObject_31,
  Flatten_31,
  Transform_31,
  MapDeep_31,
  Split_31,
  Join_31,
  Permutation_31,
  ComplexData_31,
  ForceEval_31,
};

// Force type instantiation with concrete types
type _Test1_31 = ForceEval_31<ComplexData_31<string>>;
type _Test2_31 = ForceEval_31<ComplexData_31<number[]>>;
type _Test3_31 = ForceEval_31<ComplexData_31<{ a: string; b: number; c: boolean }>>;
type _Test4_31 = ForceEval_31<Transform_31<'hello'>>;
type _Test5_31 = ForceEval_31<MapDeep_31<{ nested: { deep: { value: string } } }>>;

// Verify types are used (prevents dead code elimination)
declare const _verify_31: _Test1_31 & _Test2_31 & _Test3_31 & _Test4_31 & _Test5_31;
