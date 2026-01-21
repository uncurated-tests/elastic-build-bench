// Complex type file 46 - forces expensive TypeScript type inference
// This file takes ~2-3 seconds to type-check but uses minimal memory

// Recursive type builders
type Prev = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

// Deep recursive object type
type DeepObject_46<T, D extends number = 10> = D extends 0
  ? T
  : { value: T; nested: DeepObject_46<T, Prev[D]>; meta: { depth: D; index: 46 } };

// Recursive array flattening
type Flatten_46<T> = T extends Array<infer U>
  ? U extends Array<unknown>
    ? Flatten_46<U>
    : U
  : T;

// Complex conditional type chain
type Transform_46<T, D extends number = 10> = D extends 0
  ? T
  : T extends string
    ? Transform_46<`[${T}]`, Prev[D]>
    : T extends number
      ? Transform_46<[T, T], Prev[D]>
      : T extends boolean
        ? Transform_46<{ flag: T }, Prev[D]>
        : T extends object
          ? Transform_46<{ wrapped: T; level: D }, Prev[D]>
          : T;

// Union to tuple conversion (expensive)
type UnionToIntersection_46<U> = 
  (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOfUnion_46<T> = 
  UnionToIntersection_46<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type UnionToTuple_46<T, L = LastOfUnion_46<T>, N = [T] extends [never] ? true : false> = 
  true extends N ? [] : [...UnionToTuple_46<Exclude<T, L>>, L];

// Mapped type with conditional transformations
type MapDeep_46<T, D extends number = 10> = D extends 0
  ? T
  : T extends object
    ? { [K in keyof T]: MapDeep_46<T[K], Prev[D]> }
    : T extends Array<infer U>
      ? MapDeep_46<U, Prev[D]>[]
      : Transform_46<T, D>;

// String manipulation types (expensive)
type Split_46<S extends string, D extends string = ''> = 
  S extends `${infer H}${D}${infer T}` 
    ? [H, ...Split_46<T, D>] 
    : S extends '' 
      ? [] 
      : [S];

type Join_46<T extends string[], D extends string = ''> = 
  T extends [] 
    ? '' 
    : T extends [infer F extends string] 
      ? F 
      : T extends [infer F extends string, ...infer R extends string[]] 
        ? `${F}${D}${Join_46<R, D>}` 
        : never;

// Permutation type (exponential complexity, but bounded)
type Permutation_46<T, K = T> = [T] extends [never]
  ? []
  : K extends K
    ? [K, ...Permutation_46<Exclude<T, K>>]
    : never;

// Complex interface using all the above
interface ComplexData_46<T = unknown> {
  id: string;
  data: DeepObject_46<T>;
  transformed: Transform_46<T>;
  flattened: T extends Array<unknown> ? Flatten_46<T> : T;
  mapped: MapDeep_46<T>;
  meta: {
    index: 46;
    depth: 10;
    timestamp: number;
  };
}

// Type that forces evaluation of all nested types
type ForceEval_46<T> = T extends object
  ? { [K in keyof T]: ForceEval_46<T[K]> }
  : T;

// Export types to ensure they're checked
export type {
  DeepObject_46,
  Flatten_46,
  Transform_46,
  MapDeep_46,
  Split_46,
  Join_46,
  Permutation_46,
  ComplexData_46,
  ForceEval_46,
};

// Force type instantiation with concrete types
type _Test1_46 = ForceEval_46<ComplexData_46<string>>;
type _Test2_46 = ForceEval_46<ComplexData_46<number[]>>;
type _Test3_46 = ForceEval_46<ComplexData_46<{ a: string; b: number; c: boolean }>>;
type _Test4_46 = ForceEval_46<Transform_46<'hello'>>;
type _Test5_46 = ForceEval_46<MapDeep_46<{ nested: { deep: { value: string } } }>>;

// Verify types are used (prevents dead code elimination)
declare const _verify_46: _Test1_46 & _Test2_46 & _Test3_46 & _Test4_46 & _Test5_46;
