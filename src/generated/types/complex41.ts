// Complex type file 41 - forces expensive TypeScript type inference
// This file takes ~2-3 seconds to type-check but uses minimal memory

// Recursive type builders
type Prev = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

// Deep recursive object type
type DeepObject_41<T, D extends number = 9> = D extends 0
  ? T
  : { value: T; nested: DeepObject_41<T, Prev[D]>; meta: { depth: D; index: 41 } };

// Recursive array flattening
type Flatten_41<T> = T extends Array<infer U>
  ? U extends Array<unknown>
    ? Flatten_41<U>
    : U
  : T;

// Complex conditional type chain
type Transform_41<T, D extends number = 9> = D extends 0
  ? T
  : T extends string
    ? Transform_41<`[${T}]`, Prev[D]>
    : T extends number
      ? Transform_41<[T, T], Prev[D]>
      : T extends boolean
        ? Transform_41<{ flag: T }, Prev[D]>
        : T extends object
          ? Transform_41<{ wrapped: T; level: D }, Prev[D]>
          : T;

// Union to tuple conversion (expensive)
type UnionToIntersection_41<U> = 
  (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOfUnion_41<T> = 
  UnionToIntersection_41<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type UnionToTuple_41<T, L = LastOfUnion_41<T>, N = [T] extends [never] ? true : false> = 
  true extends N ? [] : [...UnionToTuple_41<Exclude<T, L>>, L];

// Mapped type with conditional transformations
type MapDeep_41<T, D extends number = 9> = D extends 0
  ? T
  : T extends object
    ? { [K in keyof T]: MapDeep_41<T[K], Prev[D]> }
    : T extends Array<infer U>
      ? MapDeep_41<U, Prev[D]>[]
      : Transform_41<T, D>;

// String manipulation types (expensive)
type Split_41<S extends string, D extends string = ''> = 
  S extends `${infer H}${D}${infer T}` 
    ? [H, ...Split_41<T, D>] 
    : S extends '' 
      ? [] 
      : [S];

type Join_41<T extends string[], D extends string = ''> = 
  T extends [] 
    ? '' 
    : T extends [infer F extends string] 
      ? F 
      : T extends [infer F extends string, ...infer R extends string[]] 
        ? `${F}${D}${Join_41<R, D>}` 
        : never;

// Permutation type (exponential complexity, but bounded)
type Permutation_41<T, K = T> = [T] extends [never]
  ? []
  : K extends K
    ? [K, ...Permutation_41<Exclude<T, K>>]
    : never;

// Complex interface using all the above
interface ComplexData_41<T = unknown> {
  id: string;
  data: DeepObject_41<T>;
  transformed: Transform_41<T>;
  flattened: T extends Array<unknown> ? Flatten_41<T> : T;
  mapped: MapDeep_41<T>;
  meta: {
    index: 41;
    depth: 9;
    timestamp: number;
  };
}

// Type that forces evaluation of all nested types
type ForceEval_41<T> = T extends object
  ? { [K in keyof T]: ForceEval_41<T[K]> }
  : T;

// Export types to ensure they're checked
export type {
  DeepObject_41,
  Flatten_41,
  Transform_41,
  MapDeep_41,
  Split_41,
  Join_41,
  Permutation_41,
  ComplexData_41,
  ForceEval_41,
};

// Force type instantiation with concrete types
type _Test1_41 = ForceEval_41<ComplexData_41<string>>;
type _Test2_41 = ForceEval_41<ComplexData_41<number[]>>;
type _Test3_41 = ForceEval_41<ComplexData_41<{ a: string; b: number; c: boolean }>>;
type _Test4_41 = ForceEval_41<Transform_41<'hello'>>;
type _Test5_41 = ForceEval_41<MapDeep_41<{ nested: { deep: { value: string } } }>>;

// Verify types are used (prevents dead code elimination)
declare const _verify_41: _Test1_41 & _Test2_41 & _Test3_41 & _Test4_41 & _Test5_41;
