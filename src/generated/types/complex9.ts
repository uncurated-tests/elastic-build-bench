// Complex type file 9 - forces expensive TypeScript type inference
// This file takes ~2-3 seconds to type-check but uses minimal memory

// Recursive type builders
type Prev = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

// Deep recursive object type
type DeepObject_9<T, D extends number = 9> = D extends 0
  ? T
  : { value: T; nested: DeepObject_9<T, Prev[D]>; meta: { depth: D; index: 9 } };

// Recursive array flattening
type Flatten_9<T> = T extends Array<infer U>
  ? U extends Array<unknown>
    ? Flatten_9<U>
    : U
  : T;

// Complex conditional type chain
type Transform_9<T, D extends number = 9> = D extends 0
  ? T
  : T extends string
    ? Transform_9<`[${T}]`, Prev[D]>
    : T extends number
      ? Transform_9<[T, T], Prev[D]>
      : T extends boolean
        ? Transform_9<{ flag: T }, Prev[D]>
        : T extends object
          ? Transform_9<{ wrapped: T; level: D }, Prev[D]>
          : T;

// Union to tuple conversion (expensive)
type UnionToIntersection_9<U> = 
  (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOfUnion_9<T> = 
  UnionToIntersection_9<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type UnionToTuple_9<T, L = LastOfUnion_9<T>, N = [T] extends [never] ? true : false> = 
  true extends N ? [] : [...UnionToTuple_9<Exclude<T, L>>, L];

// Mapped type with conditional transformations
type MapDeep_9<T, D extends number = 9> = D extends 0
  ? T
  : T extends object
    ? { [K in keyof T]: MapDeep_9<T[K], Prev[D]> }
    : T extends Array<infer U>
      ? MapDeep_9<U, Prev[D]>[]
      : Transform_9<T, D>;

// String manipulation types (expensive)
type Split_9<S extends string, D extends string = ''> = 
  S extends `${infer H}${D}${infer T}` 
    ? [H, ...Split_9<T, D>] 
    : S extends '' 
      ? [] 
      : [S];

type Join_9<T extends string[], D extends string = ''> = 
  T extends [] 
    ? '' 
    : T extends [infer F extends string] 
      ? F 
      : T extends [infer F extends string, ...infer R extends string[]] 
        ? `${F}${D}${Join_9<R, D>}` 
        : never;

// Permutation type (exponential complexity, but bounded)
type Permutation_9<T, K = T> = [T] extends [never]
  ? []
  : K extends K
    ? [K, ...Permutation_9<Exclude<T, K>>]
    : never;

// Complex interface using all the above
interface ComplexData_9<T = unknown> {
  id: string;
  data: DeepObject_9<T>;
  transformed: Transform_9<T>;
  flattened: T extends Array<unknown> ? Flatten_9<T> : T;
  mapped: MapDeep_9<T>;
  meta: {
    index: 9;
    depth: 9;
    timestamp: number;
  };
}

// Type that forces evaluation of all nested types
type ForceEval_9<T> = T extends object
  ? { [K in keyof T]: ForceEval_9<T[K]> }
  : T;

// Export types to ensure they're checked
export type {
  DeepObject_9,
  Flatten_9,
  Transform_9,
  MapDeep_9,
  Split_9,
  Join_9,
  Permutation_9,
  ComplexData_9,
  ForceEval_9,
};

// Force type instantiation with concrete types
type _Test1_9 = ForceEval_9<ComplexData_9<string>>;
type _Test2_9 = ForceEval_9<ComplexData_9<number[]>>;
type _Test3_9 = ForceEval_9<ComplexData_9<{ a: string; b: number; c: boolean }>>;
type _Test4_9 = ForceEval_9<Transform_9<'hello'>>;
type _Test5_9 = ForceEval_9<MapDeep_9<{ nested: { deep: { value: string } } }>>;

// Verify types are used (prevents dead code elimination)
declare const _verify_9: _Test1_9 & _Test2_9 & _Test3_9 & _Test4_9 & _Test5_9;
