'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13212<T> = T extends (infer U)[]
  ? DeepReadonlyArray13212<U>
  : T extends object
  ? DeepReadonlyObject13212<T>
  : T;

interface DeepReadonlyArray13212<T> extends ReadonlyArray<DeepReadonly13212<T>> {}

type DeepReadonlyObject13212<T> = {
  readonly [P in keyof T]: DeepReadonly13212<T[P]>;
};

type UnionToIntersection13212<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13212<T> = UnionToIntersection13212<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13212<T extends unknown[], V> = [...T, V];

type TuplifyUnion13212<T, L = LastOf13212<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13212<TuplifyUnion13212<Exclude<T, L>>, L>;

type DeepPartial13212<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13212<T[P]> }
  : T;

type Paths13212<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13212<K, Paths13212<T[K], Prev13212[D]>> : never }[keyof T]
  : never;

type Prev13212 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13212<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13212 {
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

type ConfigPaths13212 = Paths13212<NestedConfig13212>;

interface HeavyProps13212 {
  config: DeepPartial13212<NestedConfig13212>;
  path?: ConfigPaths13212;
}

const HeavyComponent13212 = memo(function HeavyComponent13212({ config }: HeavyProps13212) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13212) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13212 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13212: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13212.displayName = 'HeavyComponent13212';
export default HeavyComponent13212;
