// Complex type file 55 - forces expensive TypeScript type inference
// This file takes ~2-3 seconds to type-check but uses minimal memory

// Recursive type builders
type Prev = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

// Deep recursive object type
type DeepObject_55<T, D extends number = 11> = D extends 0
  ? T
  : { value: T; nested: DeepObject_55<T, Prev[D]>; meta: { depth: D; index: 55 } };

// Recursive array flattening
type Flatten_55<T> = T extends Array<infer U>
  ? U extends Array<unknown>
    ? Flatten_55<U>
    : U
  : T;

// Complex conditional type chain
type Transform_55<T, D extends number = 11> = D extends 0
  ? T
  : T extends string
    ? Transform_55<`[${T}]`, Prev[D]>
    : T extends number
      ? Transform_55<[T, T], Prev[D]>
      : T extends boolean
        ? Transform_55<{ flag: T }, Prev[D]>
        : T extends object
          ? Transform_55<{ wrapped: T; level: D }, Prev[D]>
          : T;

// Union to tuple conversion (expensive)
type UnionToIntersection_55<U> = 
  (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOfUnion_55<T> = 
  UnionToIntersection_55<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type UnionToTuple_55<T, L = LastOfUnion_55<T>, N = [T] extends [never] ? true : false> = 
  true extends N ? [] : [...UnionToTuple_55<Exclude<T, L>>, L];

// Mapped type with conditional transformations
type MapDeep_55<T, D extends number = 11> = D extends 0
  ? T
  : T extends object
    ? { [K in keyof T]: MapDeep_55<T[K], Prev[D]> }
    : T extends Array<infer U>
      ? MapDeep_55<U, Prev[D]>[]
      : Transform_55<T, D>;

// String manipulation types (expensive)
type Split_55<S extends string, D extends string = ''> = 
  S extends `${infer H}${D}${infer T}` 
    ? [H, ...Split_55<T, D>] 
    : S extends '' 
      ? [] 
      : [S];

type Join_55<T extends string[], D extends string = ''> = 
  T extends [] 
    ? '' 
    : T extends [infer F extends string] 
      ? F 
      : T extends [infer F extends string, ...infer R extends string[]] 
        ? `${F}${D}${Join_55<R, D>}` 
        : never;

// Permutation type (exponential complexity, but bounded)
type Permutation_55<T, K = T> = [T] extends [never]
  ? []
  : K extends K
    ? [K, ...Permutation_55<Exclude<T, K>>]
    : never;

// Complex interface using all the above
interface ComplexData_55<T = unknown> {
  id: string;
  data: DeepObject_55<T>;
  transformed: Transform_55<T>;
  flattened: T extends Array<unknown> ? Flatten_55<T> : T;
  mapped: MapDeep_55<T>;
  meta: {
    index: 55;
    depth: 11;
    timestamp: number;
  };
}

// Type that forces evaluation of all nested types
type ForceEval_55<T> = T extends object
  ? { [K in keyof T]: ForceEval_55<T[K]> }
  : T;

// Export types to ensure they're checked
export type {
  DeepObject_55,
  Flatten_55,
  Transform_55,
  MapDeep_55,
  Split_55,
  Join_55,
  Permutation_55,
  ComplexData_55,
  ForceEval_55,
};

// Force type instantiation with concrete types
type _Test1_55 = ForceEval_55<ComplexData_55<string>>;
type _Test2_55 = ForceEval_55<ComplexData_55<number[]>>;
type _Test3_55 = ForceEval_55<ComplexData_55<{ a: string; b: number; c: boolean }>>;
type _Test4_55 = ForceEval_55<Transform_55<'hello'>>;
type _Test5_55 = ForceEval_55<MapDeep_55<{ nested: { deep: { value: string } } }>>;

// Verify types are used (prevents dead code elimination)
declare const _verify_55: _Test1_55 & _Test2_55 & _Test3_55 & _Test4_55 & _Test5_55;
