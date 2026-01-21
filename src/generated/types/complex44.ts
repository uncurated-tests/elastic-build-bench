// Complex type file 44 - forces expensive TypeScript type inference
// This file takes ~2-3 seconds to type-check but uses minimal memory

// Recursive type builders
type Prev = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

// Deep recursive object type
type DeepObject_44<T, D extends number = 8> = D extends 0
  ? T
  : { value: T; nested: DeepObject_44<T, Prev[D]>; meta: { depth: D; index: 44 } };

// Recursive array flattening
type Flatten_44<T> = T extends Array<infer U>
  ? U extends Array<unknown>
    ? Flatten_44<U>
    : U
  : T;

// Complex conditional type chain
type Transform_44<T, D extends number = 8> = D extends 0
  ? T
  : T extends string
    ? Transform_44<`[${T}]`, Prev[D]>
    : T extends number
      ? Transform_44<[T, T], Prev[D]>
      : T extends boolean
        ? Transform_44<{ flag: T }, Prev[D]>
        : T extends object
          ? Transform_44<{ wrapped: T; level: D }, Prev[D]>
          : T;

// Union to tuple conversion (expensive)
type UnionToIntersection_44<U> = 
  (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOfUnion_44<T> = 
  UnionToIntersection_44<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type UnionToTuple_44<T, L = LastOfUnion_44<T>, N = [T] extends [never] ? true : false> = 
  true extends N ? [] : [...UnionToTuple_44<Exclude<T, L>>, L];

// Mapped type with conditional transformations
type MapDeep_44<T, D extends number = 8> = D extends 0
  ? T
  : T extends object
    ? { [K in keyof T]: MapDeep_44<T[K], Prev[D]> }
    : T extends Array<infer U>
      ? MapDeep_44<U, Prev[D]>[]
      : Transform_44<T, D>;

// String manipulation types (expensive)
type Split_44<S extends string, D extends string = ''> = 
  S extends `${infer H}${D}${infer T}` 
    ? [H, ...Split_44<T, D>] 
    : S extends '' 
      ? [] 
      : [S];

type Join_44<T extends string[], D extends string = ''> = 
  T extends [] 
    ? '' 
    : T extends [infer F extends string] 
      ? F 
      : T extends [infer F extends string, ...infer R extends string[]] 
        ? `${F}${D}${Join_44<R, D>}` 
        : never;

// Permutation type (exponential complexity, but bounded)
type Permutation_44<T, K = T> = [T] extends [never]
  ? []
  : K extends K
    ? [K, ...Permutation_44<Exclude<T, K>>]
    : never;

// Complex interface using all the above
interface ComplexData_44<T = unknown> {
  id: string;
  data: DeepObject_44<T>;
  transformed: Transform_44<T>;
  flattened: T extends Array<unknown> ? Flatten_44<T> : T;
  mapped: MapDeep_44<T>;
  meta: {
    index: 44;
    depth: 8;
    timestamp: number;
  };
}

// Type that forces evaluation of all nested types
type ForceEval_44<T> = T extends object
  ? { [K in keyof T]: ForceEval_44<T[K]> }
  : T;

// Export types to ensure they're checked
export type {
  DeepObject_44,
  Flatten_44,
  Transform_44,
  MapDeep_44,
  Split_44,
  Join_44,
  Permutation_44,
  ComplexData_44,
  ForceEval_44,
};

// Force type instantiation with concrete types
type _Test1_44 = ForceEval_44<ComplexData_44<string>>;
type _Test2_44 = ForceEval_44<ComplexData_44<number[]>>;
type _Test3_44 = ForceEval_44<ComplexData_44<{ a: string; b: number; c: boolean }>>;
type _Test4_44 = ForceEval_44<Transform_44<'hello'>>;
type _Test5_44 = ForceEval_44<MapDeep_44<{ nested: { deep: { value: string } } }>>;

// Verify types are used (prevents dead code elimination)
declare const _verify_44: _Test1_44 & _Test2_44 & _Test3_44 & _Test4_44 & _Test5_44;
