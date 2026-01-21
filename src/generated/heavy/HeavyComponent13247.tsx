'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13247<T> = T extends (infer U)[]
  ? DeepReadonlyArray13247<U>
  : T extends object
  ? DeepReadonlyObject13247<T>
  : T;

interface DeepReadonlyArray13247<T> extends ReadonlyArray<DeepReadonly13247<T>> {}

type DeepReadonlyObject13247<T> = {
  readonly [P in keyof T]: DeepReadonly13247<T[P]>;
};

type UnionToIntersection13247<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13247<T> = UnionToIntersection13247<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13247<T extends unknown[], V> = [...T, V];

type TuplifyUnion13247<T, L = LastOf13247<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13247<TuplifyUnion13247<Exclude<T, L>>, L>;

type DeepPartial13247<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13247<T[P]> }
  : T;

type Paths13247<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13247<K, Paths13247<T[K], Prev13247[D]>> : never }[keyof T]
  : never;

type Prev13247 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13247<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13247 {
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

type ConfigPaths13247 = Paths13247<NestedConfig13247>;

interface HeavyProps13247 {
  config: DeepPartial13247<NestedConfig13247>;
  path?: ConfigPaths13247;
}

const HeavyComponent13247 = memo(function HeavyComponent13247({ config }: HeavyProps13247) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13247) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13247 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13247: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13247.displayName = 'HeavyComponent13247';
export default HeavyComponent13247;
