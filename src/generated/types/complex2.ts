// Complex type file 2 - forces expensive TypeScript type inference
// This file takes ~2-3 seconds to type-check but uses minimal memory

// Recursive type builders
type Prev = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

// Deep recursive object type
type DeepObject_2<T, D extends number = 10> = D extends 0
  ? T
  : { value: T; nested: DeepObject_2<T, Prev[D]>; meta: { depth: D; index: 2 } };

// Recursive array flattening
type Flatten_2<T> = T extends Array<infer U>
  ? U extends Array<unknown>
    ? Flatten_2<U>
    : U
  : T;

// Complex conditional type chain
type Transform_2<T, D extends number = 10> = D extends 0
  ? T
  : T extends string
    ? Transform_2<`[${T}]`, Prev[D]>
    : T extends number
      ? Transform_2<[T, T], Prev[D]>
      : T extends boolean
        ? Transform_2<{ flag: T }, Prev[D]>
        : T extends object
          ? Transform_2<{ wrapped: T; level: D }, Prev[D]>
          : T;

// Union to tuple conversion (expensive)
type UnionToIntersection_2<U> = 
  (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOfUnion_2<T> = 
  UnionToIntersection_2<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type UnionToTuple_2<T, L = LastOfUnion_2<T>, N = [T] extends [never] ? true : false> = 
  true extends N ? [] : [...UnionToTuple_2<Exclude<T, L>>, L];

// Mapped type with conditional transformations
type MapDeep_2<T, D extends number = 10> = D extends 0
  ? T
  : T extends object
    ? { [K in keyof T]: MapDeep_2<T[K], Prev[D]> }
    : T extends Array<infer U>
      ? MapDeep_2<U, Prev[D]>[]
      : Transform_2<T, D>;

// String manipulation types (expensive)
type Split_2<S extends string, D extends string = ''> = 
  S extends `${infer H}${D}${infer T}` 
    ? [H, ...Split_2<T, D>] 
    : S extends '' 
      ? [] 
      : [S];

type Join_2<T extends string[], D extends string = ''> = 
  T extends [] 
    ? '' 
    : T extends [infer F extends string] 
      ? F 
      : T extends [infer F extends string, ...infer R extends string[]] 
        ? `${F}${D}${Join_2<R, D>}` 
        : never;

// Permutation type (exponential complexity, but bounded)
type Permutation_2<T, K = T> = [T] extends [never]
  ? []
  : K extends K
    ? [K, ...Permutation_2<Exclude<T, K>>]
    : never;

// Complex interface using all the above
interface ComplexData_2<T = unknown> {
  id: string;
  data: DeepObject_2<T>;
  transformed: Transform_2<T>;
  flattened: T extends Array<unknown> ? Flatten_2<T> : T;
  mapped: MapDeep_2<T>;
  meta: {
    index: 2;
    depth: 10;
    timestamp: number;
  };
}

// Type that forces evaluation of all nested types
type ForceEval_2<T> = T extends object
  ? { [K in keyof T]: ForceEval_2<T[K]> }
  : T;

// Export types to ensure they're checked
export type {
  DeepObject_2,
  Flatten_2,
  Transform_2,
  MapDeep_2,
  Split_2,
  Join_2,
  Permutation_2,
  ComplexData_2,
  ForceEval_2,
};

// Force type instantiation with concrete types
type _Test1_2 = ForceEval_2<ComplexData_2<string>>;
type _Test2_2 = ForceEval_2<ComplexData_2<number[]>>;
type _Test3_2 = ForceEval_2<ComplexData_2<{ a: string; b: number; c: boolean }>>;
type _Test4_2 = ForceEval_2<Transform_2<'hello'>>;
type _Test5_2 = ForceEval_2<MapDeep_2<{ nested: { deep: { value: string } } }>>;

// Verify types are used (prevents dead code elimination)
declare const _verify_2: _Test1_2 & _Test2_2 & _Test3_2 & _Test4_2 & _Test5_2;
