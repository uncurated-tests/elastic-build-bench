// Complex type file 12 - forces expensive TypeScript type inference
// This file takes ~2-3 seconds to type-check but uses minimal memory

// Recursive type builders
type Prev = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

// Deep recursive object type
type DeepObject_12<T, D extends number = 8> = D extends 0
  ? T
  : { value: T; nested: DeepObject_12<T, Prev[D]>; meta: { depth: D; index: 12 } };

// Recursive array flattening
type Flatten_12<T> = T extends Array<infer U>
  ? U extends Array<unknown>
    ? Flatten_12<U>
    : U
  : T;

// Complex conditional type chain
type Transform_12<T, D extends number = 8> = D extends 0
  ? T
  : T extends string
    ? Transform_12<`[${T}]`, Prev[D]>
    : T extends number
      ? Transform_12<[T, T], Prev[D]>
      : T extends boolean
        ? Transform_12<{ flag: T }, Prev[D]>
        : T extends object
          ? Transform_12<{ wrapped: T; level: D }, Prev[D]>
          : T;

// Union to tuple conversion (expensive)
type UnionToIntersection_12<U> = 
  (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOfUnion_12<T> = 
  UnionToIntersection_12<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type UnionToTuple_12<T, L = LastOfUnion_12<T>, N = [T] extends [never] ? true : false> = 
  true extends N ? [] : [...UnionToTuple_12<Exclude<T, L>>, L];

// Mapped type with conditional transformations
type MapDeep_12<T, D extends number = 8> = D extends 0
  ? T
  : T extends object
    ? { [K in keyof T]: MapDeep_12<T[K], Prev[D]> }
    : T extends Array<infer U>
      ? MapDeep_12<U, Prev[D]>[]
      : Transform_12<T, D>;

// String manipulation types (expensive)
type Split_12<S extends string, D extends string = ''> = 
  S extends `${infer H}${D}${infer T}` 
    ? [H, ...Split_12<T, D>] 
    : S extends '' 
      ? [] 
      : [S];

type Join_12<T extends string[], D extends string = ''> = 
  T extends [] 
    ? '' 
    : T extends [infer F extends string] 
      ? F 
      : T extends [infer F extends string, ...infer R extends string[]] 
        ? `${F}${D}${Join_12<R, D>}` 
        : never;

// Permutation type (exponential complexity, but bounded)
type Permutation_12<T, K = T> = [T] extends [never]
  ? []
  : K extends K
    ? [K, ...Permutation_12<Exclude<T, K>>]
    : never;

// Complex interface using all the above
interface ComplexData_12<T = unknown> {
  id: string;
  data: DeepObject_12<T>;
  transformed: Transform_12<T>;
  flattened: T extends Array<unknown> ? Flatten_12<T> : T;
  mapped: MapDeep_12<T>;
  meta: {
    index: 12;
    depth: 8;
    timestamp: number;
  };
}

// Type that forces evaluation of all nested types
type ForceEval_12<T> = T extends object
  ? { [K in keyof T]: ForceEval_12<T[K]> }
  : T;

// Export types to ensure they're checked
export type {
  DeepObject_12,
  Flatten_12,
  Transform_12,
  MapDeep_12,
  Split_12,
  Join_12,
  Permutation_12,
  ComplexData_12,
  ForceEval_12,
};

// Force type instantiation with concrete types
type _Test1_12 = ForceEval_12<ComplexData_12<string>>;
type _Test2_12 = ForceEval_12<ComplexData_12<number[]>>;
type _Test3_12 = ForceEval_12<ComplexData_12<{ a: string; b: number; c: boolean }>>;
type _Test4_12 = ForceEval_12<Transform_12<'hello'>>;
type _Test5_12 = ForceEval_12<MapDeep_12<{ nested: { deep: { value: string } } }>>;

// Verify types are used (prevents dead code elimination)
declare const _verify_12: _Test1_12 & _Test2_12 & _Test3_12 & _Test4_12 & _Test5_12;
