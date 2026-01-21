'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13478<T> = T extends (infer U)[]
  ? DeepReadonlyArray13478<U>
  : T extends object
  ? DeepReadonlyObject13478<T>
  : T;

interface DeepReadonlyArray13478<T> extends ReadonlyArray<DeepReadonly13478<T>> {}

type DeepReadonlyObject13478<T> = {
  readonly [P in keyof T]: DeepReadonly13478<T[P]>;
};

type UnionToIntersection13478<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13478<T> = UnionToIntersection13478<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13478<T extends unknown[], V> = [...T, V];

type TuplifyUnion13478<T, L = LastOf13478<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13478<TuplifyUnion13478<Exclude<T, L>>, L>;

type DeepPartial13478<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13478<T[P]> }
  : T;

type Paths13478<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13478<K, Paths13478<T[K], Prev13478[D]>> : never }[keyof T]
  : never;

type Prev13478 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13478<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13478 {
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

type ConfigPaths13478 = Paths13478<NestedConfig13478>;

interface HeavyProps13478 {
  config: DeepPartial13478<NestedConfig13478>;
  path?: ConfigPaths13478;
}

const HeavyComponent13478 = memo(function HeavyComponent13478({ config }: HeavyProps13478) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13478) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13478 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13478: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13478.displayName = 'HeavyComponent13478';
export default HeavyComponent13478;
