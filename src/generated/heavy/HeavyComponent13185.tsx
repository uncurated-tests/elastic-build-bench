'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13185<T> = T extends (infer U)[]
  ? DeepReadonlyArray13185<U>
  : T extends object
  ? DeepReadonlyObject13185<T>
  : T;

interface DeepReadonlyArray13185<T> extends ReadonlyArray<DeepReadonly13185<T>> {}

type DeepReadonlyObject13185<T> = {
  readonly [P in keyof T]: DeepReadonly13185<T[P]>;
};

type UnionToIntersection13185<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13185<T> = UnionToIntersection13185<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13185<T extends unknown[], V> = [...T, V];

type TuplifyUnion13185<T, L = LastOf13185<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13185<TuplifyUnion13185<Exclude<T, L>>, L>;

type DeepPartial13185<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13185<T[P]> }
  : T;

type Paths13185<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13185<K, Paths13185<T[K], Prev13185[D]>> : never }[keyof T]
  : never;

type Prev13185 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13185<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13185 {
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

type ConfigPaths13185 = Paths13185<NestedConfig13185>;

interface HeavyProps13185 {
  config: DeepPartial13185<NestedConfig13185>;
  path?: ConfigPaths13185;
}

const HeavyComponent13185 = memo(function HeavyComponent13185({ config }: HeavyProps13185) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13185) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13185 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13185: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13185.displayName = 'HeavyComponent13185';
export default HeavyComponent13185;
