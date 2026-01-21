// Complex type file 61 - forces expensive TypeScript type inference
// This file takes ~2-3 seconds to type-check but uses minimal memory

// Recursive type builders
type Prev = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

// Deep recursive object type
type DeepObject_61<T, D extends number = 9> = D extends 0
  ? T
  : { value: T; nested: DeepObject_61<T, Prev[D]>; meta: { depth: D; index: 61 } };

// Recursive array flattening
type Flatten_61<T> = T extends Array<infer U>
  ? U extends Array<unknown>
    ? Flatten_61<U>
    : U
  : T;

// Complex conditional type chain
type Transform_61<T, D extends number = 9> = D extends 0
  ? T
  : T extends string
    ? Transform_61<`[${T}]`, Prev[D]>
    : T extends number
      ? Transform_61<[T, T], Prev[D]>
      : T extends boolean
        ? Transform_61<{ flag: T }, Prev[D]>
        : T extends object
          ? Transform_61<{ wrapped: T; level: D }, Prev[D]>
          : T;

// Union to tuple conversion (expensive)
type UnionToIntersection_61<U> = 
  (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOfUnion_61<T> = 
  UnionToIntersection_61<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type UnionToTuple_61<T, L = LastOfUnion_61<T>, N = [T] extends [never] ? true : false> = 
  true extends N ? [] : [...UnionToTuple_61<Exclude<T, L>>, L];

// Mapped type with conditional transformations
type MapDeep_61<T, D extends number = 9> = D extends 0
  ? T
  : T extends object
    ? { [K in keyof T]: MapDeep_61<T[K], Prev[D]> }
    : T extends Array<infer U>
      ? MapDeep_61<U, Prev[D]>[]
      : Transform_61<T, D>;

// String manipulation types (expensive)
type Split_61<S extends string, D extends string = ''> = 
  S extends `${infer H}${D}${infer T}` 
    ? [H, ...Split_61<T, D>] 
    : S extends '' 
      ? [] 
      : [S];

type Join_61<T extends string[], D extends string = ''> = 
  T extends [] 
    ? '' 
    : T extends [infer F extends string] 
      ? F 
      : T extends [infer F extends string, ...infer R extends string[]] 
        ? `${F}${D}${Join_61<R, D>}` 
        : never;

// Permutation type (exponential complexity, but bounded)
type Permutation_61<T, K = T> = [T] extends [never]
  ? []
  : K extends K
    ? [K, ...Permutation_61<Exclude<T, K>>]
    : never;

// Complex interface using all the above
interface ComplexData_61<T = unknown> {
  id: string;
  data: DeepObject_61<T>;
  transformed: Transform_61<T>;
  flattened: T extends Array<unknown> ? Flatten_61<T> : T;
  mapped: MapDeep_61<T>;
  meta: {
    index: 61;
    depth: 9;
    timestamp: number;
  };
}

// Type that forces evaluation of all nested types
type ForceEval_61<T> = T extends object
  ? { [K in keyof T]: ForceEval_61<T[K]> }
  : T;

// Export types to ensure they're checked
export type {
  DeepObject_61,
  Flatten_61,
  Transform_61,
  MapDeep_61,
  Split_61,
  Join_61,
  Permutation_61,
  ComplexData_61,
  ForceEval_61,
};

// Force type instantiation with concrete types
type _Test1_61 = ForceEval_61<ComplexData_61<string>>;
type _Test2_61 = ForceEval_61<ComplexData_61<number[]>>;
type _Test3_61 = ForceEval_61<ComplexData_61<{ a: string; b: number; c: boolean }>>;
type _Test4_61 = ForceEval_61<Transform_61<'hello'>>;
type _Test5_61 = ForceEval_61<MapDeep_61<{ nested: { deep: { value: string } } }>>;

// Verify types are used (prevents dead code elimination)
declare const _verify_61: _Test1_61 & _Test2_61 & _Test3_61 & _Test4_61 & _Test5_61;
