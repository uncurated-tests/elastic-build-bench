'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12533<T> = T extends (infer U)[]
  ? DeepReadonlyArray12533<U>
  : T extends object
  ? DeepReadonlyObject12533<T>
  : T;

interface DeepReadonlyArray12533<T> extends ReadonlyArray<DeepReadonly12533<T>> {}

type DeepReadonlyObject12533<T> = {
  readonly [P in keyof T]: DeepReadonly12533<T[P]>;
};

type UnionToIntersection12533<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12533<T> = UnionToIntersection12533<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12533<T extends unknown[], V> = [...T, V];

type TuplifyUnion12533<T, L = LastOf12533<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12533<TuplifyUnion12533<Exclude<T, L>>, L>;

type DeepPartial12533<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12533<T[P]> }
  : T;

type Paths12533<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12533<K, Paths12533<T[K], Prev12533[D]>> : never }[keyof T]
  : never;

type Prev12533 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12533<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12533 {
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

type ConfigPaths12533 = Paths12533<NestedConfig12533>;

interface HeavyProps12533 {
  config: DeepPartial12533<NestedConfig12533>;
  path?: ConfigPaths12533;
}

const HeavyComponent12533 = memo(function HeavyComponent12533({ config }: HeavyProps12533) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12533) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12533 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12533: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12533.displayName = 'HeavyComponent12533';
export default HeavyComponent12533;
