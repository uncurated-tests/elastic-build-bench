// Complex type file 42 - forces expensive TypeScript type inference
// This file takes ~2-3 seconds to type-check but uses minimal memory

// Recursive type builders
type Prev = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

// Deep recursive object type
type DeepObject_42<T, D extends number = 10> = D extends 0
  ? T
  : { value: T; nested: DeepObject_42<T, Prev[D]>; meta: { depth: D; index: 42 } };

// Recursive array flattening
type Flatten_42<T> = T extends Array<infer U>
  ? U extends Array<unknown>
    ? Flatten_42<U>
    : U
  : T;

// Complex conditional type chain
type Transform_42<T, D extends number = 10> = D extends 0
  ? T
  : T extends string
    ? Transform_42<`[${T}]`, Prev[D]>
    : T extends number
      ? Transform_42<[T, T], Prev[D]>
      : T extends boolean
        ? Transform_42<{ flag: T }, Prev[D]>
        : T extends object
          ? Transform_42<{ wrapped: T; level: D }, Prev[D]>
          : T;

// Union to tuple conversion (expensive)
type UnionToIntersection_42<U> = 
  (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOfUnion_42<T> = 
  UnionToIntersection_42<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type UnionToTuple_42<T, L = LastOfUnion_42<T>, N = [T] extends [never] ? true : false> = 
  true extends N ? [] : [...UnionToTuple_42<Exclude<T, L>>, L];

// Mapped type with conditional transformations
type MapDeep_42<T, D extends number = 10> = D extends 0
  ? T
  : T extends object
    ? { [K in keyof T]: MapDeep_42<T[K], Prev[D]> }
    : T extends Array<infer U>
      ? MapDeep_42<U, Prev[D]>[]
      : Transform_42<T, D>;

// String manipulation types (expensive)
type Split_42<S extends string, D extends string = ''> = 
  S extends `${infer H}${D}${infer T}` 
    ? [H, ...Split_42<T, D>] 
    : S extends '' 
      ? [] 
      : [S];

type Join_42<T extends string[], D extends string = ''> = 
  T extends [] 
    ? '' 
    : T extends [infer F extends string] 
      ? F 
      : T extends [infer F extends string, ...infer R extends string[]] 
        ? `${F}${D}${Join_42<R, D>}` 
        : never;

// Permutation type (exponential complexity, but bounded)
type Permutation_42<T, K = T> = [T] extends [never]
  ? []
  : K extends K
    ? [K, ...Permutation_42<Exclude<T, K>>]
    : never;

// Complex interface using all the above
interface ComplexData_42<T = unknown> {
  id: string;
  data: DeepObject_42<T>;
  transformed: Transform_42<T>;
  flattened: T extends Array<unknown> ? Flatten_42<T> : T;
  mapped: MapDeep_42<T>;
  meta: {
    index: 42;
    depth: 10;
    timestamp: number;
  };
}

// Type that forces evaluation of all nested types
type ForceEval_42<T> = T extends object
  ? { [K in keyof T]: ForceEval_42<T[K]> }
  : T;

// Export types to ensure they're checked
export type {
  DeepObject_42,
  Flatten_42,
  Transform_42,
  MapDeep_42,
  Split_42,
  Join_42,
  Permutation_42,
  ComplexData_42,
  ForceEval_42,
};

// Force type instantiation with concrete types
type _Test1_42 = ForceEval_42<ComplexData_42<string>>;
type _Test2_42 = ForceEval_42<ComplexData_42<number[]>>;
type _Test3_42 = ForceEval_42<ComplexData_42<{ a: string; b: number; c: boolean }>>;
type _Test4_42 = ForceEval_42<Transform_42<'hello'>>;
type _Test5_42 = ForceEval_42<MapDeep_42<{ nested: { deep: { value: string } } }>>;

// Verify types are used (prevents dead code elimination)
declare const _verify_42: _Test1_42 & _Test2_42 & _Test3_42 & _Test4_42 & _Test5_42;
