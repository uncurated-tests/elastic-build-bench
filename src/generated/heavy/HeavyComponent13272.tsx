'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13272<T> = T extends (infer U)[]
  ? DeepReadonlyArray13272<U>
  : T extends object
  ? DeepReadonlyObject13272<T>
  : T;

interface DeepReadonlyArray13272<T> extends ReadonlyArray<DeepReadonly13272<T>> {}

type DeepReadonlyObject13272<T> = {
  readonly [P in keyof T]: DeepReadonly13272<T[P]>;
};

type UnionToIntersection13272<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13272<T> = UnionToIntersection13272<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13272<T extends unknown[], V> = [...T, V];

type TuplifyUnion13272<T, L = LastOf13272<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13272<TuplifyUnion13272<Exclude<T, L>>, L>;

type DeepPartial13272<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13272<T[P]> }
  : T;

type Paths13272<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13272<K, Paths13272<T[K], Prev13272[D]>> : never }[keyof T]
  : never;

type Prev13272 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13272<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13272 {
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

type ConfigPaths13272 = Paths13272<NestedConfig13272>;

interface HeavyProps13272 {
  config: DeepPartial13272<NestedConfig13272>;
  path?: ConfigPaths13272;
}

const HeavyComponent13272 = memo(function HeavyComponent13272({ config }: HeavyProps13272) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13272) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13272 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13272: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13272.displayName = 'HeavyComponent13272';
export default HeavyComponent13272;
