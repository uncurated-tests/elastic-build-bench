'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13571<T> = T extends (infer U)[]
  ? DeepReadonlyArray13571<U>
  : T extends object
  ? DeepReadonlyObject13571<T>
  : T;

interface DeepReadonlyArray13571<T> extends ReadonlyArray<DeepReadonly13571<T>> {}

type DeepReadonlyObject13571<T> = {
  readonly [P in keyof T]: DeepReadonly13571<T[P]>;
};

type UnionToIntersection13571<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13571<T> = UnionToIntersection13571<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13571<T extends unknown[], V> = [...T, V];

type TuplifyUnion13571<T, L = LastOf13571<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13571<TuplifyUnion13571<Exclude<T, L>>, L>;

type DeepPartial13571<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13571<T[P]> }
  : T;

type Paths13571<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13571<K, Paths13571<T[K], Prev13571[D]>> : never }[keyof T]
  : never;

type Prev13571 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13571<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13571 {
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

type ConfigPaths13571 = Paths13571<NestedConfig13571>;

interface HeavyProps13571 {
  config: DeepPartial13571<NestedConfig13571>;
  path?: ConfigPaths13571;
}

const HeavyComponent13571 = memo(function HeavyComponent13571({ config }: HeavyProps13571) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13571) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13571 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13571: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13571.displayName = 'HeavyComponent13571';
export default HeavyComponent13571;
