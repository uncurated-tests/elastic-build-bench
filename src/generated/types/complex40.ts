// Complex type file 40 - forces expensive TypeScript type inference
// This file takes ~2-3 seconds to type-check but uses minimal memory

// Recursive type builders
type Prev = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

// Deep recursive object type
type DeepObject_40<T, D extends number = 8> = D extends 0
  ? T
  : { value: T; nested: DeepObject_40<T, Prev[D]>; meta: { depth: D; index: 40 } };

// Recursive array flattening
type Flatten_40<T> = T extends Array<infer U>
  ? U extends Array<unknown>
    ? Flatten_40<U>
    : U
  : T;

// Complex conditional type chain
type Transform_40<T, D extends number = 8> = D extends 0
  ? T
  : T extends string
    ? Transform_40<`[${T}]`, Prev[D]>
    : T extends number
      ? Transform_40<[T, T], Prev[D]>
      : T extends boolean
        ? Transform_40<{ flag: T }, Prev[D]>
        : T extends object
          ? Transform_40<{ wrapped: T; level: D }, Prev[D]>
          : T;

// Union to tuple conversion (expensive)
type UnionToIntersection_40<U> = 
  (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOfUnion_40<T> = 
  UnionToIntersection_40<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type UnionToTuple_40<T, L = LastOfUnion_40<T>, N = [T] extends [never] ? true : false> = 
  true extends N ? [] : [...UnionToTuple_40<Exclude<T, L>>, L];

// Mapped type with conditional transformations
type MapDeep_40<T, D extends number = 8> = D extends 0
  ? T
  : T extends object
    ? { [K in keyof T]: MapDeep_40<T[K], Prev[D]> }
    : T extends Array<infer U>
      ? MapDeep_40<U, Prev[D]>[]
      : Transform_40<T, D>;

// String manipulation types (expensive)
type Split_40<S extends string, D extends string = ''> = 
  S extends `${infer H}${D}${infer T}` 
    ? [H, ...Split_40<T, D>] 
    : S extends '' 
      ? [] 
      : [S];

type Join_40<T extends string[], D extends string = ''> = 
  T extends [] 
    ? '' 
    : T extends [infer F extends string] 
      ? F 
      : T extends [infer F extends string, ...infer R extends string[]] 
        ? `${F}${D}${Join_40<R, D>}` 
        : never;

// Permutation type (exponential complexity, but bounded)
type Permutation_40<T, K = T> = [T] extends [never]
  ? []
  : K extends K
    ? [K, ...Permutation_40<Exclude<T, K>>]
    : never;

// Complex interface using all the above
interface ComplexData_40<T = unknown> {
  id: string;
  data: DeepObject_40<T>;
  transformed: Transform_40<T>;
  flattened: T extends Array<unknown> ? Flatten_40<T> : T;
  mapped: MapDeep_40<T>;
  meta: {
    index: 40;
    depth: 8;
    timestamp: number;
  };
}

// Type that forces evaluation of all nested types
type ForceEval_40<T> = T extends object
  ? { [K in keyof T]: ForceEval_40<T[K]> }
  : T;

// Export types to ensure they're checked
export type {
  DeepObject_40,
  Flatten_40,
  Transform_40,
  MapDeep_40,
  Split_40,
  Join_40,
  Permutation_40,
  ComplexData_40,
  ForceEval_40,
};

// Force type instantiation with concrete types
type _Test1_40 = ForceEval_40<ComplexData_40<string>>;
type _Test2_40 = ForceEval_40<ComplexData_40<number[]>>;
type _Test3_40 = ForceEval_40<ComplexData_40<{ a: string; b: number; c: boolean }>>;
type _Test4_40 = ForceEval_40<Transform_40<'hello'>>;
type _Test5_40 = ForceEval_40<MapDeep_40<{ nested: { deep: { value: string } } }>>;

// Verify types are used (prevents dead code elimination)
declare const _verify_40: _Test1_40 & _Test2_40 & _Test3_40 & _Test4_40 & _Test5_40;
