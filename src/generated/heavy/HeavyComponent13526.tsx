'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13526<T> = T extends (infer U)[]
  ? DeepReadonlyArray13526<U>
  : T extends object
  ? DeepReadonlyObject13526<T>
  : T;

interface DeepReadonlyArray13526<T> extends ReadonlyArray<DeepReadonly13526<T>> {}

type DeepReadonlyObject13526<T> = {
  readonly [P in keyof T]: DeepReadonly13526<T[P]>;
};

type UnionToIntersection13526<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13526<T> = UnionToIntersection13526<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13526<T extends unknown[], V> = [...T, V];

type TuplifyUnion13526<T, L = LastOf13526<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13526<TuplifyUnion13526<Exclude<T, L>>, L>;

type DeepPartial13526<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13526<T[P]> }
  : T;

type Paths13526<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13526<K, Paths13526<T[K], Prev13526[D]>> : never }[keyof T]
  : never;

type Prev13526 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13526<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13526 {
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

type ConfigPaths13526 = Paths13526<NestedConfig13526>;

interface HeavyProps13526 {
  config: DeepPartial13526<NestedConfig13526>;
  path?: ConfigPaths13526;
}

const HeavyComponent13526 = memo(function HeavyComponent13526({ config }: HeavyProps13526) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13526) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13526 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13526: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13526.displayName = 'HeavyComponent13526';
export default HeavyComponent13526;
