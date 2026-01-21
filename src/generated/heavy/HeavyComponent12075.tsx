'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12075<T> = T extends (infer U)[]
  ? DeepReadonlyArray12075<U>
  : T extends object
  ? DeepReadonlyObject12075<T>
  : T;

interface DeepReadonlyArray12075<T> extends ReadonlyArray<DeepReadonly12075<T>> {}

type DeepReadonlyObject12075<T> = {
  readonly [P in keyof T]: DeepReadonly12075<T[P]>;
};

type UnionToIntersection12075<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12075<T> = UnionToIntersection12075<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12075<T extends unknown[], V> = [...T, V];

type TuplifyUnion12075<T, L = LastOf12075<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12075<TuplifyUnion12075<Exclude<T, L>>, L>;

type DeepPartial12075<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12075<T[P]> }
  : T;

type Paths12075<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12075<K, Paths12075<T[K], Prev12075[D]>> : never }[keyof T]
  : never;

type Prev12075 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12075<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12075 {
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

type ConfigPaths12075 = Paths12075<NestedConfig12075>;

interface HeavyProps12075 {
  config: DeepPartial12075<NestedConfig12075>;
  path?: ConfigPaths12075;
}

const HeavyComponent12075 = memo(function HeavyComponent12075({ config }: HeavyProps12075) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12075) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12075 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12075: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12075.displayName = 'HeavyComponent12075';
export default HeavyComponent12075;
