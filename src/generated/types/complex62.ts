// Complex type file 62 - forces expensive TypeScript type inference
// This file takes ~2-3 seconds to type-check but uses minimal memory

// Recursive type builders
type Prev = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

// Deep recursive object type
type DeepObject_62<T, D extends number = 10> = D extends 0
  ? T
  : { value: T; nested: DeepObject_62<T, Prev[D]>; meta: { depth: D; index: 62 } };

// Recursive array flattening
type Flatten_62<T> = T extends Array<infer U>
  ? U extends Array<unknown>
    ? Flatten_62<U>
    : U
  : T;

// Complex conditional type chain
type Transform_62<T, D extends number = 10> = D extends 0
  ? T
  : T extends string
    ? Transform_62<`[${T}]`, Prev[D]>
    : T extends number
      ? Transform_62<[T, T], Prev[D]>
      : T extends boolean
        ? Transform_62<{ flag: T }, Prev[D]>
        : T extends object
          ? Transform_62<{ wrapped: T; level: D }, Prev[D]>
          : T;

// Union to tuple conversion (expensive)
type UnionToIntersection_62<U> = 
  (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOfUnion_62<T> = 
  UnionToIntersection_62<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type UnionToTuple_62<T, L = LastOfUnion_62<T>, N = [T] extends [never] ? true : false> = 
  true extends N ? [] : [...UnionToTuple_62<Exclude<T, L>>, L];

// Mapped type with conditional transformations
type MapDeep_62<T, D extends number = 10> = D extends 0
  ? T
  : T extends object
    ? { [K in keyof T]: MapDeep_62<T[K], Prev[D]> }
    : T extends Array<infer U>
      ? MapDeep_62<U, Prev[D]>[]
      : Transform_62<T, D>;

// String manipulation types (expensive)
type Split_62<S extends string, D extends string = ''> = 
  S extends `${infer H}${D}${infer T}` 
    ? [H, ...Split_62<T, D>] 
    : S extends '' 
      ? [] 
      : [S];

type Join_62<T extends string[], D extends string = ''> = 
  T extends [] 
    ? '' 
    : T extends [infer F extends string] 
      ? F 
      : T extends [infer F extends string, ...infer R extends string[]] 
        ? `${F}${D}${Join_62<R, D>}` 
        : never;

// Permutation type (exponential complexity, but bounded)
type Permutation_62<T, K = T> = [T] extends [never]
  ? []
  : K extends K
    ? [K, ...Permutation_62<Exclude<T, K>>]
    : never;

// Complex interface using all the above
interface ComplexData_62<T = unknown> {
  id: string;
  data: DeepObject_62<T>;
  transformed: Transform_62<T>;
  flattened: T extends Array<unknown> ? Flatten_62<T> : T;
  mapped: MapDeep_62<T>;
  meta: {
    index: 62;
    depth: 10;
    timestamp: number;
  };
}

// Type that forces evaluation of all nested types
type ForceEval_62<T> = T extends object
  ? { [K in keyof T]: ForceEval_62<T[K]> }
  : T;

// Export types to ensure they're checked
export type {
  DeepObject_62,
  Flatten_62,
  Transform_62,
  MapDeep_62,
  Split_62,
  Join_62,
  Permutation_62,
  ComplexData_62,
  ForceEval_62,
};

// Force type instantiation with concrete types
type _Test1_62 = ForceEval_62<ComplexData_62<string>>;
type _Test2_62 = ForceEval_62<ComplexData_62<number[]>>;
type _Test3_62 = ForceEval_62<ComplexData_62<{ a: string; b: number; c: boolean }>>;
type _Test4_62 = ForceEval_62<Transform_62<'hello'>>;
type _Test5_62 = ForceEval_62<MapDeep_62<{ nested: { deep: { value: string } } }>>;

// Verify types are used (prevents dead code elimination)
declare const _verify_62: _Test1_62 & _Test2_62 & _Test3_62 & _Test4_62 & _Test5_62;
