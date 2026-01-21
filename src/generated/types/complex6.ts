// Complex type file 6 - forces expensive TypeScript type inference
// This file takes ~2-3 seconds to type-check but uses minimal memory

// Recursive type builders
type Prev = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

// Deep recursive object type
type DeepObject_6<T, D extends number = 10> = D extends 0
  ? T
  : { value: T; nested: DeepObject_6<T, Prev[D]>; meta: { depth: D; index: 6 } };

// Recursive array flattening
type Flatten_6<T> = T extends Array<infer U>
  ? U extends Array<unknown>
    ? Flatten_6<U>
    : U
  : T;

// Complex conditional type chain
type Transform_6<T, D extends number = 10> = D extends 0
  ? T
  : T extends string
    ? Transform_6<`[${T}]`, Prev[D]>
    : T extends number
      ? Transform_6<[T, T], Prev[D]>
      : T extends boolean
        ? Transform_6<{ flag: T }, Prev[D]>
        : T extends object
          ? Transform_6<{ wrapped: T; level: D }, Prev[D]>
          : T;

// Union to tuple conversion (expensive)
type UnionToIntersection_6<U> = 
  (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOfUnion_6<T> = 
  UnionToIntersection_6<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type UnionToTuple_6<T, L = LastOfUnion_6<T>, N = [T] extends [never] ? true : false> = 
  true extends N ? [] : [...UnionToTuple_6<Exclude<T, L>>, L];

// Mapped type with conditional transformations
type MapDeep_6<T, D extends number = 10> = D extends 0
  ? T
  : T extends object
    ? { [K in keyof T]: MapDeep_6<T[K], Prev[D]> }
    : T extends Array<infer U>
      ? MapDeep_6<U, Prev[D]>[]
      : Transform_6<T, D>;

// String manipulation types (expensive)
type Split_6<S extends string, D extends string = ''> = 
  S extends `${infer H}${D}${infer T}` 
    ? [H, ...Split_6<T, D>] 
    : S extends '' 
      ? [] 
      : [S];

type Join_6<T extends string[], D extends string = ''> = 
  T extends [] 
    ? '' 
    : T extends [infer F extends string] 
      ? F 
      : T extends [infer F extends string, ...infer R extends string[]] 
        ? `${F}${D}${Join_6<R, D>}` 
        : never;

// Permutation type (exponential complexity, but bounded)
type Permutation_6<T, K = T> = [T] extends [never]
  ? []
  : K extends K
    ? [K, ...Permutation_6<Exclude<T, K>>]
    : never;

// Complex interface using all the above
interface ComplexData_6<T = unknown> {
  id: string;
  data: DeepObject_6<T>;
  transformed: Transform_6<T>;
  flattened: T extends Array<unknown> ? Flatten_6<T> : T;
  mapped: MapDeep_6<T>;
  meta: {
    index: 6;
    depth: 10;
    timestamp: number;
  };
}

// Type that forces evaluation of all nested types
type ForceEval_6<T> = T extends object
  ? { [K in keyof T]: ForceEval_6<T[K]> }
  : T;

// Export types to ensure they're checked
export type {
  DeepObject_6,
  Flatten_6,
  Transform_6,
  MapDeep_6,
  Split_6,
  Join_6,
  Permutation_6,
  ComplexData_6,
  ForceEval_6,
};

// Force type instantiation with concrete types
type _Test1_6 = ForceEval_6<ComplexData_6<string>>;
type _Test2_6 = ForceEval_6<ComplexData_6<number[]>>;
type _Test3_6 = ForceEval_6<ComplexData_6<{ a: string; b: number; c: boolean }>>;
type _Test4_6 = ForceEval_6<Transform_6<'hello'>>;
type _Test5_6 = ForceEval_6<MapDeep_6<{ nested: { deep: { value: string } } }>>;

// Verify types are used (prevents dead code elimination)
declare const _verify_6: _Test1_6 & _Test2_6 & _Test3_6 & _Test4_6 & _Test5_6;
