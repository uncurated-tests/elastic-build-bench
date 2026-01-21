// Complex type file 25 - forces expensive TypeScript type inference
// This file takes ~2-3 seconds to type-check but uses minimal memory

// Recursive type builders
type Prev = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

// Deep recursive object type
type DeepObject_25<T, D extends number = 9> = D extends 0
  ? T
  : { value: T; nested: DeepObject_25<T, Prev[D]>; meta: { depth: D; index: 25 } };

// Recursive array flattening
type Flatten_25<T> = T extends Array<infer U>
  ? U extends Array<unknown>
    ? Flatten_25<U>
    : U
  : T;

// Complex conditional type chain
type Transform_25<T, D extends number = 9> = D extends 0
  ? T
  : T extends string
    ? Transform_25<`[${T}]`, Prev[D]>
    : T extends number
      ? Transform_25<[T, T], Prev[D]>
      : T extends boolean
        ? Transform_25<{ flag: T }, Prev[D]>
        : T extends object
          ? Transform_25<{ wrapped: T; level: D }, Prev[D]>
          : T;

// Union to tuple conversion (expensive)
type UnionToIntersection_25<U> = 
  (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOfUnion_25<T> = 
  UnionToIntersection_25<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type UnionToTuple_25<T, L = LastOfUnion_25<T>, N = [T] extends [never] ? true : false> = 
  true extends N ? [] : [...UnionToTuple_25<Exclude<T, L>>, L];

// Mapped type with conditional transformations
type MapDeep_25<T, D extends number = 9> = D extends 0
  ? T
  : T extends object
    ? { [K in keyof T]: MapDeep_25<T[K], Prev[D]> }
    : T extends Array<infer U>
      ? MapDeep_25<U, Prev[D]>[]
      : Transform_25<T, D>;

// String manipulation types (expensive)
type Split_25<S extends string, D extends string = ''> = 
  S extends `${infer H}${D}${infer T}` 
    ? [H, ...Split_25<T, D>] 
    : S extends '' 
      ? [] 
      : [S];

type Join_25<T extends string[], D extends string = ''> = 
  T extends [] 
    ? '' 
    : T extends [infer F extends string] 
      ? F 
      : T extends [infer F extends string, ...infer R extends string[]] 
        ? `${F}${D}${Join_25<R, D>}` 
        : never;

// Permutation type (exponential complexity, but bounded)
type Permutation_25<T, K = T> = [T] extends [never]
  ? []
  : K extends K
    ? [K, ...Permutation_25<Exclude<T, K>>]
    : never;

// Complex interface using all the above
interface ComplexData_25<T = unknown> {
  id: string;
  data: DeepObject_25<T>;
  transformed: Transform_25<T>;
  flattened: T extends Array<unknown> ? Flatten_25<T> : T;
  mapped: MapDeep_25<T>;
  meta: {
    index: 25;
    depth: 9;
    timestamp: number;
  };
}

// Type that forces evaluation of all nested types
type ForceEval_25<T> = T extends object
  ? { [K in keyof T]: ForceEval_25<T[K]> }
  : T;

// Export types to ensure they're checked
export type {
  DeepObject_25,
  Flatten_25,
  Transform_25,
  MapDeep_25,
  Split_25,
  Join_25,
  Permutation_25,
  ComplexData_25,
  ForceEval_25,
};

// Force type instantiation with concrete types
type _Test1_25 = ForceEval_25<ComplexData_25<string>>;
type _Test2_25 = ForceEval_25<ComplexData_25<number[]>>;
type _Test3_25 = ForceEval_25<ComplexData_25<{ a: string; b: number; c: boolean }>>;
type _Test4_25 = ForceEval_25<Transform_25<'hello'>>;
type _Test5_25 = ForceEval_25<MapDeep_25<{ nested: { deep: { value: string } } }>>;

// Verify types are used (prevents dead code elimination)
declare const _verify_25: _Test1_25 & _Test2_25 & _Test3_25 & _Test4_25 & _Test5_25;
