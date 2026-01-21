'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12218<T> = T extends (infer U)[]
  ? DeepReadonlyArray12218<U>
  : T extends object
  ? DeepReadonlyObject12218<T>
  : T;

interface DeepReadonlyArray12218<T> extends ReadonlyArray<DeepReadonly12218<T>> {}

type DeepReadonlyObject12218<T> = {
  readonly [P in keyof T]: DeepReadonly12218<T[P]>;
};

type UnionToIntersection12218<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12218<T> = UnionToIntersection12218<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12218<T extends unknown[], V> = [...T, V];

type TuplifyUnion12218<T, L = LastOf12218<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12218<TuplifyUnion12218<Exclude<T, L>>, L>;

type DeepPartial12218<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12218<T[P]> }
  : T;

type Paths12218<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12218<K, Paths12218<T[K], Prev12218[D]>> : never }[keyof T]
  : never;

type Prev12218 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12218<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12218 {
  level1: {
    level2: {
      level3: {
        value: string;
        count: number;
        enabled: boolean;
        items: Array<{ id: number; name: string }>;
      };
    };
  };
}

type ConfigPaths12218 = Paths12218<NestedConfig12218>;

interface HeavyProps12218 {
  config: DeepPartial12218<NestedConfig12218>;
  path?: ConfigPaths12218;
}

const HeavyComponent12218 = memo(function HeavyComponent12218({ config }: HeavyProps12218) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12218) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12218 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12218: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12218.displayName = 'HeavyComponent12218';
export default HeavyComponent12218;
