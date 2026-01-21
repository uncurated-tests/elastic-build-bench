'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13727<T> = T extends (infer U)[]
  ? DeepReadonlyArray13727<U>
  : T extends object
  ? DeepReadonlyObject13727<T>
  : T;

interface DeepReadonlyArray13727<T> extends ReadonlyArray<DeepReadonly13727<T>> {}

type DeepReadonlyObject13727<T> = {
  readonly [P in keyof T]: DeepReadonly13727<T[P]>;
};

type UnionToIntersection13727<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13727<T> = UnionToIntersection13727<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13727<T extends unknown[], V> = [...T, V];

type TuplifyUnion13727<T, L = LastOf13727<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13727<TuplifyUnion13727<Exclude<T, L>>, L>;

type DeepPartial13727<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13727<T[P]> }
  : T;

type Paths13727<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13727<K, Paths13727<T[K], Prev13727[D]>> : never }[keyof T]
  : never;

type Prev13727 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13727<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13727 {
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

type ConfigPaths13727 = Paths13727<NestedConfig13727>;

interface HeavyProps13727 {
  config: DeepPartial13727<NestedConfig13727>;
  path?: ConfigPaths13727;
}

const HeavyComponent13727 = memo(function HeavyComponent13727({ config }: HeavyProps13727) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13727) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13727 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13727: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13727.displayName = 'HeavyComponent13727';
export default HeavyComponent13727;
