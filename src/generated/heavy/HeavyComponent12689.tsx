'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12689<T> = T extends (infer U)[]
  ? DeepReadonlyArray12689<U>
  : T extends object
  ? DeepReadonlyObject12689<T>
  : T;

interface DeepReadonlyArray12689<T> extends ReadonlyArray<DeepReadonly12689<T>> {}

type DeepReadonlyObject12689<T> = {
  readonly [P in keyof T]: DeepReadonly12689<T[P]>;
};

type UnionToIntersection12689<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12689<T> = UnionToIntersection12689<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12689<T extends unknown[], V> = [...T, V];

type TuplifyUnion12689<T, L = LastOf12689<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12689<TuplifyUnion12689<Exclude<T, L>>, L>;

type DeepPartial12689<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12689<T[P]> }
  : T;

type Paths12689<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12689<K, Paths12689<T[K], Prev12689[D]>> : never }[keyof T]
  : never;

type Prev12689 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12689<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12689 {
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

type ConfigPaths12689 = Paths12689<NestedConfig12689>;

interface HeavyProps12689 {
  config: DeepPartial12689<NestedConfig12689>;
  path?: ConfigPaths12689;
}

const HeavyComponent12689 = memo(function HeavyComponent12689({ config }: HeavyProps12689) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12689) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12689 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12689: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12689.displayName = 'HeavyComponent12689';
export default HeavyComponent12689;
