// Complex type file 20 - forces expensive TypeScript type inference
// This file takes ~2-3 seconds to type-check but uses minimal memory

// Recursive type builders
type Prev = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

// Deep recursive object type
type DeepObject_20<T, D extends number = 8> = D extends 0
  ? T
  : { value: T; nested: DeepObject_20<T, Prev[D]>; meta: { depth: D; index: 20 } };

// Recursive array flattening
type Flatten_20<T> = T extends Array<infer U>
  ? U extends Array<unknown>
    ? Flatten_20<U>
    : U
  : T;

// Complex conditional type chain
type Transform_20<T, D extends number = 8> = D extends 0
  ? T
  : T extends string
    ? Transform_20<`[${T}]`, Prev[D]>
    : T extends number
      ? Transform_20<[T, T], Prev[D]>
      : T extends boolean
        ? Transform_20<{ flag: T }, Prev[D]>
        : T extends object
          ? Transform_20<{ wrapped: T; level: D }, Prev[D]>
          : T;

// Union to tuple conversion (expensive)
type UnionToIntersection_20<U> = 
  (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOfUnion_20<T> = 
  UnionToIntersection_20<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type UnionToTuple_20<T, L = LastOfUnion_20<T>, N = [T] extends [never] ? true : false> = 
  true extends N ? [] : [...UnionToTuple_20<Exclude<T, L>>, L];

// Mapped type with conditional transformations
type MapDeep_20<T, D extends number = 8> = D extends 0
  ? T
  : T extends object
    ? { [K in keyof T]: MapDeep_20<T[K], Prev[D]> }
    : T extends Array<infer U>
      ? MapDeep_20<U, Prev[D]>[]
      : Transform_20<T, D>;

// String manipulation types (expensive)
type Split_20<S extends string, D extends string = ''> = 
  S extends `${infer H}${D}${infer T}` 
    ? [H, ...Split_20<T, D>] 
    : S extends '' 
      ? [] 
      : [S];

type Join_20<T extends string[], D extends string = ''> = 
  T extends [] 
    ? '' 
    : T extends [infer F extends string] 
      ? F 
      : T extends [infer F extends string, ...infer R extends string[]] 
        ? `${F}${D}${Join_20<R, D>}` 
        : never;

// Permutation type (exponential complexity, but bounded)
type Permutation_20<T, K = T> = [T] extends [never]
  ? []
  : K extends K
    ? [K, ...Permutation_20<Exclude<T, K>>]
    : never;

// Complex interface using all the above
interface ComplexData_20<T = unknown> {
  id: string;
  data: DeepObject_20<T>;
  transformed: Transform_20<T>;
  flattened: T extends Array<unknown> ? Flatten_20<T> : T;
  mapped: MapDeep_20<T>;
  meta: {
    index: 20;
    depth: 8;
    timestamp: number;
  };
}

// Type that forces evaluation of all nested types
type ForceEval_20<T> = T extends object
  ? { [K in keyof T]: ForceEval_20<T[K]> }
  : T;

// Export types to ensure they're checked
export type {
  DeepObject_20,
  Flatten_20,
  Transform_20,
  MapDeep_20,
  Split_20,
  Join_20,
  Permutation_20,
  ComplexData_20,
  ForceEval_20,
};

// Force type instantiation with concrete types
type _Test1_20 = ForceEval_20<ComplexData_20<string>>;
type _Test2_20 = ForceEval_20<ComplexData_20<number[]>>;
type _Test3_20 = ForceEval_20<ComplexData_20<{ a: string; b: number; c: boolean }>>;
type _Test4_20 = ForceEval_20<Transform_20<'hello'>>;
type _Test5_20 = ForceEval_20<MapDeep_20<{ nested: { deep: { value: string } } }>>;

// Verify types are used (prevents dead code elimination)
declare const _verify_20: _Test1_20 & _Test2_20 & _Test3_20 & _Test4_20 & _Test5_20;
