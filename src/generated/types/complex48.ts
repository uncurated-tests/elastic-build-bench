// Complex type file 48 - forces expensive TypeScript type inference
// This file takes ~2-3 seconds to type-check but uses minimal memory

// Recursive type builders
type Prev = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

// Deep recursive object type
type DeepObject_48<T, D extends number = 8> = D extends 0
  ? T
  : { value: T; nested: DeepObject_48<T, Prev[D]>; meta: { depth: D; index: 48 } };

// Recursive array flattening
type Flatten_48<T> = T extends Array<infer U>
  ? U extends Array<unknown>
    ? Flatten_48<U>
    : U
  : T;

// Complex conditional type chain
type Transform_48<T, D extends number = 8> = D extends 0
  ? T
  : T extends string
    ? Transform_48<`[${T}]`, Prev[D]>
    : T extends number
      ? Transform_48<[T, T], Prev[D]>
      : T extends boolean
        ? Transform_48<{ flag: T }, Prev[D]>
        : T extends object
          ? Transform_48<{ wrapped: T; level: D }, Prev[D]>
          : T;

// Union to tuple conversion (expensive)
type UnionToIntersection_48<U> = 
  (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOfUnion_48<T> = 
  UnionToIntersection_48<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type UnionToTuple_48<T, L = LastOfUnion_48<T>, N = [T] extends [never] ? true : false> = 
  true extends N ? [] : [...UnionToTuple_48<Exclude<T, L>>, L];

// Mapped type with conditional transformations
type MapDeep_48<T, D extends number = 8> = D extends 0
  ? T
  : T extends object
    ? { [K in keyof T]: MapDeep_48<T[K], Prev[D]> }
    : T extends Array<infer U>
      ? MapDeep_48<U, Prev[D]>[]
      : Transform_48<T, D>;

// String manipulation types (expensive)
type Split_48<S extends string, D extends string = ''> = 
  S extends `${infer H}${D}${infer T}` 
    ? [H, ...Split_48<T, D>] 
    : S extends '' 
      ? [] 
      : [S];

type Join_48<T extends string[], D extends string = ''> = 
  T extends [] 
    ? '' 
    : T extends [infer F extends string] 
      ? F 
      : T extends [infer F extends string, ...infer R extends string[]] 
        ? `${F}${D}${Join_48<R, D>}` 
        : never;

// Permutation type (exponential complexity, but bounded)
type Permutation_48<T, K = T> = [T] extends [never]
  ? []
  : K extends K
    ? [K, ...Permutation_48<Exclude<T, K>>]
    : never;

// Complex interface using all the above
interface ComplexData_48<T = unknown> {
  id: string;
  data: DeepObject_48<T>;
  transformed: Transform_48<T>;
  flattened: T extends Array<unknown> ? Flatten_48<T> : T;
  mapped: MapDeep_48<T>;
  meta: {
    index: 48;
    depth: 8;
    timestamp: number;
  };
}

// Type that forces evaluation of all nested types
type ForceEval_48<T> = T extends object
  ? { [K in keyof T]: ForceEval_48<T[K]> }
  : T;

// Export types to ensure they're checked
export type {
  DeepObject_48,
  Flatten_48,
  Transform_48,
  MapDeep_48,
  Split_48,
  Join_48,
  Permutation_48,
  ComplexData_48,
  ForceEval_48,
};

// Force type instantiation with concrete types
type _Test1_48 = ForceEval_48<ComplexData_48<string>>;
type _Test2_48 = ForceEval_48<ComplexData_48<number[]>>;
type _Test3_48 = ForceEval_48<ComplexData_48<{ a: string; b: number; c: boolean }>>;
type _Test4_48 = ForceEval_48<Transform_48<'hello'>>;
type _Test5_48 = ForceEval_48<MapDeep_48<{ nested: { deep: { value: string } } }>>;

// Verify types are used (prevents dead code elimination)
declare const _verify_48: _Test1_48 & _Test2_48 & _Test3_48 & _Test4_48 & _Test5_48;
