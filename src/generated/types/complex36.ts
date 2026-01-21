// Complex type file 36 - forces expensive TypeScript type inference
// This file takes ~2-3 seconds to type-check but uses minimal memory

// Recursive type builders
type Prev = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

// Deep recursive object type
type DeepObject_36<T, D extends number = 8> = D extends 0
  ? T
  : { value: T; nested: DeepObject_36<T, Prev[D]>; meta: { depth: D; index: 36 } };

// Recursive array flattening
type Flatten_36<T> = T extends Array<infer U>
  ? U extends Array<unknown>
    ? Flatten_36<U>
    : U
  : T;

// Complex conditional type chain
type Transform_36<T, D extends number = 8> = D extends 0
  ? T
  : T extends string
    ? Transform_36<`[${T}]`, Prev[D]>
    : T extends number
      ? Transform_36<[T, T], Prev[D]>
      : T extends boolean
        ? Transform_36<{ flag: T }, Prev[D]>
        : T extends object
          ? Transform_36<{ wrapped: T; level: D }, Prev[D]>
          : T;

// Union to tuple conversion (expensive)
type UnionToIntersection_36<U> = 
  (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOfUnion_36<T> = 
  UnionToIntersection_36<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type UnionToTuple_36<T, L = LastOfUnion_36<T>, N = [T] extends [never] ? true : false> = 
  true extends N ? [] : [...UnionToTuple_36<Exclude<T, L>>, L];

// Mapped type with conditional transformations
type MapDeep_36<T, D extends number = 8> = D extends 0
  ? T
  : T extends object
    ? { [K in keyof T]: MapDeep_36<T[K], Prev[D]> }
    : T extends Array<infer U>
      ? MapDeep_36<U, Prev[D]>[]
      : Transform_36<T, D>;

// String manipulation types (expensive)
type Split_36<S extends string, D extends string = ''> = 
  S extends `${infer H}${D}${infer T}` 
    ? [H, ...Split_36<T, D>] 
    : S extends '' 
      ? [] 
      : [S];

type Join_36<T extends string[], D extends string = ''> = 
  T extends [] 
    ? '' 
    : T extends [infer F extends string] 
      ? F 
      : T extends [infer F extends string, ...infer R extends string[]] 
        ? `${F}${D}${Join_36<R, D>}` 
        : never;

// Permutation type (exponential complexity, but bounded)
type Permutation_36<T, K = T> = [T] extends [never]
  ? []
  : K extends K
    ? [K, ...Permutation_36<Exclude<T, K>>]
    : never;

// Complex interface using all the above
interface ComplexData_36<T = unknown> {
  id: string;
  data: DeepObject_36<T>;
  transformed: Transform_36<T>;
  flattened: T extends Array<unknown> ? Flatten_36<T> : T;
  mapped: MapDeep_36<T>;
  meta: {
    index: 36;
    depth: 8;
    timestamp: number;
  };
}

// Type that forces evaluation of all nested types
type ForceEval_36<T> = T extends object
  ? { [K in keyof T]: ForceEval_36<T[K]> }
  : T;

// Export types to ensure they're checked
export type {
  DeepObject_36,
  Flatten_36,
  Transform_36,
  MapDeep_36,
  Split_36,
  Join_36,
  Permutation_36,
  ComplexData_36,
  ForceEval_36,
};

// Force type instantiation with concrete types
type _Test1_36 = ForceEval_36<ComplexData_36<string>>;
type _Test2_36 = ForceEval_36<ComplexData_36<number[]>>;
type _Test3_36 = ForceEval_36<ComplexData_36<{ a: string; b: number; c: boolean }>>;
type _Test4_36 = ForceEval_36<Transform_36<'hello'>>;
type _Test5_36 = ForceEval_36<MapDeep_36<{ nested: { deep: { value: string } } }>>;

// Verify types are used (prevents dead code elimination)
declare const _verify_36: _Test1_36 & _Test2_36 & _Test3_36 & _Test4_36 & _Test5_36;
