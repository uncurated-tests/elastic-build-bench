'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13760<T> = T extends (infer U)[]
  ? DeepReadonlyArray13760<U>
  : T extends object
  ? DeepReadonlyObject13760<T>
  : T;

interface DeepReadonlyArray13760<T> extends ReadonlyArray<DeepReadonly13760<T>> {}

type DeepReadonlyObject13760<T> = {
  readonly [P in keyof T]: DeepReadonly13760<T[P]>;
};

type UnionToIntersection13760<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13760<T> = UnionToIntersection13760<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13760<T extends unknown[], V> = [...T, V];

type TuplifyUnion13760<T, L = LastOf13760<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13760<TuplifyUnion13760<Exclude<T, L>>, L>;

type DeepPartial13760<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13760<T[P]> }
  : T;

type Paths13760<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13760<K, Paths13760<T[K], Prev13760[D]>> : never }[keyof T]
  : never;

type Prev13760 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13760<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13760 {
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

type ConfigPaths13760 = Paths13760<NestedConfig13760>;

interface HeavyProps13760 {
  config: DeepPartial13760<NestedConfig13760>;
  path?: ConfigPaths13760;
}

const HeavyComponent13760 = memo(function HeavyComponent13760({ config }: HeavyProps13760) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13760) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13760 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13760: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13760.displayName = 'HeavyComponent13760';
export default HeavyComponent13760;
