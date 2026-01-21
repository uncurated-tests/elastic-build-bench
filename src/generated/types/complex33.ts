// Complex type file 33 - forces expensive TypeScript type inference
// This file takes ~2-3 seconds to type-check but uses minimal memory

// Recursive type builders
type Prev = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

// Deep recursive object type
type DeepObject_33<T, D extends number = 9> = D extends 0
  ? T
  : { value: T; nested: DeepObject_33<T, Prev[D]>; meta: { depth: D; index: 33 } };

// Recursive array flattening
type Flatten_33<T> = T extends Array<infer U>
  ? U extends Array<unknown>
    ? Flatten_33<U>
    : U
  : T;

// Complex conditional type chain
type Transform_33<T, D extends number = 9> = D extends 0
  ? T
  : T extends string
    ? Transform_33<`[${T}]`, Prev[D]>
    : T extends number
      ? Transform_33<[T, T], Prev[D]>
      : T extends boolean
        ? Transform_33<{ flag: T }, Prev[D]>
        : T extends object
          ? Transform_33<{ wrapped: T; level: D }, Prev[D]>
          : T;

// Union to tuple conversion (expensive)
type UnionToIntersection_33<U> = 
  (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOfUnion_33<T> = 
  UnionToIntersection_33<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type UnionToTuple_33<T, L = LastOfUnion_33<T>, N = [T] extends [never] ? true : false> = 
  true extends N ? [] : [...UnionToTuple_33<Exclude<T, L>>, L];

// Mapped type with conditional transformations
type MapDeep_33<T, D extends number = 9> = D extends 0
  ? T
  : T extends object
    ? { [K in keyof T]: MapDeep_33<T[K], Prev[D]> }
    : T extends Array<infer U>
      ? MapDeep_33<U, Prev[D]>[]
      : Transform_33<T, D>;

// String manipulation types (expensive)
type Split_33<S extends string, D extends string = ''> = 
  S extends `${infer H}${D}${infer T}` 
    ? [H, ...Split_33<T, D>] 
    : S extends '' 
      ? [] 
      : [S];

type Join_33<T extends string[], D extends string = ''> = 
  T extends [] 
    ? '' 
    : T extends [infer F extends string] 
      ? F 
      : T extends [infer F extends string, ...infer R extends string[]] 
        ? `${F}${D}${Join_33<R, D>}` 
        : never;

// Permutation type (exponential complexity, but bounded)
type Permutation_33<T, K = T> = [T] extends [never]
  ? []
  : K extends K
    ? [K, ...Permutation_33<Exclude<T, K>>]
    : never;

// Complex interface using all the above
interface ComplexData_33<T = unknown> {
  id: string;
  data: DeepObject_33<T>;
  transformed: Transform_33<T>;
  flattened: T extends Array<unknown> ? Flatten_33<T> : T;
  mapped: MapDeep_33<T>;
  meta: {
    index: 33;
    depth: 9;
    timestamp: number;
  };
}

// Type that forces evaluation of all nested types
type ForceEval_33<T> = T extends object
  ? { [K in keyof T]: ForceEval_33<T[K]> }
  : T;

// Export types to ensure they're checked
export type {
  DeepObject_33,
  Flatten_33,
  Transform_33,
  MapDeep_33,
  Split_33,
  Join_33,
  Permutation_33,
  ComplexData_33,
  ForceEval_33,
};

// Force type instantiation with concrete types
type _Test1_33 = ForceEval_33<ComplexData_33<string>>;
type _Test2_33 = ForceEval_33<ComplexData_33<number[]>>;
type _Test3_33 = ForceEval_33<ComplexData_33<{ a: string; b: number; c: boolean }>>;
type _Test4_33 = ForceEval_33<Transform_33<'hello'>>;
type _Test5_33 = ForceEval_33<MapDeep_33<{ nested: { deep: { value: string } } }>>;

// Verify types are used (prevents dead code elimination)
declare const _verify_33: _Test1_33 & _Test2_33 & _Test3_33 & _Test4_33 & _Test5_33;
