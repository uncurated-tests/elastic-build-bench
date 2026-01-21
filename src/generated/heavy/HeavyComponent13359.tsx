'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13359<T> = T extends (infer U)[]
  ? DeepReadonlyArray13359<U>
  : T extends object
  ? DeepReadonlyObject13359<T>
  : T;

interface DeepReadonlyArray13359<T> extends ReadonlyArray<DeepReadonly13359<T>> {}

type DeepReadonlyObject13359<T> = {
  readonly [P in keyof T]: DeepReadonly13359<T[P]>;
};

type UnionToIntersection13359<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13359<T> = UnionToIntersection13359<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13359<T extends unknown[], V> = [...T, V];

type TuplifyUnion13359<T, L = LastOf13359<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13359<TuplifyUnion13359<Exclude<T, L>>, L>;

type DeepPartial13359<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13359<T[P]> }
  : T;

type Paths13359<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13359<K, Paths13359<T[K], Prev13359[D]>> : never }[keyof T]
  : never;

type Prev13359 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13359<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13359 {
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

type ConfigPaths13359 = Paths13359<NestedConfig13359>;

interface HeavyProps13359 {
  config: DeepPartial13359<NestedConfig13359>;
  path?: ConfigPaths13359;
}

const HeavyComponent13359 = memo(function HeavyComponent13359({ config }: HeavyProps13359) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13359) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13359 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13359: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13359.displayName = 'HeavyComponent13359';
export default HeavyComponent13359;
