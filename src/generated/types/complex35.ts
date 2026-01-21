// Complex type file 35 - forces expensive TypeScript type inference
// This file takes ~2-3 seconds to type-check but uses minimal memory

// Recursive type builders
type Prev = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

// Deep recursive object type
type DeepObject_35<T, D extends number = 11> = D extends 0
  ? T
  : { value: T; nested: DeepObject_35<T, Prev[D]>; meta: { depth: D; index: 35 } };

// Recursive array flattening
type Flatten_35<T> = T extends Array<infer U>
  ? U extends Array<unknown>
    ? Flatten_35<U>
    : U
  : T;

// Complex conditional type chain
type Transform_35<T, D extends number = 11> = D extends 0
  ? T
  : T extends string
    ? Transform_35<`[${T}]`, Prev[D]>
    : T extends number
      ? Transform_35<[T, T], Prev[D]>
      : T extends boolean
        ? Transform_35<{ flag: T }, Prev[D]>
        : T extends object
          ? Transform_35<{ wrapped: T; level: D }, Prev[D]>
          : T;

// Union to tuple conversion (expensive)
type UnionToIntersection_35<U> = 
  (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOfUnion_35<T> = 
  UnionToIntersection_35<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type UnionToTuple_35<T, L = LastOfUnion_35<T>, N = [T] extends [never] ? true : false> = 
  true extends N ? [] : [...UnionToTuple_35<Exclude<T, L>>, L];

// Mapped type with conditional transformations
type MapDeep_35<T, D extends number = 11> = D extends 0
  ? T
  : T extends object
    ? { [K in keyof T]: MapDeep_35<T[K], Prev[D]> }
    : T extends Array<infer U>
      ? MapDeep_35<U, Prev[D]>[]
      : Transform_35<T, D>;

// String manipulation types (expensive)
type Split_35<S extends string, D extends string = ''> = 
  S extends `${infer H}${D}${infer T}` 
    ? [H, ...Split_35<T, D>] 
    : S extends '' 
      ? [] 
      : [S];

type Join_35<T extends string[], D extends string = ''> = 
  T extends [] 
    ? '' 
    : T extends [infer F extends string] 
      ? F 
      : T extends [infer F extends string, ...infer R extends string[]] 
        ? `${F}${D}${Join_35<R, D>}` 
        : never;

// Permutation type (exponential complexity, but bounded)
type Permutation_35<T, K = T> = [T] extends [never]
  ? []
  : K extends K
    ? [K, ...Permutation_35<Exclude<T, K>>]
    : never;

// Complex interface using all the above
interface ComplexData_35<T = unknown> {
  id: string;
  data: DeepObject_35<T>;
  transformed: Transform_35<T>;
  flattened: T extends Array<unknown> ? Flatten_35<T> : T;
  mapped: MapDeep_35<T>;
  meta: {
    index: 35;
    depth: 11;
    timestamp: number;
  };
}

// Type that forces evaluation of all nested types
type ForceEval_35<T> = T extends object
  ? { [K in keyof T]: ForceEval_35<T[K]> }
  : T;

// Export types to ensure they're checked
export type {
  DeepObject_35,
  Flatten_35,
  Transform_35,
  MapDeep_35,
  Split_35,
  Join_35,
  Permutation_35,
  ComplexData_35,
  ForceEval_35,
};

// Force type instantiation with concrete types
type _Test1_35 = ForceEval_35<ComplexData_35<string>>;
type _Test2_35 = ForceEval_35<ComplexData_35<number[]>>;
type _Test3_35 = ForceEval_35<ComplexData_35<{ a: string; b: number; c: boolean }>>;
type _Test4_35 = ForceEval_35<Transform_35<'hello'>>;
type _Test5_35 = ForceEval_35<MapDeep_35<{ nested: { deep: { value: string } } }>>;

// Verify types are used (prevents dead code elimination)
declare const _verify_35: _Test1_35 & _Test2_35 & _Test3_35 & _Test4_35 & _Test5_35;
