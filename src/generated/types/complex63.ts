// Complex type file 63 - forces expensive TypeScript type inference
// This file takes ~2-3 seconds to type-check but uses minimal memory

// Recursive type builders
type Prev = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

// Deep recursive object type
type DeepObject_63<T, D extends number = 11> = D extends 0
  ? T
  : { value: T; nested: DeepObject_63<T, Prev[D]>; meta: { depth: D; index: 63 } };

// Recursive array flattening
type Flatten_63<T> = T extends Array<infer U>
  ? U extends Array<unknown>
    ? Flatten_63<U>
    : U
  : T;

// Complex conditional type chain
type Transform_63<T, D extends number = 11> = D extends 0
  ? T
  : T extends string
    ? Transform_63<`[${T}]`, Prev[D]>
    : T extends number
      ? Transform_63<[T, T], Prev[D]>
      : T extends boolean
        ? Transform_63<{ flag: T }, Prev[D]>
        : T extends object
          ? Transform_63<{ wrapped: T; level: D }, Prev[D]>
          : T;

// Union to tuple conversion (expensive)
type UnionToIntersection_63<U> = 
  (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOfUnion_63<T> = 
  UnionToIntersection_63<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type UnionToTuple_63<T, L = LastOfUnion_63<T>, N = [T] extends [never] ? true : false> = 
  true extends N ? [] : [...UnionToTuple_63<Exclude<T, L>>, L];

// Mapped type with conditional transformations
type MapDeep_63<T, D extends number = 11> = D extends 0
  ? T
  : T extends object
    ? { [K in keyof T]: MapDeep_63<T[K], Prev[D]> }
    : T extends Array<infer U>
      ? MapDeep_63<U, Prev[D]>[]
      : Transform_63<T, D>;

// String manipulation types (expensive)
type Split_63<S extends string, D extends string = ''> = 
  S extends `${infer H}${D}${infer T}` 
    ? [H, ...Split_63<T, D>] 
    : S extends '' 
      ? [] 
      : [S];

type Join_63<T extends string[], D extends string = ''> = 
  T extends [] 
    ? '' 
    : T extends [infer F extends string] 
      ? F 
      : T extends [infer F extends string, ...infer R extends string[]] 
        ? `${F}${D}${Join_63<R, D>}` 
        : never;

// Permutation type (exponential complexity, but bounded)
type Permutation_63<T, K = T> = [T] extends [never]
  ? []
  : K extends K
    ? [K, ...Permutation_63<Exclude<T, K>>]
    : never;

// Complex interface using all the above
interface ComplexData_63<T = unknown> {
  id: string;
  data: DeepObject_63<T>;
  transformed: Transform_63<T>;
  flattened: T extends Array<unknown> ? Flatten_63<T> : T;
  mapped: MapDeep_63<T>;
  meta: {
    index: 63;
    depth: 11;
    timestamp: number;
  };
}

// Type that forces evaluation of all nested types
type ForceEval_63<T> = T extends object
  ? { [K in keyof T]: ForceEval_63<T[K]> }
  : T;

// Export types to ensure they're checked
export type {
  DeepObject_63,
  Flatten_63,
  Transform_63,
  MapDeep_63,
  Split_63,
  Join_63,
  Permutation_63,
  ComplexData_63,
  ForceEval_63,
};

// Force type instantiation with concrete types
type _Test1_63 = ForceEval_63<ComplexData_63<string>>;
type _Test2_63 = ForceEval_63<ComplexData_63<number[]>>;
type _Test3_63 = ForceEval_63<ComplexData_63<{ a: string; b: number; c: boolean }>>;
type _Test4_63 = ForceEval_63<Transform_63<'hello'>>;
type _Test5_63 = ForceEval_63<MapDeep_63<{ nested: { deep: { value: string } } }>>;

// Verify types are used (prevents dead code elimination)
declare const _verify_63: _Test1_63 & _Test2_63 & _Test3_63 & _Test4_63 & _Test5_63;
