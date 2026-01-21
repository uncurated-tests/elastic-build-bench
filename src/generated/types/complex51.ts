// Complex type file 51 - forces expensive TypeScript type inference
// This file takes ~2-3 seconds to type-check but uses minimal memory

// Recursive type builders
type Prev = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

// Deep recursive object type
type DeepObject_51<T, D extends number = 11> = D extends 0
  ? T
  : { value: T; nested: DeepObject_51<T, Prev[D]>; meta: { depth: D; index: 51 } };

// Recursive array flattening
type Flatten_51<T> = T extends Array<infer U>
  ? U extends Array<unknown>
    ? Flatten_51<U>
    : U
  : T;

// Complex conditional type chain
type Transform_51<T, D extends number = 11> = D extends 0
  ? T
  : T extends string
    ? Transform_51<`[${T}]`, Prev[D]>
    : T extends number
      ? Transform_51<[T, T], Prev[D]>
      : T extends boolean
        ? Transform_51<{ flag: T }, Prev[D]>
        : T extends object
          ? Transform_51<{ wrapped: T; level: D }, Prev[D]>
          : T;

// Union to tuple conversion (expensive)
type UnionToIntersection_51<U> = 
  (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOfUnion_51<T> = 
  UnionToIntersection_51<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type UnionToTuple_51<T, L = LastOfUnion_51<T>, N = [T] extends [never] ? true : false> = 
  true extends N ? [] : [...UnionToTuple_51<Exclude<T, L>>, L];

// Mapped type with conditional transformations
type MapDeep_51<T, D extends number = 11> = D extends 0
  ? T
  : T extends object
    ? { [K in keyof T]: MapDeep_51<T[K], Prev[D]> }
    : T extends Array<infer U>
      ? MapDeep_51<U, Prev[D]>[]
      : Transform_51<T, D>;

// String manipulation types (expensive)
type Split_51<S extends string, D extends string = ''> = 
  S extends `${infer H}${D}${infer T}` 
    ? [H, ...Split_51<T, D>] 
    : S extends '' 
      ? [] 
      : [S];

type Join_51<T extends string[], D extends string = ''> = 
  T extends [] 
    ? '' 
    : T extends [infer F extends string] 
      ? F 
      : T extends [infer F extends string, ...infer R extends string[]] 
        ? `${F}${D}${Join_51<R, D>}` 
        : never;

// Permutation type (exponential complexity, but bounded)
type Permutation_51<T, K = T> = [T] extends [never]
  ? []
  : K extends K
    ? [K, ...Permutation_51<Exclude<T, K>>]
    : never;

// Complex interface using all the above
interface ComplexData_51<T = unknown> {
  id: string;
  data: DeepObject_51<T>;
  transformed: Transform_51<T>;
  flattened: T extends Array<unknown> ? Flatten_51<T> : T;
  mapped: MapDeep_51<T>;
  meta: {
    index: 51;
    depth: 11;
    timestamp: number;
  };
}

// Type that forces evaluation of all nested types
type ForceEval_51<T> = T extends object
  ? { [K in keyof T]: ForceEval_51<T[K]> }
  : T;

// Export types to ensure they're checked
export type {
  DeepObject_51,
  Flatten_51,
  Transform_51,
  MapDeep_51,
  Split_51,
  Join_51,
  Permutation_51,
  ComplexData_51,
  ForceEval_51,
};

// Force type instantiation with concrete types
type _Test1_51 = ForceEval_51<ComplexData_51<string>>;
type _Test2_51 = ForceEval_51<ComplexData_51<number[]>>;
type _Test3_51 = ForceEval_51<ComplexData_51<{ a: string; b: number; c: boolean }>>;
type _Test4_51 = ForceEval_51<Transform_51<'hello'>>;
type _Test5_51 = ForceEval_51<MapDeep_51<{ nested: { deep: { value: string } } }>>;

// Verify types are used (prevents dead code elimination)
declare const _verify_51: _Test1_51 & _Test2_51 & _Test3_51 & _Test4_51 & _Test5_51;
