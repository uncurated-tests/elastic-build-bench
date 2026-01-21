'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13796<T> = T extends (infer U)[]
  ? DeepReadonlyArray13796<U>
  : T extends object
  ? DeepReadonlyObject13796<T>
  : T;

interface DeepReadonlyArray13796<T> extends ReadonlyArray<DeepReadonly13796<T>> {}

type DeepReadonlyObject13796<T> = {
  readonly [P in keyof T]: DeepReadonly13796<T[P]>;
};

type UnionToIntersection13796<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13796<T> = UnionToIntersection13796<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13796<T extends unknown[], V> = [...T, V];

type TuplifyUnion13796<T, L = LastOf13796<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13796<TuplifyUnion13796<Exclude<T, L>>, L>;

type DeepPartial13796<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13796<T[P]> }
  : T;

type Paths13796<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13796<K, Paths13796<T[K], Prev13796[D]>> : never }[keyof T]
  : never;

type Prev13796 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13796<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13796 {
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

type ConfigPaths13796 = Paths13796<NestedConfig13796>;

interface HeavyProps13796 {
  config: DeepPartial13796<NestedConfig13796>;
  path?: ConfigPaths13796;
}

const HeavyComponent13796 = memo(function HeavyComponent13796({ config }: HeavyProps13796) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13796) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13796 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13796: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13796.displayName = 'HeavyComponent13796';
export default HeavyComponent13796;
