// Complex type file 76 - forces expensive TypeScript type inference
// This file takes ~2-3 seconds to type-check but uses minimal memory

// Recursive type builders
type Prev = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

// Deep recursive object type
type DeepObject_76<T, D extends number = 8> = D extends 0
  ? T
  : { value: T; nested: DeepObject_76<T, Prev[D]>; meta: { depth: D; index: 76 } };

// Recursive array flattening
type Flatten_76<T> = T extends Array<infer U>
  ? U extends Array<unknown>
    ? Flatten_76<U>
    : U
  : T;

// Complex conditional type chain
type Transform_76<T, D extends number = 8> = D extends 0
  ? T
  : T extends string
    ? Transform_76<`[${T}]`, Prev[D]>
    : T extends number
      ? Transform_76<[T, T], Prev[D]>
      : T extends boolean
        ? Transform_76<{ flag: T }, Prev[D]>
        : T extends object
          ? Transform_76<{ wrapped: T; level: D }, Prev[D]>
          : T;

// Union to tuple conversion (expensive)
type UnionToIntersection_76<U> = 
  (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOfUnion_76<T> = 
  UnionToIntersection_76<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type UnionToTuple_76<T, L = LastOfUnion_76<T>, N = [T] extends [never] ? true : false> = 
  true extends N ? [] : [...UnionToTuple_76<Exclude<T, L>>, L];

// Mapped type with conditional transformations
type MapDeep_76<T, D extends number = 8> = D extends 0
  ? T
  : T extends object
    ? { [K in keyof T]: MapDeep_76<T[K], Prev[D]> }
    : T extends Array<infer U>
      ? MapDeep_76<U, Prev[D]>[]
      : Transform_76<T, D>;

// String manipulation types (expensive)
type Split_76<S extends string, D extends string = ''> = 
  S extends `${infer H}${D}${infer T}` 
    ? [H, ...Split_76<T, D>] 
    : S extends '' 
      ? [] 
      : [S];

type Join_76<T extends string[], D extends string = ''> = 
  T extends [] 
    ? '' 
    : T extends [infer F extends string] 
      ? F 
      : T extends [infer F extends string, ...infer R extends string[]] 
        ? `${F}${D}${Join_76<R, D>}` 
        : never;

// Permutation type (exponential complexity, but bounded)
type Permutation_76<T, K = T> = [T] extends [never]
  ? []
  : K extends K
    ? [K, ...Permutation_76<Exclude<T, K>>]
    : never;

// Complex interface using all the above
interface ComplexData_76<T = unknown> {
  id: string;
  data: DeepObject_76<T>;
  transformed: Transform_76<T>;
  flattened: T extends Array<unknown> ? Flatten_76<T> : T;
  mapped: MapDeep_76<T>;
  meta: {
    index: 76;
    depth: 8;
    timestamp: number;
  };
}

// Type that forces evaluation of all nested types
type ForceEval_76<T> = T extends object
  ? { [K in keyof T]: ForceEval_76<T[K]> }
  : T;

// Export types to ensure they're checked
export type {
  DeepObject_76,
  Flatten_76,
  Transform_76,
  MapDeep_76,
  Split_76,
  Join_76,
  Permutation_76,
  ComplexData_76,
  ForceEval_76,
};

// Force type instantiation with concrete types
type _Test1_76 = ForceEval_76<ComplexData_76<string>>;
type _Test2_76 = ForceEval_76<ComplexData_76<number[]>>;
type _Test3_76 = ForceEval_76<ComplexData_76<{ a: string; b: number; c: boolean }>>;
type _Test4_76 = ForceEval_76<Transform_76<'hello'>>;
type _Test5_76 = ForceEval_76<MapDeep_76<{ nested: { deep: { value: string } } }>>;

// Verify types are used (prevents dead code elimination)
declare const _verify_76: _Test1_76 & _Test2_76 & _Test3_76 & _Test4_76 & _Test5_76;
