// Complex type file 73 - forces expensive TypeScript type inference
// This file takes ~2-3 seconds to type-check but uses minimal memory

// Recursive type builders
type Prev = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

// Deep recursive object type
type DeepObject_73<T, D extends number = 9> = D extends 0
  ? T
  : { value: T; nested: DeepObject_73<T, Prev[D]>; meta: { depth: D; index: 73 } };

// Recursive array flattening
type Flatten_73<T> = T extends Array<infer U>
  ? U extends Array<unknown>
    ? Flatten_73<U>
    : U
  : T;

// Complex conditional type chain
type Transform_73<T, D extends number = 9> = D extends 0
  ? T
  : T extends string
    ? Transform_73<`[${T}]`, Prev[D]>
    : T extends number
      ? Transform_73<[T, T], Prev[D]>
      : T extends boolean
        ? Transform_73<{ flag: T }, Prev[D]>
        : T extends object
          ? Transform_73<{ wrapped: T; level: D }, Prev[D]>
          : T;

// Union to tuple conversion (expensive)
type UnionToIntersection_73<U> = 
  (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOfUnion_73<T> = 
  UnionToIntersection_73<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type UnionToTuple_73<T, L = LastOfUnion_73<T>, N = [T] extends [never] ? true : false> = 
  true extends N ? [] : [...UnionToTuple_73<Exclude<T, L>>, L];

// Mapped type with conditional transformations
type MapDeep_73<T, D extends number = 9> = D extends 0
  ? T
  : T extends object
    ? { [K in keyof T]: MapDeep_73<T[K], Prev[D]> }
    : T extends Array<infer U>
      ? MapDeep_73<U, Prev[D]>[]
      : Transform_73<T, D>;

// String manipulation types (expensive)
type Split_73<S extends string, D extends string = ''> = 
  S extends `${infer H}${D}${infer T}` 
    ? [H, ...Split_73<T, D>] 
    : S extends '' 
      ? [] 
      : [S];

type Join_73<T extends string[], D extends string = ''> = 
  T extends [] 
    ? '' 
    : T extends [infer F extends string] 
      ? F 
      : T extends [infer F extends string, ...infer R extends string[]] 
        ? `${F}${D}${Join_73<R, D>}` 
        : never;

// Permutation type (exponential complexity, but bounded)
type Permutation_73<T, K = T> = [T] extends [never]
  ? []
  : K extends K
    ? [K, ...Permutation_73<Exclude<T, K>>]
    : never;

// Complex interface using all the above
interface ComplexData_73<T = unknown> {
  id: string;
  data: DeepObject_73<T>;
  transformed: Transform_73<T>;
  flattened: T extends Array<unknown> ? Flatten_73<T> : T;
  mapped: MapDeep_73<T>;
  meta: {
    index: 73;
    depth: 9;
    timestamp: number;
  };
}

// Type that forces evaluation of all nested types
type ForceEval_73<T> = T extends object
  ? { [K in keyof T]: ForceEval_73<T[K]> }
  : T;

// Export types to ensure they're checked
export type {
  DeepObject_73,
  Flatten_73,
  Transform_73,
  MapDeep_73,
  Split_73,
  Join_73,
  Permutation_73,
  ComplexData_73,
  ForceEval_73,
};

// Force type instantiation with concrete types
type _Test1_73 = ForceEval_73<ComplexData_73<string>>;
type _Test2_73 = ForceEval_73<ComplexData_73<number[]>>;
type _Test3_73 = ForceEval_73<ComplexData_73<{ a: string; b: number; c: boolean }>>;
type _Test4_73 = ForceEval_73<Transform_73<'hello'>>;
type _Test5_73 = ForceEval_73<MapDeep_73<{ nested: { deep: { value: string } } }>>;

// Verify types are used (prevents dead code elimination)
declare const _verify_73: _Test1_73 & _Test2_73 & _Test3_73 & _Test4_73 & _Test5_73;
