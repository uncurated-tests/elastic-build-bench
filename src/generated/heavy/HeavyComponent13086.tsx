'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13086<T> = T extends (infer U)[]
  ? DeepReadonlyArray13086<U>
  : T extends object
  ? DeepReadonlyObject13086<T>
  : T;

interface DeepReadonlyArray13086<T> extends ReadonlyArray<DeepReadonly13086<T>> {}

type DeepReadonlyObject13086<T> = {
  readonly [P in keyof T]: DeepReadonly13086<T[P]>;
};

type UnionToIntersection13086<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13086<T> = UnionToIntersection13086<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13086<T extends unknown[], V> = [...T, V];

type TuplifyUnion13086<T, L = LastOf13086<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13086<TuplifyUnion13086<Exclude<T, L>>, L>;

type DeepPartial13086<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13086<T[P]> }
  : T;

type Paths13086<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13086<K, Paths13086<T[K], Prev13086[D]>> : never }[keyof T]
  : never;

type Prev13086 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13086<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13086 {
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

type ConfigPaths13086 = Paths13086<NestedConfig13086>;

interface HeavyProps13086 {
  config: DeepPartial13086<NestedConfig13086>;
  path?: ConfigPaths13086;
}

const HeavyComponent13086 = memo(function HeavyComponent13086({ config }: HeavyProps13086) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13086) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13086 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13086: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13086.displayName = 'HeavyComponent13086';
export default HeavyComponent13086;
