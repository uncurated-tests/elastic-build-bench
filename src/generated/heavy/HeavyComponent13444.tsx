'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13444<T> = T extends (infer U)[]
  ? DeepReadonlyArray13444<U>
  : T extends object
  ? DeepReadonlyObject13444<T>
  : T;

interface DeepReadonlyArray13444<T> extends ReadonlyArray<DeepReadonly13444<T>> {}

type DeepReadonlyObject13444<T> = {
  readonly [P in keyof T]: DeepReadonly13444<T[P]>;
};

type UnionToIntersection13444<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13444<T> = UnionToIntersection13444<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13444<T extends unknown[], V> = [...T, V];

type TuplifyUnion13444<T, L = LastOf13444<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13444<TuplifyUnion13444<Exclude<T, L>>, L>;

type DeepPartial13444<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13444<T[P]> }
  : T;

type Paths13444<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13444<K, Paths13444<T[K], Prev13444[D]>> : never }[keyof T]
  : never;

type Prev13444 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13444<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13444 {
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

type ConfigPaths13444 = Paths13444<NestedConfig13444>;

interface HeavyProps13444 {
  config: DeepPartial13444<NestedConfig13444>;
  path?: ConfigPaths13444;
}

const HeavyComponent13444 = memo(function HeavyComponent13444({ config }: HeavyProps13444) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13444) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13444 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13444: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13444.displayName = 'HeavyComponent13444';
export default HeavyComponent13444;
