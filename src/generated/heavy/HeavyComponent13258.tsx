'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13258<T> = T extends (infer U)[]
  ? DeepReadonlyArray13258<U>
  : T extends object
  ? DeepReadonlyObject13258<T>
  : T;

interface DeepReadonlyArray13258<T> extends ReadonlyArray<DeepReadonly13258<T>> {}

type DeepReadonlyObject13258<T> = {
  readonly [P in keyof T]: DeepReadonly13258<T[P]>;
};

type UnionToIntersection13258<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13258<T> = UnionToIntersection13258<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13258<T extends unknown[], V> = [...T, V];

type TuplifyUnion13258<T, L = LastOf13258<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13258<TuplifyUnion13258<Exclude<T, L>>, L>;

type DeepPartial13258<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13258<T[P]> }
  : T;

type Paths13258<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13258<K, Paths13258<T[K], Prev13258[D]>> : never }[keyof T]
  : never;

type Prev13258 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13258<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13258 {
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

type ConfigPaths13258 = Paths13258<NestedConfig13258>;

interface HeavyProps13258 {
  config: DeepPartial13258<NestedConfig13258>;
  path?: ConfigPaths13258;
}

const HeavyComponent13258 = memo(function HeavyComponent13258({ config }: HeavyProps13258) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13258) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13258 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13258: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13258.displayName = 'HeavyComponent13258';
export default HeavyComponent13258;
