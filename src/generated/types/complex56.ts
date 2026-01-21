// Complex type file 56 - forces expensive TypeScript type inference
// This file takes ~2-3 seconds to type-check but uses minimal memory

// Recursive type builders
type Prev = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

// Deep recursive object type
type DeepObject_56<T, D extends number = 8> = D extends 0
  ? T
  : { value: T; nested: DeepObject_56<T, Prev[D]>; meta: { depth: D; index: 56 } };

// Recursive array flattening
type Flatten_56<T> = T extends Array<infer U>
  ? U extends Array<unknown>
    ? Flatten_56<U>
    : U
  : T;

// Complex conditional type chain
type Transform_56<T, D extends number = 8> = D extends 0
  ? T
  : T extends string
    ? Transform_56<`[${T}]`, Prev[D]>
    : T extends number
      ? Transform_56<[T, T], Prev[D]>
      : T extends boolean
        ? Transform_56<{ flag: T }, Prev[D]>
        : T extends object
          ? Transform_56<{ wrapped: T; level: D }, Prev[D]>
          : T;

// Union to tuple conversion (expensive)
type UnionToIntersection_56<U> = 
  (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOfUnion_56<T> = 
  UnionToIntersection_56<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type UnionToTuple_56<T, L = LastOfUnion_56<T>, N = [T] extends [never] ? true : false> = 
  true extends N ? [] : [...UnionToTuple_56<Exclude<T, L>>, L];

// Mapped type with conditional transformations
type MapDeep_56<T, D extends number = 8> = D extends 0
  ? T
  : T extends object
    ? { [K in keyof T]: MapDeep_56<T[K], Prev[D]> }
    : T extends Array<infer U>
      ? MapDeep_56<U, Prev[D]>[]
      : Transform_56<T, D>;

// String manipulation types (expensive)
type Split_56<S extends string, D extends string = ''> = 
  S extends `${infer H}${D}${infer T}` 
    ? [H, ...Split_56<T, D>] 
    : S extends '' 
      ? [] 
      : [S];

type Join_56<T extends string[], D extends string = ''> = 
  T extends [] 
    ? '' 
    : T extends [infer F extends string] 
      ? F 
      : T extends [infer F extends string, ...infer R extends string[]] 
        ? `${F}${D}${Join_56<R, D>}` 
        : never;

// Permutation type (exponential complexity, but bounded)
type Permutation_56<T, K = T> = [T] extends [never]
  ? []
  : K extends K
    ? [K, ...Permutation_56<Exclude<T, K>>]
    : never;

// Complex interface using all the above
interface ComplexData_56<T = unknown> {
  id: string;
  data: DeepObject_56<T>;
  transformed: Transform_56<T>;
  flattened: T extends Array<unknown> ? Flatten_56<T> : T;
  mapped: MapDeep_56<T>;
  meta: {
    index: 56;
    depth: 8;
    timestamp: number;
  };
}

// Type that forces evaluation of all nested types
type ForceEval_56<T> = T extends object
  ? { [K in keyof T]: ForceEval_56<T[K]> }
  : T;

// Export types to ensure they're checked
export type {
  DeepObject_56,
  Flatten_56,
  Transform_56,
  MapDeep_56,
  Split_56,
  Join_56,
  Permutation_56,
  ComplexData_56,
  ForceEval_56,
};

// Force type instantiation with concrete types
type _Test1_56 = ForceEval_56<ComplexData_56<string>>;
type _Test2_56 = ForceEval_56<ComplexData_56<number[]>>;
type _Test3_56 = ForceEval_56<ComplexData_56<{ a: string; b: number; c: boolean }>>;
type _Test4_56 = ForceEval_56<Transform_56<'hello'>>;
type _Test5_56 = ForceEval_56<MapDeep_56<{ nested: { deep: { value: string } } }>>;

// Verify types are used (prevents dead code elimination)
declare const _verify_56: _Test1_56 & _Test2_56 & _Test3_56 & _Test4_56 & _Test5_56;
