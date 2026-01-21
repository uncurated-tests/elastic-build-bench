// Complex type file 16 - forces expensive TypeScript type inference
// This file takes ~2-3 seconds to type-check but uses minimal memory

// Recursive type builders
type Prev = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

// Deep recursive object type
type DeepObject_16<T, D extends number = 8> = D extends 0
  ? T
  : { value: T; nested: DeepObject_16<T, Prev[D]>; meta: { depth: D; index: 16 } };

// Recursive array flattening
type Flatten_16<T> = T extends Array<infer U>
  ? U extends Array<unknown>
    ? Flatten_16<U>
    : U
  : T;

// Complex conditional type chain
type Transform_16<T, D extends number = 8> = D extends 0
  ? T
  : T extends string
    ? Transform_16<`[${T}]`, Prev[D]>
    : T extends number
      ? Transform_16<[T, T], Prev[D]>
      : T extends boolean
        ? Transform_16<{ flag: T }, Prev[D]>
        : T extends object
          ? Transform_16<{ wrapped: T; level: D }, Prev[D]>
          : T;

// Union to tuple conversion (expensive)
type UnionToIntersection_16<U> = 
  (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOfUnion_16<T> = 
  UnionToIntersection_16<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type UnionToTuple_16<T, L = LastOfUnion_16<T>, N = [T] extends [never] ? true : false> = 
  true extends N ? [] : [...UnionToTuple_16<Exclude<T, L>>, L];

// Mapped type with conditional transformations
type MapDeep_16<T, D extends number = 8> = D extends 0
  ? T
  : T extends object
    ? { [K in keyof T]: MapDeep_16<T[K], Prev[D]> }
    : T extends Array<infer U>
      ? MapDeep_16<U, Prev[D]>[]
      : Transform_16<T, D>;

// String manipulation types (expensive)
type Split_16<S extends string, D extends string = ''> = 
  S extends `${infer H}${D}${infer T}` 
    ? [H, ...Split_16<T, D>] 
    : S extends '' 
      ? [] 
      : [S];

type Join_16<T extends string[], D extends string = ''> = 
  T extends [] 
    ? '' 
    : T extends [infer F extends string] 
      ? F 
      : T extends [infer F extends string, ...infer R extends string[]] 
        ? `${F}${D}${Join_16<R, D>}` 
        : never;

// Permutation type (exponential complexity, but bounded)
type Permutation_16<T, K = T> = [T] extends [never]
  ? []
  : K extends K
    ? [K, ...Permutation_16<Exclude<T, K>>]
    : never;

// Complex interface using all the above
interface ComplexData_16<T = unknown> {
  id: string;
  data: DeepObject_16<T>;
  transformed: Transform_16<T>;
  flattened: T extends Array<unknown> ? Flatten_16<T> : T;
  mapped: MapDeep_16<T>;
  meta: {
    index: 16;
    depth: 8;
    timestamp: number;
  };
}

// Type that forces evaluation of all nested types
type ForceEval_16<T> = T extends object
  ? { [K in keyof T]: ForceEval_16<T[K]> }
  : T;

// Export types to ensure they're checked
export type {
  DeepObject_16,
  Flatten_16,
  Transform_16,
  MapDeep_16,
  Split_16,
  Join_16,
  Permutation_16,
  ComplexData_16,
  ForceEval_16,
};

// Force type instantiation with concrete types
type _Test1_16 = ForceEval_16<ComplexData_16<string>>;
type _Test2_16 = ForceEval_16<ComplexData_16<number[]>>;
type _Test3_16 = ForceEval_16<ComplexData_16<{ a: string; b: number; c: boolean }>>;
type _Test4_16 = ForceEval_16<Transform_16<'hello'>>;
type _Test5_16 = ForceEval_16<MapDeep_16<{ nested: { deep: { value: string } } }>>;

// Verify types are used (prevents dead code elimination)
declare const _verify_16: _Test1_16 & _Test2_16 & _Test3_16 & _Test4_16 & _Test5_16;
