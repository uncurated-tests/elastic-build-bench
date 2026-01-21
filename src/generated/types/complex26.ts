// Complex type file 26 - forces expensive TypeScript type inference
// This file takes ~2-3 seconds to type-check but uses minimal memory

// Recursive type builders
type Prev = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

// Deep recursive object type
type DeepObject_26<T, D extends number = 10> = D extends 0
  ? T
  : { value: T; nested: DeepObject_26<T, Prev[D]>; meta: { depth: D; index: 26 } };

// Recursive array flattening
type Flatten_26<T> = T extends Array<infer U>
  ? U extends Array<unknown>
    ? Flatten_26<U>
    : U
  : T;

// Complex conditional type chain
type Transform_26<T, D extends number = 10> = D extends 0
  ? T
  : T extends string
    ? Transform_26<`[${T}]`, Prev[D]>
    : T extends number
      ? Transform_26<[T, T], Prev[D]>
      : T extends boolean
        ? Transform_26<{ flag: T }, Prev[D]>
        : T extends object
          ? Transform_26<{ wrapped: T; level: D }, Prev[D]>
          : T;

// Union to tuple conversion (expensive)
type UnionToIntersection_26<U> = 
  (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOfUnion_26<T> = 
  UnionToIntersection_26<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type UnionToTuple_26<T, L = LastOfUnion_26<T>, N = [T] extends [never] ? true : false> = 
  true extends N ? [] : [...UnionToTuple_26<Exclude<T, L>>, L];

// Mapped type with conditional transformations
type MapDeep_26<T, D extends number = 10> = D extends 0
  ? T
  : T extends object
    ? { [K in keyof T]: MapDeep_26<T[K], Prev[D]> }
    : T extends Array<infer U>
      ? MapDeep_26<U, Prev[D]>[]
      : Transform_26<T, D>;

// String manipulation types (expensive)
type Split_26<S extends string, D extends string = ''> = 
  S extends `${infer H}${D}${infer T}` 
    ? [H, ...Split_26<T, D>] 
    : S extends '' 
      ? [] 
      : [S];

type Join_26<T extends string[], D extends string = ''> = 
  T extends [] 
    ? '' 
    : T extends [infer F extends string] 
      ? F 
      : T extends [infer F extends string, ...infer R extends string[]] 
        ? `${F}${D}${Join_26<R, D>}` 
        : never;

// Permutation type (exponential complexity, but bounded)
type Permutation_26<T, K = T> = [T] extends [never]
  ? []
  : K extends K
    ? [K, ...Permutation_26<Exclude<T, K>>]
    : never;

// Complex interface using all the above
interface ComplexData_26<T = unknown> {
  id: string;
  data: DeepObject_26<T>;
  transformed: Transform_26<T>;
  flattened: T extends Array<unknown> ? Flatten_26<T> : T;
  mapped: MapDeep_26<T>;
  meta: {
    index: 26;
    depth: 10;
    timestamp: number;
  };
}

// Type that forces evaluation of all nested types
type ForceEval_26<T> = T extends object
  ? { [K in keyof T]: ForceEval_26<T[K]> }
  : T;

// Export types to ensure they're checked
export type {
  DeepObject_26,
  Flatten_26,
  Transform_26,
  MapDeep_26,
  Split_26,
  Join_26,
  Permutation_26,
  ComplexData_26,
  ForceEval_26,
};

// Force type instantiation with concrete types
type _Test1_26 = ForceEval_26<ComplexData_26<string>>;
type _Test2_26 = ForceEval_26<ComplexData_26<number[]>>;
type _Test3_26 = ForceEval_26<ComplexData_26<{ a: string; b: number; c: boolean }>>;
type _Test4_26 = ForceEval_26<Transform_26<'hello'>>;
type _Test5_26 = ForceEval_26<MapDeep_26<{ nested: { deep: { value: string } } }>>;

// Verify types are used (prevents dead code elimination)
declare const _verify_26: _Test1_26 & _Test2_26 & _Test3_26 & _Test4_26 & _Test5_26;
