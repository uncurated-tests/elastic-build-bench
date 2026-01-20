
// Complex recursive types to stress TypeScript compiler
type DeepPartial<T> = T extends object ? { [P in keyof T]?: DeepPartial<T[P]> } : T;
type DeepRequired<T> = T extends object ? { [P in keyof T]-?: DeepRequired<T[P]> } : T;

type UnionToIntersection<U> = (U extends any ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf<T> = UnionToIntersection<T extends any ? () => T : never> extends () => infer R ? R : never;

type Push<T extends any[], V> = [...T, V];

type TuplifyUnion<T, L = LastOf<T>, N = [T] extends [never] ? true : false> = 
  true extends N ? [] : Push<TuplifyUnion<Exclude<T, L>>, L>;

interface NestedConfig<T = unknown> {
  value: T;
  children?: NestedConfig<T>[];
  metadata?: Record<string, DeepPartial<T>>;
  transform?: <U>(input: T) => Promise<U>;
}

type RecursiveRecord<K extends string, V, D extends number = 5> = 
  D extends 0 ? V : { [P in K]: RecursiveRecord<K, V, [-1, 0, 1, 2, 3, 4][D]> };

export type { DeepPartial, DeepRequired, NestedConfig, RecursiveRecord };
