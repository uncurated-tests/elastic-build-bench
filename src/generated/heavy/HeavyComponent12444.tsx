'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12444<T> = T extends (infer U)[]
  ? DeepReadonlyArray12444<U>
  : T extends object
  ? DeepReadonlyObject12444<T>
  : T;

interface DeepReadonlyArray12444<T> extends ReadonlyArray<DeepReadonly12444<T>> {}

type DeepReadonlyObject12444<T> = {
  readonly [P in keyof T]: DeepReadonly12444<T[P]>;
};

type UnionToIntersection12444<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12444<T> = UnionToIntersection12444<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12444<T extends unknown[], V> = [...T, V];

type TuplifyUnion12444<T, L = LastOf12444<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12444<TuplifyUnion12444<Exclude<T, L>>, L>;

type DeepPartial12444<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12444<T[P]> }
  : T;

type Paths12444<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12444<K, Paths12444<T[K], Prev12444[D]>> : never }[keyof T]
  : never;

type Prev12444 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12444<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12444 {
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

type ConfigPaths12444 = Paths12444<NestedConfig12444>;

interface HeavyProps12444 {
  config: DeepPartial12444<NestedConfig12444>;
  path?: ConfigPaths12444;
}

const HeavyComponent12444 = memo(function HeavyComponent12444({ config }: HeavyProps12444) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12444) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12444 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12444: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12444.displayName = 'HeavyComponent12444';
export default HeavyComponent12444;
