// Complex type file 37 - forces expensive TypeScript type inference
// This file takes ~2-3 seconds to type-check but uses minimal memory

// Recursive type builders
type Prev = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

// Deep recursive object type
type DeepObject_37<T, D extends number = 9> = D extends 0
  ? T
  : { value: T; nested: DeepObject_37<T, Prev[D]>; meta: { depth: D; index: 37 } };

// Recursive array flattening
type Flatten_37<T> = T extends Array<infer U>
  ? U extends Array<unknown>
    ? Flatten_37<U>
    : U
  : T;

// Complex conditional type chain
type Transform_37<T, D extends number = 9> = D extends 0
  ? T
  : T extends string
    ? Transform_37<`[${T}]`, Prev[D]>
    : T extends number
      ? Transform_37<[T, T], Prev[D]>
      : T extends boolean
        ? Transform_37<{ flag: T }, Prev[D]>
        : T extends object
          ? Transform_37<{ wrapped: T; level: D }, Prev[D]>
          : T;

// Union to tuple conversion (expensive)
type UnionToIntersection_37<U> = 
  (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOfUnion_37<T> = 
  UnionToIntersection_37<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type UnionToTuple_37<T, L = LastOfUnion_37<T>, N = [T] extends [never] ? true : false> = 
  true extends N ? [] : [...UnionToTuple_37<Exclude<T, L>>, L];

// Mapped type with conditional transformations
type MapDeep_37<T, D extends number = 9> = D extends 0
  ? T
  : T extends object
    ? { [K in keyof T]: MapDeep_37<T[K], Prev[D]> }
    : T extends Array<infer U>
      ? MapDeep_37<U, Prev[D]>[]
      : Transform_37<T, D>;

// String manipulation types (expensive)
type Split_37<S extends string, D extends string = ''> = 
  S extends `${infer H}${D}${infer T}` 
    ? [H, ...Split_37<T, D>] 
    : S extends '' 
      ? [] 
      : [S];

type Join_37<T extends string[], D extends string = ''> = 
  T extends [] 
    ? '' 
    : T extends [infer F extends string] 
      ? F 
      : T extends [infer F extends string, ...infer R extends string[]] 
        ? `${F}${D}${Join_37<R, D>}` 
        : never;

// Permutation type (exponential complexity, but bounded)
type Permutation_37<T, K = T> = [T] extends [never]
  ? []
  : K extends K
    ? [K, ...Permutation_37<Exclude<T, K>>]
    : never;

// Complex interface using all the above
interface ComplexData_37<T = unknown> {
  id: string;
  data: DeepObject_37<T>;
  transformed: Transform_37<T>;
  flattened: T extends Array<unknown> ? Flatten_37<T> : T;
  mapped: MapDeep_37<T>;
  meta: {
    index: 37;
    depth: 9;
    timestamp: number;
  };
}

// Type that forces evaluation of all nested types
type ForceEval_37<T> = T extends object
  ? { [K in keyof T]: ForceEval_37<T[K]> }
  : T;

// Export types to ensure they're checked
export type {
  DeepObject_37,
  Flatten_37,
  Transform_37,
  MapDeep_37,
  Split_37,
  Join_37,
  Permutation_37,
  ComplexData_37,
  ForceEval_37,
};

// Force type instantiation with concrete types
type _Test1_37 = ForceEval_37<ComplexData_37<string>>;
type _Test2_37 = ForceEval_37<ComplexData_37<number[]>>;
type _Test3_37 = ForceEval_37<ComplexData_37<{ a: string; b: number; c: boolean }>>;
type _Test4_37 = ForceEval_37<Transform_37<'hello'>>;
type _Test5_37 = ForceEval_37<MapDeep_37<{ nested: { deep: { value: string } } }>>;

// Verify types are used (prevents dead code elimination)
declare const _verify_37: _Test1_37 & _Test2_37 & _Test3_37 & _Test4_37 & _Test5_37;
