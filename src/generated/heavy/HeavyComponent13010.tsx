'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13010<T> = T extends (infer U)[]
  ? DeepReadonlyArray13010<U>
  : T extends object
  ? DeepReadonlyObject13010<T>
  : T;

interface DeepReadonlyArray13010<T> extends ReadonlyArray<DeepReadonly13010<T>> {}

type DeepReadonlyObject13010<T> = {
  readonly [P in keyof T]: DeepReadonly13010<T[P]>;
};

type UnionToIntersection13010<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13010<T> = UnionToIntersection13010<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13010<T extends unknown[], V> = [...T, V];

type TuplifyUnion13010<T, L = LastOf13010<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13010<TuplifyUnion13010<Exclude<T, L>>, L>;

type DeepPartial13010<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13010<T[P]> }
  : T;

type Paths13010<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13010<K, Paths13010<T[K], Prev13010[D]>> : never }[keyof T]
  : never;

type Prev13010 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13010<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13010 {
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

type ConfigPaths13010 = Paths13010<NestedConfig13010>;

interface HeavyProps13010 {
  config: DeepPartial13010<NestedConfig13010>;
  path?: ConfigPaths13010;
}

const HeavyComponent13010 = memo(function HeavyComponent13010({ config }: HeavyProps13010) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13010) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13010 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13010: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13010.displayName = 'HeavyComponent13010';
export default HeavyComponent13010;
