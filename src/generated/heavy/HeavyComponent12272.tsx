'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12272<T> = T extends (infer U)[]
  ? DeepReadonlyArray12272<U>
  : T extends object
  ? DeepReadonlyObject12272<T>
  : T;

interface DeepReadonlyArray12272<T> extends ReadonlyArray<DeepReadonly12272<T>> {}

type DeepReadonlyObject12272<T> = {
  readonly [P in keyof T]: DeepReadonly12272<T[P]>;
};

type UnionToIntersection12272<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12272<T> = UnionToIntersection12272<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12272<T extends unknown[], V> = [...T, V];

type TuplifyUnion12272<T, L = LastOf12272<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12272<TuplifyUnion12272<Exclude<T, L>>, L>;

type DeepPartial12272<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12272<T[P]> }
  : T;

type Paths12272<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12272<K, Paths12272<T[K], Prev12272[D]>> : never }[keyof T]
  : never;

type Prev12272 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12272<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12272 {
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

type ConfigPaths12272 = Paths12272<NestedConfig12272>;

interface HeavyProps12272 {
  config: DeepPartial12272<NestedConfig12272>;
  path?: ConfigPaths12272;
}

const HeavyComponent12272 = memo(function HeavyComponent12272({ config }: HeavyProps12272) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12272) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12272 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12272: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12272.displayName = 'HeavyComponent12272';
export default HeavyComponent12272;
